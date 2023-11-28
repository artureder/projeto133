x = 0;
y = 0;

var screenWidth = 0;
var secreenHeight = 0;

var apple = "";

var speakData = "";
var toNumber = "";


drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
  apple = loadImage("apple.png");
}


function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 
 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 
    toNumber - Number(content)
    if(Number.isIntegrer(toNumber))
    {
      document.getElementById("status").innerHTML = "A maçâ está sendo desenhada";
      drawApple = "set";
    }
    else
    {
      document.getElementById("status").innerHTML = "O número não foi reconhecido";
    }

}

function setup() 
{
 screenWidth = window.innerWidth
 secreenHeight = window.innerHeight
 createCanvas(screenWidth, secreenHeight-150);
 canvas.position(0, 150);
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
  }
  for(var i = 1; i <= toNumber; i++)
  {
    x = Math.floor(Math.random() * 700);
    y = Math.floor(Math.random() * 400);
    image(apple, x, y, 50, 50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
