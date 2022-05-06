/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const makeDyslexia = () => {
  document.querySelector("body").className = "dyslexia-mode"
};

document.querySelector("#dyslexia-toggle").addEventListener('click', makeDyslexia);
