const asideTitles = document.querySelectorAll("aside h3");

if (asideTitles.length)
  for (let i = 0; i < asideTitles.length; i++) {
    const title = asideTitles[i];

    title.addEventListener("click", function() {
      if (window.innerWidth < 601) {
        title.parentElement.classList.toggle("open");
      }
    });
  }

const experience = document.querySelector('#experience');

if (experience) {
  let date = new Date();
  const startYear = new Date('2018-01-01');
  const wholeYears = (date - startYear) /1000/3600/24/36.435;

  experience.innerHTML = Math.trunc(wholeYears)/ 10;
  experience.classList.add('activated');
}
