$(document).ready(function() {

    $("#myForm").submit(function(event) {
        event.preventDefault();

        let isValid = true;

        // Clear old errors
        $(".text-danger").text("");

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let phone = $("#phone").val().trim();
        let zip = $("#zip").val().trim();

        // All fields mandatory
        if (name === "") {
            $("#nameError").text("Name is required");
            isValid = false;
        }

        if (email === "") {
            $("#emailError").text("Email is required");
            isValid = false;
        } else {
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                $("#emailError").text("Invalid email format");
                isValid = false;
            }
        }

        if (phone === "") {
            $("#phoneError").text("Phone number is required");
            isValid = false;
        } else if (!/^[0-9]{10}$/.test(phone)) {
            $("#phoneError").text("Phone must be 10 digits");
            isValid = false;
        }

        if (zip === "") {
            $("#zipError").text("Zip code is required");
            isValid = false;
        } else if (!/^[0-9]{6}$/.test(zip)) {
            $("#zipError").text("Zip must be 6 digits");
            isValid = false;
        }

        // AJAX simulation
        if (isValid) {
            $.ajax({
                url: "https://jsonplaceholder.typicode.com/posts",
                method: "POST",
                data: { name, email, phone, zip },
                success: function() {
                    $("#successMessage").removeClass("d-none");
                    $("#myForm")[0].reset();
                }
            });
        }

    });

});