window.addEventListener("load", function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("box").style.display = "block";
      });
      const testimonials = [
        {
          
          image: "https://i.ibb.co/jPpBhd7F/IMG-20250404-102547.jpg",
          testimonial:
            "<h3>ENERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/q3XPgM2h/febrero.jpg",
          testimonial:
            " <h3>FEBRERO</h3>",
        },
        {
          
          image: "https://i.ibb.co/S47CxzYN/marzo.jpg",
          testimonial:
            "<h3>MARZO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/jvt9bBkY/abril.jpg",
          testimonial:
            "<h3>ABRIL</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/JwKtBtvG/mayo.jpg",
          testimonial:
            "<h3>MAYO</h3>",
        },
        
         {
          
          image: "https://i.ibb.co/MDPjf6LV/junio.jpg",
          testimonial:
            "<h3>JUNIO</h3>",
        },
        
        {
          
          image: "https://i.ibb.co/358FvZTh/julio.jpg",
          testimonial:
            "<h3>JULIO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/YFt11xYB/agosto.jpg",
          testimonial:
            "<h3>AGOSTO</h3>",
        },
        
        
        {
          
          image: "https://i.ibb.co/tN3HWdK/septiembre.jpg",
          testimonial:
            "<h3>SEPTIEMBRE</h3>",
        },
        
        
           {
          
          image: "https://i.ibb.co/CqQmc4Y/octubre.jpg",
          testimonial:
            "<h3>OCTUBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/sv9fYzb5/noviembre.jpg",
          testimonial:
            "<h3>NOVIEMBRE</h3>",
        },
        
        
        
           {
          
          image: "https://i.ibb.co/TBWGhdC3/diciembre.jpg",
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