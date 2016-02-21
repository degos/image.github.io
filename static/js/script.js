/**
 * Created by W on 20/02/2016.
 */

function drawCanvas(){
    var top = $("#text-top").val();
    var apellido = $("#apellido").val();
    var down = $("#text-down").val();
    tam=apellido.length;

    var canvas = document.getElementById("myCanvas");

    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var context = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function(){
        context.drawImage(imageObj, 0, 0, 300, 300 * imageObj.height / imageObj.width)
        context.fillStyle="#FFF";
        context.font = "bold 35pt Calibri";
        context.textAlign = 'center';
        context.fillText(top, x, 50);
        context.fillText(apellido, x, 90);
        context.fillText(down, x, 130);
        context.fillStyle="#CC00FF";
    };
    imageObj.src = "static/images/layout2.jpg";
}
function create(a){
    var canvas = document.getElementById("myCanvas");
    var dataURL = canvas.toDataURL();
    document.getElementById('canvasImg').src = dataURL;
    a.href=dataURL;
}
