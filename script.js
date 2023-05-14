fetch('cachorros.json').then((response) => {
    response.json().then((cachorros) => {
      const slidesContainer = document.querySelector('.slides');
      let slidesIndex = 0;
      let timer;
  
      cachorros.cachorros.map((cachorro) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.innerHTML = `
          <img src="${cachorro.imagem}" alt="${cachorro.nome}" class="img-responsive">
          <h3>${cachorro.nome}</h3>
          <p>${cachorro.raca}</p>
          <p>${cachorro.idade} anos</p>
          <p>${cachorro.cuidados}</p>
        `;
        slidesContainer.appendChild(slide);
        
      });
  
      const slides = document.querySelectorAll('.slide');
      const totalSlides = slides.length;
  
      showSlide(slidesIndex);
  
      function showSlide(index) {
        if (index >= totalSlides) {
          index = 0;
        } else if (index < 0) {
          index = totalSlides - 1;
        }
  
        slides.forEach((slide) => {
          slide.style.display = 'none';
        });
  
        slides[index].style.display = 'block';
        slidesIndex = index;
  
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
  
        prevButton.style.top = `${slides[index].clientHeight / 2}px`;
        nextButton.style.top = `${slides[index].clientHeight / 2}px`;
      }
  
      function prevSlide() {
        showSlide(slidesIndex - 1);
        clearInterval(timer);
      }
  
      function nextSlide() {
        showSlide(slidesIndex + 1);
        clearInterval(timer);
      }
  
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');
  
      prevButton.addEventListener('click', () => {
        prevSlide();
      });
  
      nextButton.addEventListener('click', () => {
        nextSlide();
      });
  
      function startTimer() {
        timer = setInterval(() => {
          nextSlide();
        }, 5000);
      }
  
      startTimer();
  
      window.addEventListener('resize', () => {
        showSlide(slidesIndex);
      });
    });
  });
  