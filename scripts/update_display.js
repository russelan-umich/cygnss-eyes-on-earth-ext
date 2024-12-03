// Get the URL
const url = window.location.href;

// Extract the spacecraft number from a URL that looks like:
// https://eyes.nasa.gov/apps/earth/#/satellites/cygnss-3
const spacecraft_number = url.split('-')[1];

// Wait for 10 seconds for the page to render before making changes
setTimeout(() => {

    // Get the title of the web page
    let spafecraft_title = document.querySelectorAll('[class=" title outline"]');

    // Make sure at least one title is found
    if (spafecraft_title.length === 0) {
        console.error("No spacecraft title found");
    } else {
        // Change the spacecraft title based on the spacecraft number
        spafecraft_title[0].textContent = "CYGNSS FM0" + spacecraft_number;
    }
    
}, 10000);

// The wake lock sentinel.
let wakeLock = null;

// Function that attempts to request a wake lock.
const requestWakeLock = async () => {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
            console.log('Wake Lock was released');
    });
    console.log('Wake Lock is active');
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
};


// Refresh the page every 4 hours (this helps with the excess memory usage done by the website)
setTimeout(() => {
    window.location.reload();
}, 14400000);
