function calcEfficiency() {
    // 1. Get Elements and convert to integer and float.
    const pumpTypeElement = parseInt(document.getElementById('pump_types').value) || 100;
    const flowrateElement = parseFloat(document.getElementById('flowrate').value) || 0;
    const pressureElement = parseFloat(document.getElementById('pressure').value) || 0;
    const pwConsumptionElement = parseFloat(document.getElementById('pw_consumption').value) || 0;
    const pipeDiameterElement = parseFloat(document.getElementById('pipe_diameter').value) || 0;
    const elevationDiffElement = parseFloat(document.getElementById('elevation_diff').value) || 0;

    // 2. Calculation.
    // 2.1. Calculate water power.
    const waterPower = flowrateElement*pressureElement;
    // 2.2. Calculate elevation lost.
    const elevationLost = elevationDiffElement*9.81; // ~9.81 is gravity on the earth.
    // 2.3. Calculate pipe lost.
    const pipeLost = (flowrateElement/(pipeDiameterElement**2)) * 100;
    // 2.4. Summation water power, elevation lost and pipe lost.
    const totalPowerLost = waterPower+elevationLost+pipeLost;
    // 2.5. Final Efficiency percent calculation.
    const efficiencyPercent = (totalPowerLost/pwConsumptionElement) * pumpTypeElement;

    // 3. Replace value on the HTML page in result_efficiency Element.
    document.getElementById("result_efficiency").textContent = efficiencyPercent.toFixed(2);
}