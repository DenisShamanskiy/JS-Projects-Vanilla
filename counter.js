(()=>{"use strict";var e=0,t=document.querySelector(".count");document.querySelectorAll(".btn").forEach((function(c){c.addEventListener("click",(function(c){var n=c.currentTarget.classList;n.contains("decrease")?e--:n.contains("increase")?e++:e=0,e>0&&(t.style.color="green"),e<0&&(t.style.color="red"),0===e&&(t.style.color="black"),t.textContent=e}))}))})();