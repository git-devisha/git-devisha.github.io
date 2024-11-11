/*document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const jobTitle = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;
    const companyName = document.getElementById('company-name').value;

    // Display the profile information
    const profileOutput = document.getElementById('profile-output');
    profileOutput.innerHTML = `
        <h2>Profile Summary</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Company Name:</strong> ${companyName ? companyName : 'N/A'}</p>
    `;
});*/


// Listen for form submission
document.getElementById("profile-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form from refreshing the page

    // Capture form data
    const profileData = {
        Name: document.getElementById("name").value,
        Age: document.getElementById("age").value,
        Gender: document.getElementById("gender").value,
        JobTitle: document.getElementById("job-title").value,
        Location: document.getElementById("location").value,
        CompanyName: document.getElementById("company-name").value || "N/A"
    };

    // Display data in profile output section
    displayProfileData(profileData);
});

// Function to display profile data and add a download button
function displayProfileData(data) {
    const profileOutput = document.getElementById("profile-output");
    profileOutput.innerHTML = `
        <h2>Profile Data</h2>
        <p><strong>Name:</strong> ${data.Name}</p>
        <p><strong>Age:</strong> ${data.Age}</p>
        <p><strong>Gender:</strong> ${data.Gender}</p>
        <p><strong>Job Title:</strong> ${data.JobTitle}</p>
        <p><strong>Location:</strong> ${data.Location}</p>
        <p><strong>Company Name:</strong> ${data.CompanyName}</p>
        <button onclick="exportToCSV()">Download Profile Data as CSV</button>
    `;

    // Store data globally for CSV export function
    window.profileData = data;
}

// Function to export data to CSV
function exportToCSV() {
    const data = window.profileData;
    const headers = Object.keys(data).join(',') + '\n';
    const values = Object.values(data).map(value => `"${value}"`).join(',') + '\n';
    const csvContent = headers + values;

    // Create Blob and link for download
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'profile_data.csv';
    link.style.display = 'none';

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
