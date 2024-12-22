// Function to handle feature activation
function activateFeature(featureName) {
    alert(${featureName} is now activated.);
    // You can add more interactivity here (e.g., change status, disable button, etc.)
}

// Function to handle form validation and submission
document.getElementById('settingsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    var userName = document.getElementById('userName').value;
    var vehicleID = document.getElementById('vehicleID').value;

    // Simple validation
    if (userName === '' || vehicleID === '') {
        alert('Please fill in all fields.');
        return;
    }

    // If validation passes, update status
    alert(Settings saved! User: ${userName}, Vehicle ID: ${vehicleID});

    // Optionally, reset the form
    this.reset();
});

// Simulate activating the system control and updating status
function toggleSystemStatus() {
    var systemStatus = document.getElementById('systemStatus');
    if (systemStatus.innerText === 'Inactive') {
        systemStatus.innerText = 'Active';
        systemStatus.style.color = '#4caf50';
    } else {
        systemStatus.innerText = 'Inactive';
        systemStatus.style.color = '#f44336';
    }
}

// Automatically activate system control when page loads
window.onload = toggleSystemStatus;