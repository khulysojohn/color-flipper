# Color Flipper Project

This project is a single-page application that combines three different color flipper functionalities: random color names, hexadecimal colors, and RGB colors. The background color of the webpage changes upon user interaction, and the corresponding color value is displayed. Additionally, users can copy the displayed color using a "Copy Color" button.

## Features

- **Random Color Names**: Generates random color names and updates the background.
- **Hexadecimal Colors**: Generates random hex colors and updates the background.
- **RGB Colors**: Generates random RGB colors and updates the background.
- **Copy Color**: Users can copy the displayed color value to the clipboard with a single click.
- **Navigation**: A simple navigation system allows users to switch between the different color flipper modes without leaving the page.

## Structure

### HTML

The entire project is contained within a single HTML file. It includes:

- A **Navigation Bar**: Users can switch between different color modes (Random, Hex, RGB) using navigation links.
- Three **Color Sections**: Each section corresponds to a different color mode:
  1. **Random Color Names**
  2. **Hexadecimal Colors**
  3. **RGB Colors**
- Each section has a button to generate a new color and a "Copy Color" button to copy the current color value.

### CSS (`style.css`)

The `style.css` file is used for styling the elements on the page, such as the navigation bar, buttons, color display, and footer. It ensures a clean, responsive layout that looks good on both desktop and mobile devices.

### JavaScript (`app.js`)

All functionality is handled by a single JavaScript file (`app.js`), which includes:

- **Random Color Name Generator**: Selects a random color name from a predefined array.
- **Hex Color Generator**: Generates a random 6-character hex color value.
- **RGB Color Generator**: Selects a random RGB value from a predefined array.
- **Copy to Clipboard**: Copies the current color value to the user's clipboard.
- **Navigation Management**: Toggles between the three color modes using JavaScript to hide or display the appropriate sections.

### Usage

To use the Color Flipper project:

1. Open the HTML file in any modern web browser.
2. Use the **navigation bar** to switch between the different color modes:
   - **Random**: Generates a random color name (e.g., "Blue", "Red").
   - **Hex**: Generates a random hexadecimal color (e.g., `#FF5733`).
   - **RGB**: Generates a random RGB color (e.g., `rgb(255, 0, 0)`).
3. Click the "Generate" button in each section to change the background color.
4. Click the "Copy Color" button to copy the current color value to the clipboard.

### Credits

This Color Flipper project was designed and developed by Khulyso.dev. The project is licensed under the MIT License.
