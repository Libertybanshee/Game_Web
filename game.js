let img;
let img2;

let timer;

let KeyLeft = false;
let KeyRight = false;

function toucheEnfoncee(t){
    t.preventDefault();
    if (t.code == "ArrowLeft"){
        KeyLeft = true;
    }
    if (t.code == "ArrowRight"){
        KeyRight = true;
    }
}

function toucheRelachee(t){
    t.preventDefault();
    if (t.code == "ArrowLeft"){
        KeyLeft = false;
    }
    if (t.code == "ArrowRight"){
        KeyRight = false;
    }
}

function load() { 
    document.addEventListener("keydown", toucheEnfoncee, false);
    document.addEventListener("keyup", toucheRelachee, false);

    img = new Sprite(".png"); /* Source de l'image */ 
    img2 = new Sprite(".png", 600, 400); /* Source de l'image */ 

    timer = 0;
}

function update(dt) { 
    timer += dt;

    if(timer >= 1) {
        img2.y -= 3;
        img2.x -= 3;
        timer = 0;
    }
    if (KeyLeft){
        img.x -= 2;
    }

    if (KeyRight){
        img.x += 2;
    }
}

function draw(pCtx) { 
    img.draw(pCtx);
    img2.draw(pCtx);
}