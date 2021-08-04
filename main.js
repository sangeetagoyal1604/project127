status="true";
song="";
song2="";
function preload() {
song=loadSound("music2.mp3"); 
song2=loadSound("music.mp3"); 
}
function setup () {
   Canvas=createCanvas(400,400);
   Canvas.center();
   
   video=createCapture(VIDEO);
   video.hide();
}
function draw () {
    image(video,0,0,400,400);
    
}
function play() {
    if (status=="true") {
        song.play();
        status="false";
    } else {
      song.stop();  
    }
}

function change() {
 song.change() ;  
}