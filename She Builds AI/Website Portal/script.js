// Discussion Forum - Posting User Comments
document.getElementById('discussion-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let discussionText = document.getElementById('discussion-text').value;
    if (discussionText.trim() !== "") {
        let postItem = document.createElement('li');
        postItem.textContent = discussionText;
        document.getElementById('posts').appendChild(postItem);
        document.getElementById('discussion-text').value = '';
    }
});

// Salary Comparison - Simple Mock Data and Calculation
const salaryData = [
    { jobTitle: "Software Engineer", location: "New York", salary: 80000 },
    { jobTitle: "Teacher", location: "California", salary: 60000 },
    { jobTitle: "Data Analyst", location: "Texas", salary: 70000 }
];

document.getElementById('salary-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const jobTitle = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;
    const userSalary = parseFloat(document.getElementById('salary').value);

    const match = salaryData.find(
        data => data.jobTitle.toLowerCase() === jobTitle.toLowerCase() &&
                data.location.toLowerCase() === location.toLowerCase()
    );

    const resultDiv = document.getElementById('comparison-result');
    if (match) {
        if (userSalary < match.salary) {
            resultDiv.textContent = `Your salary is below the market average for a ${jobTitle} in ${location}. The average is $${match.salary}.`;
        } else {
            resultDiv.textContent = `Your salary is competitive! The average for a ${jobTitle} in ${location} is $${match.salary}.`;
        }
    } else {
        resultDiv.textContent = "No matching salary data found.";
    }
});
