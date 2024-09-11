document.addEventListener("DOMContentLoaded", function() {
    // Select the button element by its ID
    var rotateButton = document.getElementById('rotate-btn');

    // Initialize a variable to track the rotation state
    var isRotated = false;

    // Check if the button exists
    if (rotateButton) {
      // Add a click event listener to the button
      rotateButton.addEventListener('click', function() {
        // Toggle the rotation by 90 degrees
        if (isRotated) {
          rotateButton.style.transform = 'rotate(0deg)'; // Reset rotation
        } else {
          rotateButton.style.transform = 'rotate(180deg)'; // Rotate 90 degrees
        }
        
        // Add a smooth transition effect
        rotateButton.style.transition = 'transform 0.3s ease';

        // Toggle the rotation state
        isRotated = !isRotated;
      });
    }
  });
  