/* 
 * Contact Form Validation  
 */

$(document).ready(function() {
    $('#contact-form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email"
            },
            message: {
                required: "Please enter your message"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "contact.php",
                data: $(form).serialize(),
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contact-form').fadeTo( "slow", 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});