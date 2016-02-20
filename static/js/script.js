/**
 * Created by W on 20/02/2016.
 */

function drawCanvas() {
    var apellido = $("#apellido").val().toUpperCase();
    tam=apellido.length;


    var canvas = document.getElementById("canvas");
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0, 300, 300 * imageObj.height / imageObj.width)
        context.fillStyle="#FFF";
        context.font = "bold 35pt Calibri";
        context.textAlign = 'center';
        context.fillText(apellido, x, 100);
        context.fillStyle="#CC00FF";
    };
    imageObj.src = "static/images/layout.jpg";
}
