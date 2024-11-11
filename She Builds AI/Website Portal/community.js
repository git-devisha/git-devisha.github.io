document.getElementById('discussion-form').addEventListener('submit', function(event))
    event.preventDefault(); // Prevent form submission

    // Get values from the form
    const username = document.getElementById('username').value;
    const issue = document.getElementById('issue').value;

    // Create a new discussion item
    const discussionList = document.getElementById('discussion-list');
    const discussionItem = document.createElement('div');
    discussionItem.classList.add('discussion-item');
    discussionItem.innerHTML = `
        <strong>${username}</strong>