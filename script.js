function showForm(team) {
    document.getElementById("form-container").classList.remove("hidden");
    document.getElementById("form-container").style.backgroundColor = getComputedStyle(event.target).backgroundColor;
    document.getElementById("form-container").setAttribute("data-team", team);
}

function showBatsman() {
    document.getElementById("batsman-container").classList.remove("hidden");
}

function showAllrounders() {
    document.getElementById("allrounders-container").classList.remove("hidden");
}

function showWicketKeepers() {
    document.getElementById("wicket-keepers-container").classList.remove("hidden");
}

function showBowlers() {
    document.getElementById("bowlers-container").classList.remove("hidden");
}

function displayFinalOutput() {
    const team = document.getElementById("form-container").getAttribute("data-team");
    const captain = document.getElementById("captain").value;
    const batsman = document.getElementById("batsman").value;
    const allrounders = document.getElementById("allrounders").value;
    const wicketKeepers = document.getElementById("wicket-keepers").value;
    const bowlers = document.getElementById("bowlers").value;

    const outputContainer = document.createElement("div");
    outputContainer.style.backgroundColor = getComputedStyle(document.getElementById("form-container")).backgroundColor;
    outputContainer.style.padding = "20px";
    outputContainer.style.margin = "20px auto";
    outputContainer.style.width = "300px";
    outputContainer.style.textAlign = "center";

    outputContainer.innerHTML = `
        <h3>${team}</h3>
        <p><strong>Captain:</strong> ${captain}</p>
        <p><strong>Batsman:</strong> ${batsman}</p>
        <p><strong>Allrounders:</strong> ${allrounders}</p>
        <p><strong>Wicket Keepers:</strong> ${wicketKeepers}</p>
        <p><strong>Bowlers:</strong> ${bowlers}</p>
    `;

    document.body.appendChild(outputContainer);
}