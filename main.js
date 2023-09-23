let tab = document.querySelector(".tab");
let tabHeader = tab.querySelector(".tab-header");
let tabHeaderElements = tab.querySelectorAll(".tab-header > div");
let tabBody = tab.querySelector(".tab-body");
let tabBodyElements = tab.querySelectorAll(".tab-body > div");
let tabIndicator = tab.querySelector(".tab-indicator");

let tabHeaderWidth = tabHeader.getBoundingClientRect().width;
let gapInHeaderElement = (
  (tabHeaderWidth - (tabHeaderElements.length * 30)) / 
  (tabHeaderElements.length * 2)
);
let leftPaddingSize = 10;

tabIndicator.style.left = (leftPaddingSize+gapInHeaderElement) + "px";
tabIndicator.style.display = "block"; 

for(let i=0;i<tabHeaderElements.length;i++){
  tabHeaderElements[i].addEventListener("click",function(){
    tabHeader.querySelector(".active").classList.remove("active");
    tabHeaderElements[i].classList.add("active");
    tabBody.querySelector(".active").classList.remove("active");
    tabBodyElements[i].classList.add("active");
    
    let theme = tabBodyElements[i].getAttribute("theme");
    let borderColor = tabBodyElements[i].getAttribute("borderColor");
    
    console.log({theme,borderColor});
    
    document.body.style.background = theme;
    tab.style.boxShadow = "0px 0px 0px 10px " + borderColor;
    tabIndicator.style.background = theme;
    
    for(let j=0;j<tabHeaderElements.length;j++){
      tabHeaderElements[j].style.color = "#888";
    }
    tabHeaderElements[i].style.color = theme;
    
    let left = leftPaddingSize;
    if(i == 0){
      left += gapInHeaderElement;
    } else {
      left += gapInHeaderElement*((i*2)+1);
      left += i*30;
    }
    tabIndicator.style.left = left + "px";
  });
}