import { GoogleDevice } from "./google_model";
import { isDeviceOn, isOfflineState } from "./states";
import { ControlType, DeviceType, DomainType, getValidDeviceClass } from "./types";

/**
 * Icon context for determining the appropriate icon
 */
interface IconContext {
  stateObj: any;
  config: any;
  hass: any;
  domain: string;
  state: string;
  controlType: string;
  isOn: boolean;
  isOnline: boolean;
  deviceClass: string | null | undefined;
}

/**
 * Material Symbol icon mappings for domains
 */
const DOMAIN_ICONS: Record<string, { on: string; off: string }> = {
  [DomainType.SWITCH]: { on: "m3rf:switch", off: "m3r:switch" },
  [DomainType.NUMBER]: { on: "m3rf:settings-input-component", off: "m3r:settings-input-component" },
  [DomainType.FAN]: { on: "m3of:mode-fan", off: "m3o:mode-fan" },
  lock: { on: "m3of:lock", off: "m3o:lock-open" },
};

/**
 * Material Symbol icon mappings for control types
 */
const CONTROL_TYPE_ICONS: Record<string, { on: string; off: string }> = {
  [ControlType.LIGHT]: { on: "m3of:lightbulb", off: "m3r:lightbulb" },
  [ControlType.COVER]: { on: "m3rf:blinds", off: "m3rf:blinds-closed" },
  [ControlType.SCENE]: { on: "mdi:creation-outline", off: "mdi:creation-outline" },
};

/**
 * Material Symbol icon mappings for device classes (sensors)
 */
const DEVICE_CLASS_ICONS: Record<string, { on: string; off: string }> = {
  [DeviceType.CONNECTIVITY]: { on: "m3of:nest-wifi-router", off: "m3o:nest-wifi-router" },
  [DeviceType.PRESENCE]: { on: "m3rf:sensor-occupied", off: "m3r:sensor-occupied" },
  [DeviceType.OCCUPANCY]: { on: "m3rf:sensor-occupied", off: "m3r:sensor-occupied" },
  [DeviceType.MOTION]: { on: "m3rf:sensors-krx", off: "m3r:sensors-krx" },
  [DeviceType.MEASUREMENT]: { on: "mdi:scale-bathroom", off: "mdi:scale-bathroom" },
  [DeviceType.DOOR]: { on: "m3rf:sensor-door", off: "m3r:sensor-door" },
  [DeviceType.TEMPERATURE]: { on: "m3rf:temp-preferences-eco", off: "m3r:temp-preferences-eco" },
  [DeviceType.HUMIDITY]: { on: "m3rf:humidity-percentage", off: "m3r:humidity-percentage" },
  [DeviceType.TAMPER]: { on: "m3rf:tamper-detection-on", off: "m3r:tamper-detection-on" },
  [DeviceType.ILLUMINANCE]: { on: "m3rf:light-mode", off: "m3r:light-mode" },
};

/**
 * Climate/thermostat state icons
 */
const CLIMATE_STATE_ICONS: Record<string, string> = {
  auto: "m3of:thermostat-auto",
  heat_cool: "m3of:mode-heat-cool",
  heat: "m3of:mode-heat",
  dry: "m3of:cool-to-dry",
  fan: "m3of:mode-fan",
  fan_only: "m3of:mode-fan",
  cool: "m3of:mode",
  eco: "m3rf:eco",
  off: "m3s:thermometer",
  unavailable: "m3s:thermometer",
};

/**
 * Google device icons for media players
 */
const GOOGLE_DEVICE_ICONS: Record<string, { on: string; off: string }> = {
  [GoogleDevice.NEST_MINI]: { on: "m3of:nest-mini", off: "m3o:nest-mini" },
  [GoogleDevice.GOOGLE_HOME]: { on: "m3of:home-speaker", off: "m3o:home-speaker" },
  [GoogleDevice.NEST_HUB]: { on: "m3of:nest-display", off: "m3o:nest-display" },
  [GoogleDevice.GOOGLE_CAST_GROUP]: { on: "m3rf:speaker-group", off: "m3r:speaker-group" },
};

/**
 * Get battery icon based on level
 */
function getBatteryIcon(level: number, isOnline: boolean): string {
  if (!isOnline) return "m3r:battery-android-alert";

  if (level >= 90) return "m3rf:battery-android-0";
  if (level >= 70) return "m3rf:battery-android-5";
  if (level >= 50) return "m3rf:battery-android-4";
  if (level >= 30) return "m3rf:battery-android-3";
  if (level >= 10) return "m3rf:battery-android-2";
  if (level >= 5) return "m3rf:battery-android-1";
  return "m3rf:battery-android-0";
}

/**
 * Get Material Symbol icon based on context
 * This provides the themed M3 icons for various entity types
 */
