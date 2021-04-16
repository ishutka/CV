const asideTitles = document.querySelectorAll("aside h3");

var i = 0;
for (i; i < asideTitles.length; i++) {
  const title = asideTitles[i];
  title.addEventListener("click", function() {
    if (window.innerWidth < 601) {
      title.parentElement.classList.toggle("open");
    }
  });
}
