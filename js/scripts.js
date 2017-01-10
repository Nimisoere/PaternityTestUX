$('.form-control').on('focus blur', function (e) {
    $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');

$(document).ready(function () {

    $('.remove-allel:first').hide();
    
    $('.add-dna').click(function () {
        //we select the box clone it and insert it after the box
        $('.box:first').clone().insertAfter(".box:last");
        $(".remove-allel:not('.remove-allel:first')").show();
    });

    $(document).on("click", ".remove-allel", function () {
        $(this).closest(".box").remove();
    });
});