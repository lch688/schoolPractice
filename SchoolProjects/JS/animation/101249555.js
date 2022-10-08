
let container = document.getElementById("move");
const WIDTH = 500;
const HEIGHT = 500;

function RandRange(min, max){
    return Math.floor(Math.random()*(max - min))+ min;
}


function img(id = 1){

    this.x = RandRange(0,HEIGHT-60);
    this.y = 0;
    this.id = id;
    this.delay = RandRange(0,100);



}
function animate(imgs) {
    let div = document.getElementById("imgs.id")

    setInterval(function () {
        if (imgs.delay <= 0) {

            if (imgs.y < WIDTH - 60) {
                imgs.y += 2;
                div.style.left = imgs.x + "px";
                div.style.top = imgs.y + "px";

            }
            else {
                smiley.x = RandRange(0, WIDTH-60);
                smiley.y = 0;

                smiley.delay = RandRange(0, 100);

            }
        }
        else {
            imgs.delay--;
        }

    }, 20)
}

let imgs = new img()

let div = document.createElement("div");
div.setAttribute("class","img");
div.setAttribute("id","imgs.id");
div.style.left = imgs.x +"px";
div.style.top = imgs.y+ "px";

container.appendChild(div);


animate(imgs);
















