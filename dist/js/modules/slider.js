function initializeSlider(photoAll, kommaAll, komaBox, photoAktive, kommaAktive) {
  const laptop = document.querySelectorAll(photoAll);
  const pointe = document.querySelectorAll(kommaAll);
  const pointeParent = document.querySelector(komaBox);

  function hideSlide() {
    laptop.forEach((item) => {
      item.classList.remove(c);
      item.classList.add(photoAll);
    });

    pointe.forEach((item) => {
      item.classList.remove(kommaAktive);
      item.classList.add(kommaAll);
    });
  }

  function showSlide(i = 0) {
    laptop[i].classList.remove(photoAll);
    laptop[i].classList.add(photoAktive);

    pointe[i].classList.remove(kommaAll);
    pointe[i].classList.add(kommaAktive);
  }

  hideSlide();
  showSlide();

  pointeParent.addEventListener('click', function (event) {
    const target = event.target;

    if (target && target.classList.contains(kommaAll)) {
      pointe.forEach((item, i) => {
        if (target === item) {
          hideSlide();
          showSlide(i);
        }
      });
    }
  });
}

export default initializeSlider;