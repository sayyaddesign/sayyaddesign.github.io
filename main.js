const swiper = new Swiper('.swiper-container', {
    
         
         grabCursor: true,
         
         slidesPerView: 3,
         spaceBetween: 13,
         coverflowEffect: {
           rotate: 0,
           stretch: 0,
           depth: 0,
           modifier: 200,
           slideShadows : true,
         },
         
   });


   const list = document.querySelectorAll('.list');
   function activeLink(){
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
   }
   list.forEach((item) =>
   item.addEventListener('click', activeLink));