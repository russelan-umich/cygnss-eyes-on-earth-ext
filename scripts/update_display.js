// Get the URL
const url = window.location.href;

// Extract the spacecraft number from a URL that looks like:
// https://eyes.nasa.gov/apps/earth/#/satellites/cygnss-3
const spacecraft_number = url.split('-')[1];

// Wait for 10 seconds before updating the title of the web page
setTimeout(() => {

    // Get the title of the web page
    const spafecraft_title = document.querySelectorAll('[class=" title outline"]');

    // Make sure at least one title is found
    if (spafecraft_title.length === 0) {
        console.error("No spacecraft title found");
    } else {
        // Change the spacecraft title based on the spacecraft number
        spafecraft_title[0].textContent = "CYGNSS FM0" + spacecraft_number;
    }
    
}, 10000);
