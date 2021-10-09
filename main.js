var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();

function staryu() {
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function (event) {
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie") {
        speak();   
    }
}

function speak() {
 var synth=window.speechSynthesis;
 var speak_data="Taking your selfie in five seconds so look sharp."
 var utterThis=new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);  
 Webcam.attach(camera);
 setTimeout(function(){
     takesnap();
     save_pic();
 }, 5000);
}

Webcam.set({
    width:360, 
    height:300,
    image_formet:"png",
    png_quality:90
});
camera=document.getElementById("divcam");

function takesnap() {
Webcam.snap(function(data_uri){
   document.getElementById("divlife").innerHTML='<img id="img_snap"src="'+data_uri+'"/>'
});    
}

function save_pic() {
    link=document.getElementById("link");
    image=document.getElementById("img_snap").src;
    link.href=image;
    link.click();
}