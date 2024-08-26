$(document).ready(function () {
    $('.create-coupon-content').validate({
        rules: {
            CouponCode: {
                required: true
            },
            DiscountAmount: {
                required: true,
                number: true
            },
            MinAmount: {
                required: true,
                number: true
            }
        },
        messages: {
            CouponCode: {
                required: "Please enter a coupon code."
            },
            DiscountAmount: {
                required: "Please enter the discount amount.",
                number: "Please enter a valid number.",
                min : 0
            },
            MinAmount: {
                required: "Please enter the minimum amount.",
                number: "Please enter a valid number.",
                min: 0
            }
        },
        errorClass: 'form-element-validator',
        validClass: 'valid',
        errorPlacement: function (error, element) {
            // Find the corresponding <span> for the validation message
            var name = $(element).attr('name');
            var target = $('span[data-valmsg-for="' + name + '"]');
            console.log(target)
            if (target.length) {
                target.html(error);  // Place the error message in the target <span>
                target.show();       // Ensure the <span> is visible
            } else {
                console.error('Validation span not found for', name);
            }
        },
        highlight: function (element, errorClass) {
            $(element).closest('span').find('.form-element-validator').show();
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).closest('span').find('.form-element-validator').hide();
        }
    });
});
