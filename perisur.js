/*creado por Felipe Jiménez*/
      window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
        {
  
          testimonial:
             "<a href='https://felipe021284.github.io/Sektor/GRUPO 1.HTML'>GRUPO 1</a>",
        },
        {
          
          
          testimonial:
           "<a href='https://felipe021284.github.io/Sektor/GRUPO 2.HTML'>GRUPO 2</a>",
        },
        
        {
          
          
          testimonial:
            "<a href='https://felipe021284.github.io/Sektor/GRUPO 3.HTML'>GRUPO 3</a>",
        },
        
         
     
        
       
       
      ];
      let i = 0; // current slide
      let j = testimonials.length; // total slides
      let testimonialContainer = document.getElementById(
        "testimonial-container"
      );
      function next() {
        i = (j + i + 1) % j;
        displayTestimonial();
      }

      function prev() {
        i = (j + i - 1) % j;
        displayTestimonial();
      }
      let displayTestimonial = () => {
        testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
      <!--img src=${testimonials[i].image}></img-->
        
        `;
      };
      window.onload = displayTestimonial;