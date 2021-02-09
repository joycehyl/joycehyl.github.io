$(document).ready(function() {
    const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}
const init = function(){
  var section = document.getElementById("mainSection");
  section.style.height = window.screen.height + 'px';
  let items = document.querySelectorAll('section');
  for (let i = 0; i < items.length; i++)
  cssScrollSnapPolyfill()
}
init();
})

function navigateToPage(e){
  window.location.href= e.getAttribute("destination");
}

var isHidden = true;
function toggleMenu(){
  if (!isHidden){
    document.getElementById("indexmenus").className = "indexmenus-hide"
    //$("#indexmenus").hide();
    isHidden = true
  }
  else{
    document.getElementById("indexmenus").className = "indexmenus-show"
    //$("#").show();
    isHidden = false
  }
}

var isHiddenblack = true;
function toggleMenuBlack(){
  if (!isHiddenblack){
    document.getElementById("indexmenusblack").className = "indexmenusblack-hide"
    //$("#indexmenus").hide();
    isHiddenblack = true
  }
  else{
    document.getElementById("indexmenusblack").className = "indexmenusblack-show"
    //$("#").show();
    isHiddenblack = false
  }
}
