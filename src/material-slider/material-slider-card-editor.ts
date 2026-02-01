import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor } from "custom-card-helpers";
import {
  DEFAULT_CONFIG,
  MaterialSliderCardConfig,
} from "./material-slider-const";
import { localize } from "../localize/localize";
import { ControlType } from "../shared/types";
import { _entityChanged, _valueChanged } from "../shared/ha-editor";

@customElement("material-slider-card-editor")
export class MaterialSliderCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config: MaterialSliderCardConfig = DEFAULT_CONFIG;

  public setConfig(config: MaterialSliderCardConfig): void {
    this._config = { ...config };
  }

  async firstUpdated() {
    const helpers = await (window as any).loadCardHelpers();
    const card = await helpers.createCardElement({
      type: "entities",
      entities: [],
    });
    await card.constructor.getConfigElement();
  }

  setEntityFilter() {
    switch (this._config.control_type) {
      case ControlType.LIGHT:
        return ["light"];
      case ControlType.COVER:
        return ["cover"];
      case ControlType.NUMBER:
        return ["number"];
      case ControlType.INPUT_NUMBER:
        return ["input_number"];
      case ControlType.MEDIA_PLAYER_VOLUME:
        return ["media_player"];
      case ControlType.FAN:
        return ["fan"];
      case ControlType.CLIMATE:
        return ["climate"];
      default:
        return undefined;
    }
  }

  /**
   * Get localized domain name using HA's internal localization
   * Falls back to capitalized domain name if not available
   */
  private _getDomainName(domain: string): string {
    const translated = this.hass.localize(`component.${domain}.title`);
    if (translated && translated !== `component.${domain}.title`) {
      return translated;
    }
    // Fallback: capitalize and replace underscores
    return domain.charAt(0).toUpperCase() + domain.slice(1).replace(/_/g, " ");
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html``;
    }

    // Get localized domain names
    const lightName = this._getDomainName("light");
    const coverName = this._getDomainName("cover");
    const numberName = this._getDomainName("number");
    const inputNumberName = this._getDomainName("input_number");
    const mediaPlayerName = this._getDomainName("media_player");
    const fanName = this._getDomainName("fan");
    const climateName = this._getDomainName("climate");

    return html`
      <div class="form">
        <ha-select
          label="${localize("material_slider_card.control_type")}"
          .value=${this._config.control_type ?? "light"}
          configValue="control_type"
          @selected=${(ev: Event) => _valueChanged(ev, this)}
          @closed=${(ev: Event) => ev.stopPropagation()}
        >
          <mwc-list-item value="light">
            ${lightName}
          </mwc-list-item>
          <mwc-list-item value="cover">
            ${coverName}
          </mwc-list-item>
          <mwc-list-item value="number">
            ${numberName}
          </mwc-list-item>
          <mwc-list-item value="input_number">
            ${inputNumberName}
          </mwc-list-item>
          <mwc-list-item value="media_player_volume">
            ${mediaPlayerName}
          </mwc-list-item>
          <mwc-list-item value="fan">
            ${fanName}
          </mwc-list-item>
          <mwc-list-item value="climate">
            ${climateName}
          </mwc-list-item>
        </ha-select>

        <ha-textfield
          label="${localize("material_slider_card.name")}"
          .value=${this._config.name || ""}
          configValue="name"
          @input=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="e.g. Cooler"
        ></ha-textfield>

        <ha-entity-picker
          label="${localize("material_slider_card.entity")}"
          .value=${this._config.entity || ""}
          .hass=${this.hass}
          .includeDomains=${this.setEntityFilter()}
          allow-custom-entity
          configValue="entity"
          @value-changed=${(ev: CustomEvent) => _entityChanged(ev, this)}
          required
        ></ha-entity-picker>

        <ha-icon-picker
          label="${localize("material_slider_card.icon")}"
          .value=${this._config.icon || ""}
          configValue="icon"
          @value-changed=${(ev: Event) => _valueChanged(ev, this)}
          placeholder="mdi:lightbulb"
        ></ha-icon-picker>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.percentage")}</span
          >
          <ha-switch
            .checked=${this._config.show_percentage ?? true}
            configValue="show_percentage"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>

        <div class="switch-row">
          <span class="switch-label"
            >${localize("material_slider_card.bold_text")}</span
          >
          <ha-switch
            .checked=${this._config.bold_text ?? false}
            configValue="bold_text"
            @change=${(ev: Event) => _valueChanged(ev, this)}
          />
        </div>
      </div>
    `;
  }

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }

    .dual-icons {
      display: flex;
      gap: 16px;
    }

    .dual-icons ha-icon-input {
      flex: 1;
    }

    .switch-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .switch-label {
      font-size: 16px;
      font-weight: 500;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "material-slider-card-editor": MaterialSliderCardEditor;
  }
}
