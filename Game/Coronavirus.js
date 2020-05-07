class Corona{

constructor(){
  this.r= 100;
  this.x = width;
  this.y= height - this.r;
}
  
move(){
  this.x -= 10 ;
}
show(){
 image(cImg,this.x,this.y-60,this.r,this.r-20);
}
  
}