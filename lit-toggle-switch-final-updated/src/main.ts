import './components/MyToggleSwitch.ts';
import { css } from 'lit';

const globalStyles = css`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    margin: 0;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #2c3e50;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  .switches-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const styleEl = document.createElement('style');
styleEl.textContent = globalStyles.toString();
document.head.appendChild(styleEl);
