const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade'
    


  });


  const colors = document.querySelectorAll('.color')

  const switchToColor = (event) => {
    
    event.preventDefault ()

    const slide = event.currentTarget.dataset.color

    swiper.slideTo(slide)

  }

  colors.forEach(color => color.addEventListener('click', switchToColor))

  