document.getElementById('enhanceButton').addEventListener('click', function(event) {
    window.location.href = 'html/enhance.html';
});

function myFunction() {
  var x = document.querySelector("#myLinks");
  if (x.style.display === "inherit") {
    x.style.display = "none";
  } else {
    x.style.display = "inherit";
  }
}