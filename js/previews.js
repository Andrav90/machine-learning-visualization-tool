var json_string = localStorage.getItem('json');
var images = JSON.parse(json_string);

for (i = 0; i < images.length; i++){
  appendImg(i);
}

function appendImg(index){
  var img = document.createElement('img');
  img.src = images[index].resized_path;

  img.setAttribute('id', 'previews');
  document.querySelector('.thumbnails').appendChild(img);

  img.onclick = function(event){
    localStorage.setItem('index', index)
    window.location.href = '../html/driftZoom.html?' + img.title;
  }
}

function myFunction() {
  var x = document.querySelector("#myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}