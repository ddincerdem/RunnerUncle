//Oyunumuzun amacı Yaşlı amcamız 200 virüs puanı ile temas etmeden belirlenen süre içerisinde 
//onu Güvenli Bölgeye ulaştırmak. Oyun Q(Büyük Zıplama) ve E(Normal Zıplama) tuşları ile oynanıyor
// Amcamız yaşlı olduğu için oyun boyunca Büyük atlama hakkından sadece 6 tane kullanabiliyor
//Ondan sonra atlamaya çalıştığı büyük sıçramalar da küçük sıçramalar olarak gözüküyor

let timer = 120;
let tiredCounter = 6;
let elderly;
let counter = 0;
let eImg;
let cImg;
let bImg;
let vıruses = [];
function preload(){
  
 eImg = loadImage('bes.png');
 cImg = loadImage('Corona.png');
 bImg = loadImage('background.jpg');
}
function setup() {
  createCanvas(800, 450);
  elderly = new Elderly();
}
function keyPressed(){
if(key == 'e'){
  elderly.jump();
}
if(key == 'q')
{ 
  if(tiredCounter != 0){
  elderly.doublejump();
  tiredCounter = tiredCounter - 1;
  }else{
  
  elderly.jump();
  }
}
} 
function draw() 
{

  if(random(1) < 0.009 ){
  vıruses.push(new Corona());
  }
  
   background(bImg);
   textSize(32);
   text('Virüs Sayacı = ' +counter, 10, 30);
   fill(0, 102, 153);
  push();
  fill(0);
  strokeWeight(5);
  textSize(20);
  text('Güvenli Alana Kalan Süre = '+ timer,500,440);
  
  pop();

 for(let C of vıruses){
     C.move();
     C.show();
     if(elderly.Kontrol(elderly.x,elderly.y,elderly.r-50,elderly.r-50,C.x,C.y,C.r-30,C.r-30)){
     counter += 1;
      if(counter == 201){

    fill('RED');
    textSize(32);
   text('EN YAKIN HASTANEYE BAŞVURUNUZ', 120, 400);

 
    noLoop();
    }  
     }
  }
   if (frameCount % 60 == 0 && timer > 0){
    timer --;
  }

  if (timer == 0) {
    textSize(32);
    text("KORONASIZ ALANA GELDİNİZ", 150, 400);
    fill(0, 102, 153);
    noLoop();
  }
  elderly.show();
  elderly.move();
}