export function getMaterialIcon(ctx: IconContext): string | null {
  const { domain, state, controlType, isOn, isOnline, deviceClass, stateObj, config, hass } = ctx;

  // Domain-based icons
  if (DOMAIN_ICONS[domain]) {
    return isOn ? DOMAIN_ICONS[domain].on : DOMAIN_ICONS[domain].off;
  }

  // Control type based icons
  switch (controlType) {
    case ControlType.LIGHT:
      // Allow custom icon override for lights
      if (config.icon && config.icon !== "m3of:lightbulb" && config.icon !== "m3r:lightbulb") {
        return config.icon;
      }
      return isOn ? CONTROL_TYPE_ICONS[ControlType.LIGHT].on : CONTROL_TYPE_ICONS[ControlType.LIGHT].off;

    case ControlType.COVER:
      if (config.icon) return config.icon;
      return isOn ? CONTROL_TYPE_ICONS[ControlType.COVER].on : CONTROL_TYPE_ICONS[ControlType.COVER].off;

    case ControlType.THERMOMETER: {
      const presetMode = stateObj.attributes?.preset_mode;
      const climateState = presetMode === "eco" ? "eco" : state;
      return CLIMATE_STATE_ICONS[climateState] ?? "m3of:thermometer";
    }

    case ControlType.SCENE:
      return CONTROL_TYPE_ICONS[ControlType.SCENE].on;

    case ControlType.MEDIA_PLAYER: {
      const device_id = hass?.entities?.[config.entity]?.device_id;
      const google_device: GoogleDevice = device_id ? hass?.devices?.[device_id]?.model : null;

      if (google_device && GOOGLE_DEVICE_ICONS[google_device]) {
        return isOn ? GOOGLE_DEVICE_ICONS[google_device].on : GOOGLE_DEVICE_ICONS[google_device].off;
      }
      return isOn ? "m3rf:tv-gen" : "m3r:tv-gen";
    }

    case ControlType.GENERIC:
    case ControlType.STATE: {
      if (domain === DomainType.BINARY_SENSOR || domain === DomainType.SENSOR) {
        // Battery has special level-based icons
        if (deviceClass === DeviceType.BATTERY) {
          return getBatteryIcon(Number.parseInt(state), isOnline);
        }

        // Other device classes
        if (deviceClass && DEVICE_CLASS_ICONS[deviceClass]) {
          const icons = DEVICE_CLASS_ICONS[deviceClass];
          // Some device classes use isOnline, others use isOn
          const useOnline = [DeviceType.TEMPERATURE, DeviceType.HUMIDITY].includes(deviceClass as DeviceType);
          return useOnline ? (isOnline ? icons.on : icons.off) : (isOn ? icons.on : icons.off);
        }
      }
      break;
    }
  }

  return null;
}

/**
 * Evaluate template icon (supports [[[ ... ]]] syntax)
 */
function evaluateTemplateIcon(config: any, stateObj: any, hass: any): string | null {
  if (
    typeof config.icon === "string" &&
    config.icon.trim().startsWith("[[[") &&
    config.icon.trim().endsWith("]]]")
  ) {
    try {
      const code = config.icon.trim().slice(3, -3);
      const fn = new Function("entity", "state", "hass", code);
      const result = fn(stateObj, stateObj.state, hass);
      if (result && typeof result === "string") {
        return result;
      }
    } catch (e) {
      console.warn("Error evaluating icon template:", e);
      return "mdi:alert-circle-outline";
    }
  }
  return null;
}

/**
 * Get icon for an entity following the priority order:
 *
 * When use_default_icon is FALSE:
 *   - Use card config icons (icon, dual_icon, icon_on, icon_off)
 *
 * When use_default_icon is TRUE:
 *   - If use_material_icons is TRUE: Use Material Symbol icons (with fallback to null for ha-state-icon)
 *   - If use_material_icons is FALSE: Return null (let ha-state-icon handle it)
 */
export function getIcon(stateObj: any, config: any, hass: any): string | null {
  const domain = stateObj.entity_id.split(".")[0];
  const state = stateObj.state;
  const controlType: string = config.control_type ?? "generic";
  const isOn = isDeviceOn(state);
  const isOnline = !isOfflineState(state, controlType);
  const deviceClass = getValidDeviceClass(stateObj.attributes);

  // Use default icon setting (backwards compatible)
  const useDefault = config.use_default_icon ?? true;
  // New setting: use Material Symbol icons (only applies when useDefault is true)
  const useMaterialIcons = config.use_material_icons ?? true;

  // 1. Check for template icon [[[ ... ]]] - always takes priority
  const templateIcon = evaluateTemplateIcon(config, stateObj, hass);
  if (templateIcon) {
    return templateIcon;
  }

  // 2. If use_default_icon is false, use card config icons (as before)
  if (!useDefault) {
    if (config.dual_icon) {
      return isOn ? (config.icon_on || `mdi:${domain}`) : (config.icon_off || `mdi:${domain}`);
    }
    return config.icon || `mdi:${domain}`;
  }

  // === use_default_icon is TRUE from here ===

  // 3. If use_material_icons is FALSE, return null to let ha-state-icon handle it
  if (!useMaterialIcons) {
    return null;
  }

  // 4. Check entity registry icon (user customization in HA UI)
  const entityRegistryIcon = hass?.entities?.[stateObj.entity_id]?.icon;
  if (entityRegistryIcon) {
    return entityRegistryIcon;
  }

  // 5. Check state attributes icon
  const stateAttributesIcon = stateObj?.attributes?.icon;
  if (stateAttributesIcon) {
    return stateAttributesIcon;
  }

  // 6. Try Material Symbol icons
  const ctx: IconContext = {
    stateObj,
    config,
    hass,
    domain,
    state,
    controlType,
    isOn,
    isOnline,
    deviceClass,
  };

  const materialIcon = getMaterialIcon(ctx);
  if (materialIcon) {
    return materialIcon;
  }

  // 7. Return null to let ha-state-icon handle it
  return null;
}
