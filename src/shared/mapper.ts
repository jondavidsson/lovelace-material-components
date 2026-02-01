import { adjustTempAuto } from "../material-climate/material-climate-mapper";
import { localize } from "../localize/localize";
import {
  CARD_VERSION,
  formatSmartDate,
  getOrDefault,
  isNullOrEmpty,
} from "./utils";
import {
  ControlType,
  DeviceType,
  DomainType,
  getValidDeviceClass,
} from "./types";
import { isDeviceOn, isOfflineState } from "./states";

// Re-export getIcon from icon-mapper for backwards compatibility
export { getIcon } from "./icon-mapper";

export function mapStateDisplay(
  stateObj: any,
  control_type: string,
  isOffline: boolean,
  fix_temperature: "true" | "false" | "auto" = "false",
  is_climate_card: boolean = false,
  hass: any,
) {
  // App version
  if (control_type === ControlType.APP_VERSION) {
    return `V${CARD_VERSION}`;
  }

  if (isNullOrEmpty(stateObj)) return "";

  const domain = stateObj.entity_id?.split(".")[0] ?? "";
  const isOn = isDeviceOn(stateObj.state);
  const stateText = hass?.formatEntityState
    ? hass.formatEntityState(stateObj)
    : stateObj.state;

  const deviceClass = getValidDeviceClass(stateObj.attributes);

  // Offline
  if (isOfflineState(stateObj.state)) {
    return localize("common.offline");
  }

  // Fan
  if (domain === DomainType.FAN) {
    if (!isOn) return stateText;
    const percentage = hass.formatEntityAttributeValue(stateObj, "percentage");
    return `${stateText} • ${percentage}`;
  }

  // Thermometer / Climate
  if (control_type === ControlType.THERMOMETER && !isOffline) {
    const { preset_mode, temperature, current_temperature } =
      stateObj.attributes ?? {};

    const preset = preset_mode === "eco" ? `${localize("common.eco")} • ` : "";

    const isOffWithTemp = !isOn && !isNullOrEmpty(temperature);
    const label =
      isOffWithTemp && is_climate_card ? localize("common.indoor") : stateText;

    const formattedTemp = hass
      ? hass.formatEntityAttributeValue(
          stateObj,
          "current_temperature",
          adjustTempAuto(fix_temperature, current_temperature),
        )
      : `${adjustTempAuto(fix_temperature, current_temperature)}°`;

    return `${label} • ${preset}${formattedTemp}`;
  }

  // Media player
  if (control_type === ControlType.MEDIA_PLAYER && !isOffline) {
    if (!isOn) return "";
    const appName = getOrDefault(stateObj.attributes?.app_name, "");
    return appName ? `${stateText} • ${appName}` : stateText;
  }

  // Timestamp / Event
  if (deviceClass === DeviceType.TIMESTAMP || domain === "event") {
    return formatSmartDate(stateObj.state);
  }

  // Automation
  if (control_type === ControlType.AUTOMATION) {
    return isOn ? localize("common.active") : localize("common.inactive");
  }

  // Default: Home Assistant formatting
  if (hass?.formatEntityState) {
    return hass.formatEntityState(stateObj);
  }

  // Fallback
  return stateObj.state;
}

