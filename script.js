document.getElementById('serverSetupForm').addEventListener('submit', function (e) {
    e.preventDefault();  // Prevents the form from submitting in the traditional way
    generateConfig();
});

function generateConfig() {
    // Get values from the form
    const os = document.getElementById('os').value;
    const hostname = document.getElementById('hostname').value;
    const maxPlayers = document.getElementById('maxPlayers').value;
    const port = document.getElementById('port').value;
    const queryPort = document.getElementById('queryPort').value;
    const scenario = document.getElementById('scenario').value;
    const map = document.getElementById('map').value;
    const password = document.getElementById('password').value;

    // Determine command line based on OS
    let config;
    if (os === 'windows') {
        config = `InsurgencyServer.exe ${map}?Scenario=${scenario}?MaxPlayers=${maxPlayers}?Password=${password} -Port=${port} -QueryPort=${queryPort} -log -hostname="${hostname}"`;
    } else {
        config = `Insurgency/Binaries/Linux/InsurgencyServer-Linux-Shipping ${map}?Scenario=${scenario}?MaxPlayers=${maxPlayers}?Password=${password} -Port=${port} -QueryPort=${queryPort} -log -hostname="${hostname}"`;
    }

    // Output config to text area
    document.getElementById('configOutput').value = config;
}
