var canvas = new fabric.Canvas('myCanvas');
var block_img_width = 30;
var block_img_height = 30;
var created_x = 10;
var created_y = 10;
var ctx=canvas.getContext("2d");

var player_object = "";
var block_img_object = "";


function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        console.log("player update");
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        console.log("height , width");
        player_object.set({ top: created_y, left: created_x });
        console.log("player set");
        canvas.add(player_object);
    }
    );
    

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {

        block_img_object = Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);

        block_img_object.set({ top: created_y, left: created_x });
        canvas.add(block_img_object);
    }

    );


}