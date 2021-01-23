$(document).ready(function() {
//alert("just a desktop");
  $("#sticky").draggable();
  $("#diggraphics").draggable();
  $("#projs").draggable();
  $("#texts").draggable();
  $("#amood").draggable();

  var d = new Date();
  document.getElementById("time").innerHTML = d.toDateString();

  })
