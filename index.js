$(document).ready(function() {
//alert("just a desktop");
  $("#sticky").draggable();
  $("#diggraphics").draggable();
  $("#projs").draggable();
  $("#texts").draggable();
  $("#amood").draggable();

  var d = new Date();
  document.getElementById("time").innerHTML = d.toDateString();

  $("#contact").mouseover(function(){
   $("#contactinfo").show();
  });
  $("#contact").mouseout(function(){
   $("#contactinfo").hide();
  });

  $("#settings").mouseover(function(){
   $("#settingsinfo").show();
  });
  $("#settings").mouseout(function(){
   $("#settingsinfo").hide();
  });

  $("#time").mouseover(function(){
   $("#dateinfo").show();
  });
  $("#time").mouseout(function(){
   $("#dateinfo").hide();
  });

  })
