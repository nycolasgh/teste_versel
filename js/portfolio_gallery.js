


// Detecta quando o mouse está sobre a div de origem
let descs = document.querySelectorAll(".fotos-item-descricao");



  document.querySelector("#arrows").addEventListener("mouseover", function() {
  // Muda o estilo da div de destino
  descs.forEach(desc => {
    desc.style.visibility = "visible";
  });
  console.log('active desc');

  });

        // Detecta quando o mouse sai da div de origem
        document.querySelector("#arrows").addEventListener("mouseout", function() {
        // Muda o estilo da div de destino de volta para o original
        descs.forEach(desc => {
          desc.style.visibility = "hidden";
        });
        console.log('desactive desc');
        });
    



        	//Image slider
    const controls = document.querySelectorAll(".control");
    var currentItem = 0;
    const items = document.querySelectorAll(".fotos-item");
    const maxItems = items.length;
    
    controls.forEach((control) => {
      control.addEventListener("click", (e) => {
        isLeft = e.target.classList.contains("arrow-left");
    
        if (isLeft) {
          currentItem -= 1;
          console.log(currentItem);
        } else {
          currentItem += 1;
          console.log(currentItem);
        }
    
        if (currentItem >= maxItems) {
          currentItem = 0;
        }
    
        if (currentItem < 0) {
          currentItem = maxItems - 1;
        }
    
        
    
    
        items[currentItem].scrollIntoViewIfNeeded({
          behavior: "smooth",
          inline: "nearest",
          block: "center",
        });
        console.log("teste2");
    
        items.forEach((item) => item.classList.remove("current-item"));
        items[currentItem].classList.add("current-item");
        console.log("teste1");
    
    
      });
    });
    