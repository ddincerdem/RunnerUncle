class Elderly{
  constructor(){
    this.r = 150;
    this.x= 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
    
  }
  jump(){
    if(this.y == height-this.r){
   this.vy = -27;
    }
  }
  doublejump()
  {  
 if(this.y == height-this.r){
   this.vy = -34;
    }
    
  }
  Kontrol(x, y, w, h, x2, y2, w2, h2) {
  if (x + w >= x2 &&   
      x <= x2 + w2 &&    
      y + h >= y2 &&    
      y <= y2 + h2) {   
        return true;
  }
  return false;
} 
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y,0,height-this.r);
  }
  show(){
    image(eImg,this.x,this.y-70,this.r-30,this.r); 
  }
      
}