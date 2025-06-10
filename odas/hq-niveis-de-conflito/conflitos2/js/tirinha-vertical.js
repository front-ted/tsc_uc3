var img_alt = [
    "",
]

$(function () {
    var hqTED = function (el, path) {

        $(el).each(function (index, element) {
            let hq_id = "#" + $(this).attr("id");
            let hq_radical = $(this).attr("data-radical");
            let hq_quadro_inicio = $(this).attr("data-quadro-inicial");
            let hq_quadro_fim = $(this).attr("data-quadro-final");

            for (i = hq_quadro_inicio; i <= hq_quadro_fim; i++) {
                let esconder = "";
                if (i > 1) esconder = "d-none";
                $(hq_id + " .corpo").append('<img src="' + path + '/' + hq_radical + i + '.png" class="img-fluid img' + i + ' ' + esconder + '" alt="' + img_alt[i - 1] + '">');
            }
            $(hq_id).attr("data-quadro-atual", "1");
        })
    }

    $("body").on("click", ".btn-hq-proximo", function () {
        let hq_id = "#" + $(this).parents(".hq").attr("id");
        let hq_quadro_atual = $(hq_id).attr("data-quadro-atual");
        let hq_quadro_fim = $(hq_id).attr("data-quadro-final");
        if (hq_quadro_atual == (hq_quadro_fim - 1)) {
            $(this).remove();  
                
        }
        $(hq_id).attr("data-quadro-atual", ++hq_quadro_atual)
        console.log(hq_id, hq_quadro_atual)
        $(hq_id + " .corpo img").eq(--hq_quadro_atual).removeClass("d-none");

        $('html, body').animate({
            scrollTop: $(hq_id + " .corpo .img" + ++hq_quadro_atual).offset().top
        }, 'slow');

    });

    hqTED(".hq", "img")


});