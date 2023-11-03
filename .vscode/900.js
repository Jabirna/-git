// Add your JavaScript code here

// Example JavaScript code for interactivity
// You can add your own functionality based on your requirements
// For example, displaying a message when a button is clicked

document.querySelector('.btn').addEventListener('click', function() {
    alert('Button clicked!');
  });
  // Add your JavaScript code here
document.getElementById("myButton").addEventListener("click", function() {
    // Change the button's content
    this.innerHTML = "<img src='path/to/image.jpg' alt='Button Image'>";
  
    // OR change the button's background image
    // this.style.backgroundImage = "url('path/to/image.jpg')";
  });