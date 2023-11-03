
// var x = document.getElementById("myAudio"); 
                  
// function playAudio() { 
//   x.play(); 
// } 

// function pauseAudio() { 
//   x.pause(); 
// } 
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


/*============================================================================
                                    Évelym S.
                    https://www.linkedin.com/in/evelym-santos/
  ============================================================================*/

    // Navigation
        // Responsive Toggle Navigation =============================================
        let menuIcon = document.querySelector('.menuIcon');
        let nav = document.querySelector('.overlay-menu');

        menuIcon.addEventListener('click', () => {
            if (nav.style.transform != 'translateX(0%)') {
                nav.style.transform = 'translateX(0%)';
                nav.style.transition = 'transform 0.2s ease-out';
            } else { 
                nav.style.transform = 'translateX(-100%)';
                nav.style.transition = 'transform 0.2s ease-out';
            }
        });


        // Toggle Menu Icon ========================================
        let toggleIcon = document.querySelector('.menuIcon');

        toggleIcon.addEventListener('click', () => {
            if (toggleIcon.className != 'menuIcon toggle') {
                toggleIcon.className += ' toggle';
            } else {
                toggleIcon.className = 'menuIcon';
            }
        });
        
        function sendwhatsapp(){
          var phonenumber = "+918086769477";
     
          var name = document.querySelector(".full").value;
          var Number = document.querySelector(".full").value;
          var Check = document.querySelector(".full").value;
          var Checkk = document.querySelector(".full").value;
          var message = document.querySelector(".full").value;
     
          var url = "https://wa.me/" + phonenumber + "?text="
          +"Name :"+name+"%0a"
          +"Number : "+Number+"%0a"
          +"Check In: "+Check+"%0a"
          +"Check Out: "+Checkk+"%0a"
     
          +"Number of Guest : "+message
          +"%0a%0a"
          +"Thanks for booking JUNGLE STAY 900 KANDI Have A NICE DAY";
     
          window.open(url, '_blank').focus();
        }



        var x = document.getElementById("myAudio"); 
              
        function playAudio() { 
          x.play(); 
        } 
        
        function pauseAudio() { 
          x.pause(); 
        } 





        const initSlider = () => {
          const imageList = document.querySelector(".slider-wrapper .image-list");
          const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
          const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
          const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
          const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
          
          // Handle scrollbar thumb drag
          scrollbarThumb.addEventListener("mousedown", (e) => {
              const startX = e.clientX;
              const thumbPosition = scrollbarThumb.offsetLeft;
              const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
              
              // Update thumb position on mouse move
              const handleMouseMove = (e) => {
                  const deltaX = e.clientX - startX;
                  const newThumbPosition = thumbPosition + deltaX;
        
                  // Ensure the scrollbar thumb stays within bounds
                  const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                  const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
                  
                  scrollbarThumb.style.left = `${boundedPosition}px`;
                  imageList.scrollLeft = scrollPosition;
              }
        
              // Remove event listeners on mouse up
              const handleMouseUp = () => {
                  document.removeEventListener("mousemove", handleMouseMove);
                  document.removeEventListener("mouseup", handleMouseUp);
              }
        
              // Add event listeners for drag interaction
              document.addEventListener("mousemove", handleMouseMove);
              document.addEventListener("mouseup", handleMouseUp);
          });
        
          // Slide images according to the slide button clicks
          slideButtons.forEach(button => {
              button.addEventListener("click", () => {
                  const direction = button.id === "prev-slide" ? -1 : 1;
                  const scrollAmount = imageList.clientWidth * direction;
                  imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
              });
          });
        
           // Show or hide slide buttons based on scroll position
          const handleSlideButtons = () => {
              slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
              slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
          }
        
          // Update scrollbar thumb position based on image scroll
          const updateScrollThumbPosition = () => {
              const scrollPosition = imageList.scrollLeft;
              const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
              scrollbarThumb.style.left = `${thumbPosition}px`;
          }
        
          // Call these two functions when image list scrolls
          imageList.addEventListener("scroll", () => {
              updateScrollThumbPosition();
              handleSlideButtons();
          });
        }
        
        window.addEventListener("resize", initSlider);
        window.addEventListener("load", initSlider);