var ham= document.getElementById("ham");
var close= document.getElementById("close");
var toggler= document.getElementById("togglewrapper");
toggler.addEventListener("click", function(){
  ham.classList.toggle("displayclose");
  close.classList.toggle("displayclose");
});
