if(document.querySelector(".popup"))
{
const button = document.querySelector(".button");
const circle  =document.querySelector(".circle");

let buttonOn = false

button.addEventListener('click',()=>{
  if(!buttonOn)
  {
    buttonOn=true;
    circle.style.animation = "movecircleright 1s  forwards";
    button.style.animation = "backgroundinyellow 1s  forwards";
    chrome.tabs.executeScript({
      file : "appOn.js"
    })
  }
  else{
    buttonOn = false;
    circle.style.animation = "movecircleleft 1s  forwards";
    button.style.animation = "backgroundinblue 1s  forwards";
    chrome.tabs.executeScript({
      file : "appOff.js"
    })

  }
})
}