function getMeme(){
  function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
  } 
  var json = JSON.parse(Get("https://meme-api.herokuapp.com/gimme"));
  document.getElementById("memeImg").src = json.url;
}
function copy(){
  console.log("copy was called");
  var text = document.getElementById('memeImg').src;
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert("Image Link Copied");
}