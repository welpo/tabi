// Initialise Plausible analytics queue for the new script format (v3.1.0+).
// This sets up a queue system that collects tracking calls before the main
// Plausible script loads, ensuring no events are lost.
window.plausible = window.plausible || function () {
    (plausible.q = plausible.q || []).push(arguments);
};
// Initialise the Plausible configuration object.
plausible.init = plausible.init || function (config) {
    plausible.o = config || {};
};
// Set up Plausible with default configuration.
plausible.init();
