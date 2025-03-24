/*creado por felipe jimenez*/
      window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
        {
          
          image: "https://i.ibb.co/7xMV0Vk1/enero-3.jpg",
          testimonial:
            "<h3>ENERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/0jx37qgd/febrero-3.jpg",
          testimonial:
            " <h3>FEBRERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/0jMnrkVp/marzo-3.jpg",
          testimonial:
            "<h3>MARZO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/MyhF3cPR/abril-3.jpg",
          testimonial:
            "<h3>ABRIL</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/gFd7yC8t/mayo-3.jpg",
          testimonial:
            "<h3>MAYO</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/kV1zWv6v/junio-3.jpg",
          testimonial:
            "<h3>JUNIO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/fGyCz19g/julio-3.jpg",
          testimonial:
            "<h3>JULIO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/dJxP85Xj/agosto-3.jpg",
          testimonial:
            "<h3>AGOSTO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/Q7WBGR9k/septiembre-3.jpg",
          testimonial:
            "<h3>SEPTIEMBRE</h3>",
        },
        
        
           {
          
          image: "https://i.ibb.co/r2TgmshX/octubre-3.jpg",
          testimonial:
            "<h3>OCTUBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/C55s5wM3/noviembre-3.jpg",
          testimonial:
            "<h3>NOVIEMBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/PsrgRNRF/diciembre-3.jpg",
          testimonial:
            "<h3>DICIEMBRE</h3>",
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
         <img src=${testimonials[i].image}></img>
        
        `;
      };
      window.onload = displayTestimonial;