window.onload = function() {
  console.log("onload" + Date())
}
var radio = document.querySelector("input[name=radio]");

radio.addEventListener("change", function () {
  setTimeout(function(){
    radio.checked = false;
  }, 500); 
 
});

var slider = document.querySelector("input[name=slider]");
slider.addEventListener("change", function () {
  document.getElementById("time").innerHTML = slider.value;
});

slider.value = 60;

function SendPlay() {
  var payload = {
    time : slider.value
  };
  
  var data = new FormData();
  data.append( "json", JSON.stringify( payload ) );
  
  fetch("http://34.130.147.110/",
  {
    method: "POST",
    body: data
  })
  .then(function(res){ return res.json(); })
  .then(function(data){ alert( JSON.stringify( data ) ) })
}