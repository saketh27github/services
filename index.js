document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Gather the data
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const location = document.getElementById('location').value;
    
    // Construct the data to send
    const data = {
        name: name,
        mobile: mobile,
        location: location
    };
    
    // Send the data to the server
    fetch('https://example.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});