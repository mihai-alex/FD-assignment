import { html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseComponent } from '../framework/BaseComponent';

@customElement('my-toggle-switch')
export class MyToggleSwitch extends BaseComponent {
  // @ts-ignore
  @property({ type: String }) label = '';
  // @ts-ignore
  @property({ type: Boolean }) initial = false;
  // @ts-ignore
  @property({ type: String }) theme = 'blue';

  // @ts-ignore
  @state() private toggled: boolean = this.initial;

  static styles = css`
    .switch-container {
      display: flex;
      align-items: center;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      padding: 1.5rem 2rem;
      width: 320px;
      justify-content: space-between;
      transition: all 0.3s ease;
    }

    .theme-blue {
      --accent: #3498db;
    }

    .theme-green {
      --accent: #2ecc71;
    }

    .theme-purple {
      --accent: #9b59b6;
    }

    .label {
      color: #2c3e50;
      font-size: 1.2rem;
      font-weight: 500;
    }

    .toggle {
      position: relative;
      width: 60px;
      height: 30px;
      background-color: #ccc;
      border-radius: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .toggle::after {
      content: '';
      position: absolute;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background-color: white;
      top: 2px;
      left: 2px;
      transition: left 0.3s;
    }

    .on {
      background-color: var(--accent);
    }

    .on::after {
      left: 32px;
    }

    .notification-banner {
      background: #f1c40f;
      color: #000;
      padding: 0.5rem;
      text-align: center;
      font-weight: bold;
    }
  `;

  protected firstUpdated() {
    this.toggled = this.initial;
    this.applySideEffects();
  }

  private toggleSwitch() {
    this.toggled = !this.toggled;
    this.applySideEffects();
  }

  private applySideEffects() {
    const label = this.label.toLowerCase();
    // console.log(`applySideEffects called for label: ${label}, toggled: ${this.toggled}`);

    if (label === 'dark mode') {
      document.body.style.background = this.toggled
          ? '#121212'
          : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
      document.body.style.color = this.toggled ? '#ffffff' : '#2c3e50';
    } else if (label === 'notifications') {
      const id = 'notification-banner';
      let banner = document.getElementById(id);
      if (this.toggled && !banner) {
        banner = document.createElement('div');
        banner.id = id;
        banner.className = 'notification-banner';
        banner.textContent = '🔔 Notifications Enabled';
        document.body.prepend(banner);
      } else if (!this.toggled && banner) {
        banner.remove();
      }
    } else if (label === 'airplane mode') {
      // console.log('Handling airplane mode');
      const id = 'disabled-overlay';
      let overlay = document.getElementById(id);
      if (this.toggled && !overlay) {
        overlay = document.createElement('div');
        overlay.id = id;
        overlay.innerText = '✈️ Airplane Mode Enabled';
        overlay.style.position = 'fixed';
        overlay.style.inset = '0';
        overlay.style.backgroundColor = 'rgba(200, 200, 200, 0.8)';
        overlay.style.zIndex = '9999';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.fontSize = '2rem';
        overlay.style.fontWeight = 'bold';
        overlay.style.color = '#333';
        overlay.style.pointerEvents = 'none';
        document.body.appendChild(overlay);
      } else if (!this.toggled && overlay) {
        overlay.remove();
      }
    }
  }

  render() {
    return html`
      <div class="switch-container theme-${this.theme}">
        <span class="label">${this.label}</span>
        <div class="toggle ${this.toggled ? 'on' : ''}" @click=${this.toggleSwitch}></div>
      </div>
    `;
  }
}
