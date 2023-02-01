
//Neón

$(function() {
    $('.neon').neonText({
        textColor: 'aquamarine',
        textSize: '85pt',
        neonHighlight: 'purple',
        neonHighlightColor: '#a51cc1',
        neonHighlightHover: 'red',
        neonFontHover: 'aquamarine'
    });
});

//Valoraciones

$(function() {
    $("#rating").rateYo({
        rating: 4.7,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#rating1").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#rating2").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#rating3").rateYo({
        rating: 4.5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#val1").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#val2").rateYo({
        rating: 3,
        spacing: '5px',
        ratedFill: 'yellow',
        readOnly: true
    });
    $("#val3").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val4").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val5").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val6").rateYo({
        rating: 2,
        spacing: '5px',
        ratedFill: 'red',
        readOnly: true
    });
    $("#val7").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
    $("#val8").rateYo({
        rating: 5,
        spacing: '5px',
        ratedFill: 'green',
        readOnly: true
    });
    $("#val9").rateYo({
        rating: 4,
        spacing: '5px',
        ratedFill: 'springgreen',
        readOnly: true
    });
});

//Promociones

$(function() {
    var fechaLimite1 = new Date("12/18/2021");
    var fechaLimite2 = new Date("12/30/2021");
    var fechaLimite3 = new Date("12/10/2021");
    var fechaHoy = new Date();

    var resta1 = Math.floor((fechaLimite1 - fechaHoy) / (1000 * 3600 * 24));
    if (resta1 >= 0 && resta1 <= 7) {
        document.getElementById("b1").innerHTML = "Promoción válida, quedan " + resta1 + " día/s <br> <link property='availability' href='https://schema.org/InStock' />";
        document.getElementById("b1").style.backgroundColor = "orange";

    } else if (resta1 < 0) {
        document.getElementById("b1").innerHTML = "Promoción no válida <br> <link property='availability' href='https://schema.org/OutOfStock' />";
        document.getElementById("b1").style.backgroundColor = "red";

    } else {
        document.getElementById("b1").innerHTML = "Promoción válida, quedan " + resta1 + " día/s <br> <link property='availability' href='https://schema.org/InStock' />";
    }



    var resta2 = Math.floor((fechaLimite2 - fechaHoy) / (1000 * 3600 * 24));
    if (resta2 >= 0 && resta2 <= 7) {
        document.getElementById("b2").innerHTML = "Promoción válida, quedan " + resta2 + " día/s <br> <link property='availability' href='https://schema.org/InStock' />";
        document.getElementById("b2").style.backgroundColor = "orange";

    } else if (resta2 < 0) {
        document.getElementById("b2").innerHTML = "Promoción no válida <br> <link property='availability' href='https://schema.org/OutOfStock' />";
        document.getElementById("b2").style.backgroundColor = "red";

    } else {
        document.getElementById("b2").innerHTML = "Promoción válida, quedan " + resta2 + " día/s <br> <link property='availability' href='https://schema.org/InStock' />";
    }



    var resta3 = Math.floor((fechaLimite3 - fechaHoy) / (1000 * 3600 * 24));
    if (resta3 >= 0 && resta3 <= 7) {
        document.getElementById("b3").innerHTML = "Promoción válida, quedan " + resta3 + " día/s <br> <link property='availability' href='https://schema.org/InStock' />";
        document.getElementById("b3").style.backgroundColor = "orange";

    } else if (resta3 < 0) {
        document.getElementById("b3").innerHTML = "Promoción no válida <br> <link property='availability' href='https://schema.org/OutOfStock' />";
        document.getElementById("b3").style.backgroundColor = "red";

    } else {
        document.getElementById("b3").innerHTML = "Promoción válida, quedan " + resta3 + " día/s <br> <link property='availability' href='https://schema.org/InStock' />";
    }
});