//export function mapStateDisplay(
//  stateObj: any,
//  control_type: string,
//  isOffline: boolean,
//  fix_temperature: "true" | "false" | "auto" = "false",
//  is_presence_sensor: boolean = false,
//  is_climate_card: boolean = false,
//) {
//  const domain = isNullOrEmpty(stateObj)
//    ? ""
//    : stateObj.entity_id!.split(".")[0];
//
//  if (control_type === ControlType.APP_VERSION) {
//    return "V".concat(CARD_VERSION);
//  }
//
//  let text = "";
//  const isOn = isDeviceOn(stateObj.state);
//
//  switch (domain) {
//    case DomainType.FAN: {
//      text =
//        stateObj.attributes.percentage && isOn
//          ? " • " + stateObj.attributes.percentage + "%"
//          : "";
//      return getStateDisplay(stateObj.state, text, is_presence_sensor);
//    }
//  }
//  if (control_type === ControlType.THERMOMETER && !isOffline) {
//    const presetMode = stateObj.attributes?.preset_mode;
//    const preset =
//      presetMode && presetMode == "eco" ? localize("common.eco") + " • " : "";
//    const isOffAndHasTemperature =
//      !isOn && !isNullOrEmpty(stateObj.attributes.temperature);
//    if (isOn || isOffAndHasTemperature || !is_climate_card) {
//      text = stateObj.attributes.current_temperature
//        ? " • " +
//          preset +
//          adjustTempAuto(
//            fix_temperature,
//            stateObj.attributes.current_temperature,
//          ) +
//          "°"
//        : "";
//    } else
//      return (
//        localize("common.indoor") +
//        " • " +
//        adjustTempAuto(
//          fix_temperature,
//          stateObj.attributes.current_temperature,
//        ) +
//        "°"
//      );
//  }
//  if (control_type === ControlType.MEDIA_PLAYER && !isOffline) {
//    if (!isDeviceOn(stateObj.state)) return "";
//    const app_name = getOrDefault(stateObj.attributes.app_name, "");
//    text = app_name ? " • " + app_name : "";
//  }
//  if (
//    (control_type === ControlType.GENERIC && !isOffline) ||
//    (control_type === ControlType.STATE && !isOffline)
//  ) {
//    const device_class = getValidDeviceClass(stateObj.attributes);
//    if (
//      device_class == DeviceType.BATTERY ||
//      device_class == DeviceType.HUMIDITY
//    )
//      return (
//        Number.parseInt(stateObj.state) +
//        (stateObj.attributes.unit_of_measurement ?? "%")
//      );
//    if (device_class == DeviceType.TEMPERATURE)
//      return (
//        stateObj.state + " " + (stateObj.attributes.unit_of_measurement ?? "°")
//      );
//    if (device_class == DeviceType.TIMESTAMP)
//      return formatSmartDate(stateObj.state);
//
//    if (domain == "event") {
//      return formatSmartDate(stateObj.state);
//    }
//
//    if (
//      (control_type === ControlType.STATE && !isOffline) ||
//      (!isDeviceOnline(stateObj.state) && !isOffline)
//    ) {
//      return stateObj.state;
//    }
//  }
//
//  if (control_type == ControlType.AUTOMATION) {
//    if (isDeviceOn(stateObj.state)) return localize("common.active");
//    else return localize("common.inactive");
//  }
//  return getStateDisplay(stateObj.state, text, is_presence_sensor);
//}
//
//export function getStateDisplay(
//  state: string,
//  text: string = "",
//  is_presence_sensor: boolean = false,
//): string {
//  if (!isDeviceOnline(state)) {
//    return localize("common.offline");
//  }
//
//  const stateMap: Record<string, string> = {
//    [OnlineStates.ON]: is_presence_sensor
//      ? localize("common.presence")
//      : localize("common.on"),
//    [OnlineStates.OFF]: is_presence_sensor
//      ? localize("common.off_presence")
//      : localize("common.off"),
//    [OnlineStates.AUTO]: localize("common.auto"),
//    [OnlineStates.ECO]: localize("common.eco"),
//    [OnlineStates.HEAT]: localize("common.heat"),
//    [OnlineStates.COOL]: localize("common.cool"),
//    [OnlineStates.DRY]: localize("common.dry"),
//    [OnlineStates.FAN]: localize("common.fan"),
//    [OnlineStates.FAN_ONLY]: localize("common.fan"),
//    [OnlineStates.HEAT_COOL]: localize("common.auto"),
//    [OnlineStates.IDLE]: localize("common.idle"),
//    [OnlineStates.PAUSED]: localize("common.paused"),
//    [OnlineStates.PLAYING]: localize("common.playing"),
//    [OnlineStates.IDLE_2]: localize("common.on"),
//  };
//
//  const finalState = stateMap[state] || state;
//
//  return text != "" ? finalState + text : finalState;
//}

export function getName(config: any, hass: any) {
  if (config.name) return config.name;
  const stateObj = hass.states[config.entity!];
  if (stateObj && stateObj.attributes.friendly_name)
    return stateObj.attributes.friendly_name;
  if (hass && hass.entities && hass.entities[config.entity]) {
    const device_id = hass.entities[config.entity!].device_id;
    const device = hass.devices[device_id];
    return device.name;
  }
}
