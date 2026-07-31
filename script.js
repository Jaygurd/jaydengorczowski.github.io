// Wait for the HTML elements to load completely
document.addEventListener('DOMContentLoaded', () => {

  // Select the navigation buttons
  const aboutBtn = document.getElementById('aboutBtn');
  const projectsBtn = document.getElementById('projectsBtn');

  // Select the section content containers
  const aboutSection = document.getElementById('about-section');
  const projectsSection = document.getElementById('projects-section');

  // Function to show the About Me section
  aboutBtn.addEventListener('click', () => {
    // Show About, Hide Projects
    aboutSection.classList.remove('hidden');
    projectsSection.classList.add('hidden');

    // Update active button styling
    aboutBtn.classList.add('active');
    projectsBtn.classList.remove('active');
  });

  // Function to show the Projects section
  projectsBtn.addEventListener('click', () => {
    // Show Projects, Hide About
    projectsSection.classList.remove('hidden');
    aboutSection.classList.add('hidden');

    // Update active button styling
    projectsBtn.classList.add('active');
    aboutBtn.classList.remove('active');
  });

});
