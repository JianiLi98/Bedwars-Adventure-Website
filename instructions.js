// Allow user to navigate through each step just by clicking the step buttons.
function openStep(event, stepName) {
    let stepContents = document.querySelectorAll('.stepContent');
    for (let step of stepContents) {
        step.style.display = 'none';
    }

    let stepLinks = document.querySelectorAll('.stepLink');
    for (let link of stepLinks) {
        link.classList.remove('active');
    }

    document.querySelector('#' + stepName).style.display = 'block';
    event.currentTarget.classList.add('active');
}

// Allow user to nagivate through each step by clicking the 'prev' ad 'next' buttons.
function nextStep(stepName, buttonName) {
    openStep(event, stepName)
    document.querySelector('#' + buttonName).classList.add('active')
}


// Allow user to click to show and hide the additonal resource information.
function openInfo(event, infoName) {
    let info = document.querySelector('#' + infoName);
    let visible = getComputedStyle(info).display === 'block';

    if (visible) {
        info.style.display = 'none'
        event.currentTarget.classList.remove('active');
    } else {
        info.style.display = 'block';
        event.currentTarget.classList.add('active');
    }
}


// Calculate and ouput users the location and time needed for a prioritised resource
function getResource() {
    event.preventDefault()

    document.querySelector('#output').style.display = 'block';

    let resource = document.querySelector('#resources').value;
    let amount = document.querySelector('#amount').value;
    let tier = document.querySelector('input[name="tiers"]:checked');
    let location, time

    let error = document.querySelector('#errorOutput');
    let tierCheck = tier ? tier.value : null;

    // Validate inputs
    if (!resource) {
        change('validOutput', 'invalidOutput');
        error.textContent = "Please select a resource type.";
        return
    }
    if (!tierCheck) {
        change('validOutput', 'invalidOutput');
        error.textContent = "Please select a tier.";
        return
    }
    else {
        change('invalidOutput', 'validOutput')
        if (resource == 'iron' || resource == 'gold') {
            location = 'Base Generator - go to your own island.';
            time = calculateTime(resource, amount, tier.value);

            giveOutput(location, time)
        } else if (resource == 'diamonds') {
            location = 'Diamond Generator - go to side islands.';
            time = calculateTime(resource, amount, tier.value);
            giveOutput(location, time)
        } else {
            location = 'Emerald Generator - go to middle island.';
            time = calculateTime(resource, amount, tier.value);
            giveOutput(location, time);
        }
    }

}

// Display one of the valid or invalid ouput areas and hide the other.
function change(idName1, idName2) {
    document.querySelector('#' + idName1).style.display = 'none';
    document.querySelector('#' + idName2).style.display = 'block';
}

// Calculates and returns the time needed in seconds
function calculateTime(resource, amount, tier) {
    spawnRates = {
        'iron': [0.5, 0.25, 0.1],
        'gold': [8, 4, 2],
        'diamonds': [30, 20, 10],
        'emeralds': [60, 40, 20]
    };

    return spawnRates[resource][tier - 1] * amount;
}

// Display the valid output by updating all the calculated results.
function giveOutput(loc, t) {
    let locOutput = document.querySelector('#locOutput')
    let tOutput = document.querySelector('#timeOutput')
    locOutput.textContent = 'Resource located at: ' + loc
    tOutput.textContent = 'Estimated collect time is: ' + String(t) + ' seconds.'

}

// A coherent side bar menu throughout the website. 
// Opens the menu.
function openSidebar() {
    document.getElementById("content_sidebar").style.width = "250px";
    document.getElementById("content_sidebar").style.left = "0";
    document.getElementById("nav").style.marginLeft = "20%";
    document.getElementById("mainContent").style.marginLeft = "20%";

}

// Closes the menu.
function closeSidebar() {
    document.getElementById("content_sidebar").style.width = '0';
    document.getElementById("content_sidebar").style.left = '-250px';
    document.getElementById("nav").style.marginLeft = '1.5vw';
    document.querySelector("mainContent").style.marginLeft = '1.5vw';
}