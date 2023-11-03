(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        // Define a function to toggle the dropdown behavior on mouse hover
        function toggleNavbarMethod() {
            // Check if the window width is greater than 992 pixels (desktop breakpoint)
            if ($(window).width() > 992) {
                // Attach a mouseover event handler to the dropdown elements in the navbar
                $('.navbar .dropdown').on('mouseover', function () {
                    // Trigger a click event on the dropdown toggle element to show the dropdown menu
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    // Trigger a click event on the dropdown toggle element and blur it to hide the dropdown menu
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                // If the window width is less than or equal to 992 pixels, remove the mouseover and mouseout event handlers
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        // Call the toggleNavbarMethod function when the document is ready to set up the dropdown behavior
        toggleNavbarMethod();
        // Attach an event handler to the window's resize event to adjust the dropdown behavior on window resize
        $(window).resize(toggleNavbarMethod);
    });

    // Back to top button
    $(window).scroll(function () {
        // Check the scroll position of the window
        if ($(this).scrollTop() > 100) {
            // If the scroll position is greater than 100 pixels, fade in the "back to top" button
            $('.back-to-top').fadeIn('slow');
        } else {
            // If the scroll position is less than or equal to 100 pixels, fade out the "back to top" button
            $('.back-to-top').fadeOut('slow');
        }
    });
    // Attach a click event handler to the "back to top" button
    $('.back-to-top').click(function () {
        // Animate the scrolling of the page to the top over a duration of 1500 milliseconds using the 'easeInOutExpo' easing function
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        // Prevent the default click behavior and navigation
        return false;
    });

    // Testimonials carousel
    // Initialize the Owl Carousel for the testimonials section
    $(".testimonial-carousel").owlCarousel({
        // Configure carousel options
        autoplay: true, // Enable autoplay
        smartSpeed: 1500, // Set the speed of carousel transitions
        dots: true, // Show navigation dots
        loop: true, // Enable looping of carousel items
        items: 1 // Display one item at a time
    });

})(jQuery);

// Get the form element with the ID 'var-Test'
const varTest = document.getElementById('var-Test');

// Attach a submit event handler to the form
varTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'd', q3: 'b' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 3`);
});

// Get the form element with the ID 'conditional-Test'
const conditionalTest = document.getElementById('conditional-Test');

// Attach a submit event handler to the form
conditionalTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'b', q3: 'a' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 3`);
});

// Get the form element with the ID 'arrays-loops-Test'
const arraysLoopsTest = document.getElementById('arrays-loops-Test');

// Attach a submit event handler to the form
arraysLoopsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'a', q3: 'c' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 3`);
});

// Get the form element with the ID 'maps-Test'
const mapsTest = document.getElementById('maps-Test');

// Attach a submit event handler to the form
mapsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'a', q2: 'a', q3: 'd' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 3`);
});

// Get the form element with the ID 'builtInFunctions-Test'
const builtInFunctionsTest = document.getElementById('builtInFunctions-Test');

// Attach a submit event handler to the form
builtInFunctionsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'a' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});

// Get the form element with the ID 'userDefinedFunctions-Test'
const userDefinedFunctionsTest = document.getElementById('userDefinedFunctions-Test');

// Attach a submit event handler to the form
userDefinedFunctionsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'b' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});

// Get the form element with the ID 'domManipulation-Test'
const domManipulationTest = document.getElementById('domManipulation-Test');

// Attach a submit event handler to the form
domManipulationTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'b' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});

// Get the form element with the ID 'jqueryFunctions-Test'
const jqueryFunctionsTest = document.getElementById('jqueryFunctions-Test');

// Attach a submit event handler to the form
jqueryFunctionsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'a', q2: 'a' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});

// Get the form element with the ID 'jquerySelectors-Test'
const jquerySelectorsTest = document.getElementById('jquerySelectors-Test');

// Attach a submit event handler to the form
jquerySelectorsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'c' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});

// Get the form element with the ID 'jqueryElements-Test'
const jqueryElementsTest = document.getElementById('jqueryElements-Test');

// Attach a submit event handler to the form
jqueryElementsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'c', q2: 'd' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});

// Get the form element with the ID 'jquerySeparateScripting-Test'
const jquerySeparateScriptingTest = document.getElementById('jquerySeparateScripting-Test');

// Attach a submit event handler to the form
jquerySeparateScriptingTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'c', q2: 'a' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});

// Get the form element with the ID 'events-effects-Test'
const eventsEffectsTest = document.getElementById('events-effects-Test');

// Attach a submit event handler to the form
eventsEffectsTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
        q3: document.querySelector('input[name="q3"]:checked').value
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'b', q2: 'a', q3: 'a' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 3`);
});

// Get the form element with the ID 'effect-chaining-Test'
const effectChainingTest = document.getElementById('effect-chaining-Test');

// Attach a submit event handler to the form
effectChainingTest.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Extract user's selected answers from the form
    const answers = {
        q1: document.querySelector('input[name="q1"]:checked').value,
        q2: document.querySelector('input[name="q2"]:checked').value,
    };

    // Define the correct answers for each question
    const correctAnswers = { q1: 'c', q2: 'c' };

    let score = 0; // Initialize the score counter

    // Loop through each question and compare user's answers with correct answers
    for (let question in answers) {
        if (answers[question] === correctAnswers[question]) {
            score++; // Increment the score for each correct answer
        }
    }

    // Display the user's score in an alert
    alert(`Your score: ${score} out of 2`);
});
