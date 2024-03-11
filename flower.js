
        // Select all elements with the class 'buttonResume'
        var buttons = document.querySelectorAll('.buttonResume');

        // Define the callback function
        function alertButtonClick() {
            alert('Resume button was clicked!');
        }

        // Add the event listener to each button
        buttons.forEach(function(button) {
            button.addEventListener('click', alertButtonClick);
        });
