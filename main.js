/**
 * Created by fasadat on 9/3/16.
 */

$(document).ready( function () {
    $("#secondPage").offset({top: $('#firstPage').height()});
    $('#welcome').textillate();
    $('#slider').draggable({
        axis: "x",
        containment: "parent",

        stop: function () {
            var sliderW = $('#slider').width(),
                sliderTot = $(this).position().left + sliderW;
            containerW = $('#container').width();

            if (sliderTot == containerW) {

                var h = $('#firstPage').height();
                $('#firstPage').animate({top: -1 * h + 'px'}, 1000);
                $('#secondPage').show();
                $('#secondPage').animate({top: '0px'}, 1000);

            }
            else {

                $(this).animate({
                    left: 0
                });
            }
        }
    });



$('#magnifier').click(function () {

    var factor = 2;
    $('#secondPage').animate({

        left: '-=' + $('#secondPage').width() / factor,
        width: $('#secondPage').width() * factor
    });

    $('#magnifier').css({'display' : 'none'});
    $('#secondPage').hide("scale",{}, 1000, function () {
        $('#win').show('scale', 2000);
        var w = window.innerWidth / 2;
        $('#leftWin').width(w);
        $('#rightWin').width(w);

        $('#rightWin').offset({left: w});
        $('#leftWin').show();
        $('#rightWin').show();

        $('#leftWin').delay(4000).animate( {
            left : -1 * $('#leftWin').width()
        }, 4000);
        $('#rightWin').delay(4000).animate( {
            left : '+=' + $('#rightWin').width()
        }, 4000);

    });
});

$('#magnifier').mouseover(function () {
    $('#magnifier').css({'zoom' : '110%'}, 'slow');
})
$('#magnifier').mouseout(function () {
    $('#magnifier').css({'zoom': '100%'}, 'slow');
})
});