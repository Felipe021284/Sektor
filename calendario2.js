/*creado por felipe jimenez*/
      window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
        {
          
          image: "https://i.ibb.co/RkSwkjxW/ENERO-2.jpg",
          testimonial:
            "<h3>ENERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/dsFnYRPk/febrero-2.jpg",
          testimonial:
            " <h3>FEBRERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/21BgQ56R/marzo-2.jpg",
          testimonial:
            "<h3>MARZO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/kzFyVMn/abril-2.jpg",
          testimonial:
            "<h3>ABRIL</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/Z1NwFCYQ/mayo-2.jpg",
          testimonial:
            "<h3>MAYO</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/HLh0m1gS/junio-2.jpg",
          testimonial:
            "<h3>JUNIO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/QFQzb2B4/julio-2.jpg",
          testimonial:
            "<h3>JULIO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/r2mthF9S/agosto-2.jpg",
          testimonial:
            "<h3>AGOSTO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/27y8CL1p/septiembre-2.jpg",
          testimonial:
            "<h3>SEPTIEMBRE</h3>",
        },
        
        
           {
          
          image: "https://i.ibb.co/zhMMrcPH/octubre-2.jpg",
          testimonial:
            "<h3>OCTUBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/Df3BDxWZ/noviembre-2.jpg",
          testimonial:
            "<h3>NOVIEMBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/Kpwh7jQJ/diciembre-2.jpg",
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