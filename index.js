

$(document).ready(function(){
  
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      
      event.preventDefault();
      var margin = 400
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top + margin
      }, 1100, function(){
        window.location.hash = hash;
      });
    } 
  });
});
let show= false
let buttons = document.querySelectorAll(".faq");
 const ques1 =document.getElementById(q1)
 const ques2 =document.getElementById(q2)
 const ques3 =document.getElementById(q3)



function toggleDiv(id) {
  const div = document.getElementById(id);
  div.style.display = div.style.display === 'none' ? 'block' : 'none';
}

        buttons.forEach(button => {
            button.addEventListener('click', () => {
              const nextDiv = button.nextElementSibling;
                const id = nextDiv.id.replace('faq', 'content');
                toggleDiv(id);
            });
        });




 


// const slideInElement = document.querySelector('.slide-in-element');

//         function checkSlide() {
//             const slideInAt = window.scrollY + window.innerHeight - slideInElement.clientHeight / 2;
//             const elementBottom = slideInElement.offsetTop + slideInElement.clientHeight;
//             const isHalfShown = slideInAt > slideInElement.offsetTop;
//             const isNotScrolledPast = window.scrollY < elementBottom;

//             if (isHalfShown && isNotScrolledPast) {
//                 slideInElement.classList.add('slide-in');
//             }
//         }

//         window.addEventListener('scroll', checkSlide);

