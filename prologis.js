/*creado por Felipe Jiménez*/
      window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
        {
  
          testimonial:
             "<a href='https://felipe021284.github.io/Sektor/PERISUR.HTML'>PERISUR</a>",
        },
        {
          
          
          testimonial:
           "<a href='https://felipe021284.github.io/Sektor/ARRAYANES.HTML'>ARRAYANES</a>",
        },
        
        {
          
          
          testimonial:
            "<a href='https://felipe021284.github.io/Sektor/LOS ALTOS.HTML'>LOS ALTOS</a>",
        },
        
          {
          
          
          testimonial:
            "<a href='https://felipe021284.github.io/Sektor/ITESO.HTML'>ITESO</a>",
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