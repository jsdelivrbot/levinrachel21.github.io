var player;
var playerImage;
var enemy;
var enemyImage;
var isGameOver;

function preLoad() {
    
}

function setup() {
    isGameOver = false;
    createCanvas(300,300);
    player = createSprite(width/2, height-25, 50, 50);
    enemy = createSprite(width/2, 0, 10, 30);
}

function draw() {
    background(75,0,75);
        
    if (isGameOver) {
        gameOver();
    }
    else {
        if (enemy.overlap(player)) {
            isGameOver = true;
        }
    }
    
    if (keyDown(RIGHT_ARROW) && player.position.x < (width-25)) {
        player.position.x = player.position.x + 1;
    }
        
    if (keyDown(LEFT_ARROW) && player.position.x > 25){
        player.position.x = player.position.x - 1;
    }
    
    enemy.position.y = enemy.position.y + 3;
    
    if (enemy.position.y > height) {
        enemy.position.y = 0;
        enemy.position.x = random(5, width-5)
    }
    
    drawSprites();
}

function gameOver() {
    background(0);
    textAlign(CENTER);
    fill("white");
    text("Game Over!", width/2, height/2);
    text("Click anywhere to try again", width/2, 3*height/4);
}

function mouseClicked() {
    if (isGameOver) {
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-25;
    enemy.position.x = width/2;
    enemy.position.y = 0;
    }
}