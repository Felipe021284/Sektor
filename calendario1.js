/*creado por Felipe Jiménez*/
      window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
        {
          
          image: "",
          testimonial:
            "<h3>ENERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/4nbyqG46/IMG-20250307-060842.jpg",
          testimonial:
            " <h3>FEBRERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/G6sDRkQ/marzo.jpg",
          testimonial:
            "<h3>MARZO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/r251W0Lr/abril.jpg",
          testimonial:
            "<h3>ABRIL</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/TB4s4Mfj/IMG-20250309-144922.jpg",
          testimonial:
            "<h3>MAYO</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/JFp2GG93/JUNIO-1.jpg",
          testimonial:
            "<h3>JUNIO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/twbqP1XB/julio-1.jpg",
          testimonial:
            "<h3>JULIO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/kVVbRsT0/agosto-1.jpg",
          testimonial:
            "<h3>AGOSTO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/8g0Ck2Sx/septiembre-1.jpg",
          testimonial:
            "<h3>SEPTIEMBRE</h3>",
        },
        
        
           {
          
          image: "https://i.ibb.co/6cH5XDDj/octubre-1.jpg",
          testimonial:
            "<h3>OCTUBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/VY0QzNqd/noviembre-1.jpg",
          testimonial:
            "<h3>NOVIEMBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/Xr8GhGfb/diciembre-1.jpg",
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