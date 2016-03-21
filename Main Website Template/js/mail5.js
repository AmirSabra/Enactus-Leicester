$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name5").val();
            var email = $("input#email5").val();
            var message = $("textarea#message5").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://campus.cs.le.ac.uk/people/amahs1/Main%20Website%20Template/mail/mail5.php",
                type: "POST",
                data: {
                    name5: name,
                    email5: email,
                    message5: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success5').html("<div class='alert alert-success'>");
                    $('#success5 > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success5 > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success5 > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm5').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success5').html("<div class='alert alert-danger'>");
                    $('#success5 > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success5 > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success5 > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm5').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name5').focus(function() {
    $('#success5').html('');
});
