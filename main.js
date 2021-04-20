let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let intervale;
let derniereUpdate = Date.now();

function run(){
    let maintenant = Date.now();
    let dt = (maintenant - derniereUpdate) / 1000;
    derniereUpdate = maintenant;
    /*console.log("run"); */
    update(dt);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw(ctx);
}

function init(){
    console.log("Initialisation");
    load();
    intervale = setInterval(run, 1000 / 60);
}

init();