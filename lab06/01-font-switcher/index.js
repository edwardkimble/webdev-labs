var headersize = 2;
var contentsize = 1.4;

const makeBigger = () => {
   headersize += .5
   contentsize += .5
   document.querySelector("h1").style.fontSize = headersize+"em"
   document.querySelector(".content").style.fontSize = contentsize+"em"
};

const makeSmaller = () => {
   headersize -= .5
   contentsize -= .5
   document.querySelector("h1").style.fontSize = headersize+"em"
   document.querySelector(".content").style.fontSize = contentsize+"em"
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
