window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
        {
          
          image: "https://i.ibb.co/pvfRWv49/enero.jpg",
          testimonial:
            "<h3>ENERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/5Vp3S1L/febrero.jpg",
          testimonial:
            " <h3>FEBRERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/JwqPTp6L/marzo.jpg",
          testimonial:
            "<h3>MARZO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/wFhktGZ7/abril.jpg",
          testimonial:
            "<h3>ABRIL</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/39Nbzv9x/mayo.jpg",
          testimonial:
            "<h3>MAYO</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/v4FgFWDj/junio.jpg",
          testimonial:
            "<h3>JUNIO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/kCD1frd/julio.jpg",
          testimonial:
            "<h3>JULIO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/H6dNLRc/agosto.jpg",
          testimonial:
            "<h3>AGOSTO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/jP98LsxQ/septiembre.jpg",
          testimonial:
            "<h3>SEPTIEMBRE</h3>",
        },
        
        
           {
          
          image: "https://i.ibb.co/Rp5b7tY9/octubre.jpg",
          testimonial:
            "<h3>OCTUBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/ZphKzDQR/noviembre.jpg",
          testimonial:
            "<h3>NOVIEMBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/Kx37nT5R/diciembre.jpg",
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