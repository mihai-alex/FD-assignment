# Framework Documentation

## Description

This toggle switch is a lightweight, customizable UI component framework built on top of Lit. The framework includes a robust base component structure, theme support, and interactive behaviors tied to specific labels like “Dark Mode”, “Notifications”, and “Airplane Mode”.

Key features:
- **Lightweight**: Minimal dependencies and fast rendering
- **Interactive**: Triggers global side effects based on toggle label
- **Customizable**: Theming support and initial state control
- **Type-safe**: Built with TypeScript and strongly typed decorators

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Basic Installation

```bash
# Create a new directory for your project
mkdir toggle-app
cd toggle-app

# Initialize a new npm project
npm init -y

# Install dependencies
npm install lit typescript vite
```

### Project Structure

After installation, organize your project like this:

```
toggle-app/
├── node_modules/
├── src/
│   ├── components/
│   │   └── MyToggleSwitch.ts     # Toggle switch component
│   ├── framework/
│   │   └── BaseComponent.ts      # Shared base component
│   ├── index.html
│   └── main.ts                   # Entry file and global styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### TypeScript Configuration

Recommended `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

## Usage

### Basic Usage

1. **Import the component in your entry file:**

```typescript
// main.ts
import './components/MyToggleSwitch';
```

2. **Create an HTML file to load your application:**

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Toggle Switch Demo</title>
  <script type="module" src="/src/main.ts"></script>
</head>
<body>
  <h1>Framework Design – 2025</h1>
  <div class="switches-container">
    <my-toggle-switch label="Dark Mode" initial="true" theme="blue"></my-toggle-switch>
    <my-toggle-switch label="Notifications" theme="green"></my-toggle-switch>
    <my-toggle-switch label="Airplane Mode" theme="purple"></my-toggle-switch>
  </div>
</body>
</html>
```

### Styling

Global styles are defined dynamically in `main.ts` using Lit’s `css` helper and injected via a `<style>` tag:

```typescript
const globalStyles = css`
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #2c3e50;
    margin-bottom: 2rem;
  }

  .switches-container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
```

## Components

### BaseComponent

The `BaseComponent` class extends Lit’s `LitElement` and logs lifecycle events to the console for debugging.

#### Usage

```typescript
import { BaseComponent } from '../framework/BaseComponent';

export class MyComponent extends BaseComponent {
  // Custom component logic
}
```

### MyToggleSwitch Component

The `MyToggleSwitch` component is an interactive, customizable toggle with optional visual theming and context-based behavior.

#### Parameters

| Property   | Type    | Default | Description                                     |
|------------|---------|---------|-------------------------------------------------|
| `label`    | String  | `''`    | Label displayed and used to determine behavior |
| `initial`  | Boolean | `false` | Initial toggle state                           |
| `theme`    | String  | `'blue'`| Visual accent theme (`blue`, `green`, `purple`) |

#### Example

```html
<my-toggle-switch label="Dark Mode" initial="true" theme="blue"></my-toggle-switch>
<my-toggle-switch label="Notifications" theme="green"></my-toggle-switch>
<my-toggle-switch label="Airplane Mode" theme="purple"></my-toggle-switch>
```

## Theming

Built-in theme classes dynamically apply accent colors via CSS variables:

```css
.theme-blue    { --accent: #3498db; }
.theme-green   { --accent: #2ecc71; }
.theme-purple  { --accent: #9b59b6; }
```

These themes style the active toggle switch background.

## Side Effects

Each toggle executes distinct global effects based on its label:

- **Dark Mode** – Switches the page background and text color.
- **Notifications** – Adds or removes a notification banner.
- **Airplane Mode** – Displays or removes a full-screen overlay.

These behaviors are conditionally triggered inside the component based on the value of the `label` attribute.

## Technologies Used
- TypeScript
- Lit
- HTML & CSS
- Node.js
- Vite