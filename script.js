const swiper= new Swiper('.top-carosal', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    animating: true,
    
    autoplay: {
        delay: 3000,
        waitForTransition: true,
       
      },
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
  });





  const swiper2 = new Swiper('.product-card-slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,

    autoplay: {
        delay: 1500,
        waitForTransition: true,
       
      },
  

  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });

  

