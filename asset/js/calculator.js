function calcEfficiency() {
    // Get Elements
    const pumpTypeElement = document.getElementById('pump_types') || 0;
    const flowrateElement = parseFloat(document.getElementById('flowrate').value) || 0;
    const pressureElement = parseFloat(document.getElementById('pressure').value) || 0;
    const pwConsumptionElement = parseFloat(document.getElementById('pw_consumption').value) || 0;
    const pipeDiameterElement = parseFloat(document.getElementById('pipe_diameter').value) || 0;
    const elevationDiffElement = parseFloat(document.getElementById('elevation_diff').value) || 0;
    
    document.getElementById("result_efficiency").textContent = 2;
}