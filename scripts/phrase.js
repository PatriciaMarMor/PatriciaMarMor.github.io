      const boldText = "'La tecnología cambia rápido, pero la actitud de aprender es lo que marca la diferencia.'";
      const normalText = "— esa es mi filosofía. ¿Conectamos? 👇";
      
      const boldTarget = document.getElementById("boldPart");
      const normalTarget = document.getElementById("normalPart");

    let i = 0;

      function typeBold() {
        if (i < boldText.length) {
          boldTarget.textContent += boldText.charAt(i);
          i++;
          setTimeout(typeBold, 50);
        } else {
          i = 0;
          typeNormal();
        }
      }

      function typeNormal() {
        if (i < normalText.length) {
          normalTarget.textContent += normalText.charAt(i);
          i++;
          setTimeout(typeNormal, 50);
        }
      }

      typeBold();