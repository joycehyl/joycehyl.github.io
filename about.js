function navigateToPage(e){
  window.location.href= e.getAttribute("destination");
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
