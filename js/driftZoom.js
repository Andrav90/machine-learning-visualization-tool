var json_string = localStorage.getItem('json');
var index = localStorage.getItem('index');
var images = JSON.parse(json_string);

var slider = document.querySelector('#myRange');
slider.setAttribute('min', '2');
slider.setAttribute('max', '10');
slider.addEventListener('change', changeValue);
function changeValue(){
  var zoomFactor = slider.value;
  localStorage.setItem('zoomFactor', zoomFactor);
  location.reload();
}

var zoomFactor2 = localStorage.getItem('zoomFactor');
slider.value = zoomFactor2;

var increaseZoomBy = document.querySelector('#increaseZoomBy');
var firstP = document.querySelector('#firstP');
var secondP = document.querySelector('#secondP');
firstP.innerHTML = "Increase zoom by: ";
secondP.innerHTML = zoomFactor2;
increaseZoomBy.appendChild(firstP);
increaseZoomBy.appendChild(secondP);

function createImage(quality, path, ssim, psnr){
  var demoArea = document.createElement('div');
  demoArea.setAttribute('class', 'demo-area');
  var img = document.createElement('img');
  img.setAttribute('class', 'demo-trigger');
  img.setAttribute('src', path);
  img.setAttribute('data-zoom', path);

  var zoomed = document.createElement('div');
  zoomed.setAttribute('class', 'detail');

  var showResolution = document.createElement('p');
  showResolution.setAttribute('id', 'showResolution');

//   var show_ssim_psnr = true;

  if(quality == "HR"){
    quality = "High-Resolution";
    show_ssim_psnr = false;
  } else if (quality == "LR"){
    quality = "Low-Resolution";
  } else if (quality == "SR"){
    quality = "Super-Resolution";
  };

  showResolution.innerHTML = quality;
//   var metricsString = document.createElement('p');
//   metricsString.setAttribute('id', 'metricsString');
//   if (show_ssim_psnr) {
//     metricsString.innerHTML = " SSIM: " + "<b>" + ssim + "</b>"  + "; " + "PSNR: " + "<b>" + psnr + "</b>";
//   }
  new Drift (img, {
    paneContainer: zoomed,
    inlinePane: false,
    zoomFactor: zoomFactor2
  });
  var container = document.querySelector('#zoomContainer');
  container.appendChild(showResolution);
//   container.appendChild(metricsString);
  container.appendChild(demoArea);
  demoArea.appendChild(img);
  demoArea.appendChild(zoomed);
};

createImage("HR", images[index].HR_path, 0, 0 );
createImage("SR", images[index].SR_path, images[index].SSIM_SR, images[index].PSNR_SR);
createImage("LR", images[index].LR_path, images[index].SSIM_LR, images[index].PSNR_LR);

window.onload = (event) => {
  var secondP = document.querySelector('#secondP');
  if (secondP.innerHTML === ""){
    secondP.innerHTML = 2;
  };
};