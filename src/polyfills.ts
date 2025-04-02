// src/polyfills.ts
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading Zone.js and are sorted by browsers.
 *   2. Application imports. Files imported after Zone.js that should be loaded before your main file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes recent versions of Safari, Chrome (including
 * Opera), Edge, and Firefox. These browsers support native Web APIs like `fetch`, `Promise`, etc.
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * By default, Zone.js will patch all possible browser APIs for change detection.
 * If you need to support older browsers, you may need to add additional polyfills here.
 */

/**
 * Required to support Web Animations (`@angular/animations`).
 * Needed for: All but Chrome, Firefox, and recent Safari.
 */
import 'web-animations-js'; // Run `npm install --save web-animations-js`.

/**
 * Add polyfills for older browsers if needed (e.g., IE11).
 * Uncomment the following lines if you need to support IE11:
 */
// import 'core-js/es/array';
// import 'core-js/es/object';
// import 'core-js/es/promise';

/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
import 'zone.js'; // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */