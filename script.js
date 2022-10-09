      var rightArrow = document.getElementById("rightArrow");
      var leftArrow = document.getElementById("leftArrow");
      
      var rightArro = document.getElementById("rightArro");
      var leftArro = document.getElementById("leftArro");
      
      var rightArr = document.getElementById("rightArr");
      var leftArr = document.getElementById("leftArr");
      
      var rightA = document.getElementById("rightA");
      var leftA = document.getElementById("leftA");
      var slide = document.getElementById("slide");

            rightArrow.onclick = function () {
            slide.style.transform = "translateX(-25%)";
            
         }
            leftArrow.onclick = function () {
            slide.style.transform = "translateX(-75%)";
             
         }
        
            rightArro.onclick = function () {
            slide.style.transform = "translateX(-50%)";
            
         }
            leftArro.onclick = function () {
            slide.style.transform = "translateX(0px)";
             
         }
         
            rightArr.onclick = function () {
            slide.style.transform = "translateX(-75%)";
            
         }
            leftArr.onclick = function () {
             slide.style.transform = "translateX(-25%)";
             
         }
         
            rightA.onclick = function () {
            slide.style.transform = "translateX(0)";
            
         }
            leftA.onclick = function () {
            slide.style.transform = "translateX(-50%)";
             
         }
        