document.addEventListener("DOMContentLoaded", function () {
  const aboutLink = document.getElementById("about-link");
  const introParagraph = document.querySelector(".intro");
  const moreInfoParagraph = document.querySelector(".more-info");

  introParagraph.classList.add("animate-welcome");

  if (aboutLink && introParagraph && moreInfoParagraph) {
    aboutLink.addEventListener("click", function (event) {
      event.preventDefault();
      introParagraph.classList.remove("animate-welcome");
      moreInfoParagraph.classList.remove("animate-welcome");
      void introParagraph.offsetWidth;
      void moreInfoParagraph.offsetWidth;
      introParagraph.classList.add("animate-welcome");
      moreInfoParagraph.classList.add("animate-welcome");

      document
        .getElementById("welcome-section")
        .scrollIntoView({ behavior: "smooth" });
    });
  }
});

// document.addEventListener('DOMContentLoaded', function() {
//   document.getElementById('myContactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Show an alert message
//     alert('Submission Successful!');

//     // Optionally, reset the form after submission
//     document.getElementById('myContactForm').reset();
//   });
// });

// Function to display the custom alert
function showCustomAlert() {
  document.getElementById('customAlert').style.display = 'block';
}

// Function to close the custom alert
function closeAlert() {
  document.getElementById('customAlert').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('myContactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Show the custom alert
    showCustomAlert();

    // Optionally, reset the form after submission
    document.getElementById('myContactForm').reset();
  });
});

// Function to add shaking animation to cnt-p element
function addShakeAnimation() {
  const contactParagraph = document.getElementById('contact-paragraph');
  contactParagraph.classList.add('shake-animation');

  // Remove the shake class after the animation ends
  contactParagraph.addEventListener('animationend', () => {
    contactParagraph.classList.remove('shake-animation');
  });
}

// Add shaking animation after scrolling to the contact section
document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
  // Allow the default behavior (scrolling to the contact section)
  setTimeout(() => {
    // Add shaking animation after scrolling
    addShakeAnimation();
  }, 800); // Adjust the timeout to match the animation duration
});


document.getElementById('call-me-link').addEventListener('click', function() {
  var phoneNumber = '973-936-2621'; // Replace this with your actual phone number
  var phoneNumberElement = document.getElementById('call-me-link');
  if (phoneNumberElement) {
    phoneNumberElement.textContent = 'Phone number: ' + phoneNumber;
  }
});


// // Wait for the DOM content to be fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Add event listener for form submission
//   document.getElementById('myContactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Show the success message
//     document.getElementById('success-message').style.display = 'block';

//     setTimeout(function() {
//       document.getElementById('success-message').style.display = 'none';
//     }, 3000);

//     // Optionally, you can reset the form after submission
//     document.getElementById('myContactForm').reset();
//   });
// });