
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80  //no need of parseInt here
        }, 1000)
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    // $(".boton").click(function () {
    //     $('.formulario').removeClass('d-none')
    // });
    // $(".boton_form").click(function () {
    //     $('.formulario').addClass('d-none')
    // });

    // $(function () {
    //     $("form[name='form-cotiza']").validate({
    //         rules: {
    //             nombre: "required",
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //         },
    //         messages: {
    //             name: "Por favor escribe tu nombre",
    //             email: "Por favor escribe un E-mail válido"
    //         },
    //         submitHandler: function (form) {
    //             form.submit();
    //         }
    //     });
    // });
});