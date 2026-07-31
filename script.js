// Wait for the HTML elements to load before running code
document.addEventListener('DOMContentLoaded', () => {
  
  // Find the button in our HTML using its ID
  const magicButton = document.getElementById('magicBtn');

  // Add an event listener to run a function whenever the button is clicked
  magicButton.addEventListener('click', () => {
    alert('🎉 You clicked the magic button! Deploying the hyenas. Good luck 🤣👌.');
  });

});
