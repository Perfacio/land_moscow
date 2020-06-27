for(let el of document.getElementsByClassName('svg')){
  el.addEventListener('click', function(){
      let items = document.querySelectorAll('.svg')
      Array.from(items).forEach(item => {
          item.classList.remove('active-svg')

       })
       el.classList.add('active-svg');
  });
}  
for (let el of document.getElementsByClassName('arrow')) {
  el.addEventListener('click', function () {
    var left = document.getElementById("left");
    var right = document.getElementById("right");
   
    if (this.classList.contains('right')) {
      var activeEl = document.querySelector('.active')
      if (activeEl.nextElementSibling) {
        activeEl.classList.remove("active");
        left.style.display = "flex";
        activeEl.classList.remove("polygon-clip-star");
        activeEl.nextElementSibling.classList.add("active");
        activeEl.nextElementSibling.classList.add("polygon-clip-star");
        document.getElementsByClassName('right')[0].style.pointerEvents = "none";

        for (let i = 0; i <= 2; i += 0.1) {
          setTimeout(
            function () {
              setTimeout(
                function () {
                  document.getElementsByClassName('clip-svg')[0].style.display = "flex";
                  document.getElementsByClassName('polygon-clip-star')[0].style.transform = "scale(" + i, ")";
                },
                500
              );
              setTimeout(
                function () {
                  activeEl.style.transform = "scale(0)"
                  document.getElementsByClassName('right')[0].style.pointerEvents = "auto";
                  
                },
                1500
              );
            },
            i * 500
          );
        }      
      }
      else {
        right.style.display = "none";
      }
    }

    if (this.classList.contains('left')) {
      var activeEl = document.querySelector('.active')
      if (activeEl.previousElementSibling) {
        right.style.display = "flex";
        activeEl.classList.remove("active");
        activeEl.classList.remove("polygon-clip-star");
        activeEl.previousElementSibling.classList.add("active");
        activeEl.previousElementSibling.classList.add("polygon-clip-star");
        document.getElementsByClassName('left')[0].style.pointerEvents = "none";
        
        for (let i = 0; i <= 2; i += 0.1) {
          setTimeout(
            function () {
              setTimeout(
                function () {
                  document.getElementsByClassName('clip-svg')[0].style.display = "flex";
                  document.getElementsByClassName('polygon-clip-star')[0].style.transform = "scale(" + i, ")";
                },
                500
              );
              setTimeout(
                function () {
                  activeEl.style.transform = "scale(0)"
                  document.getElementsByClassName('left')[0].style.pointerEvents = "auto";

                 

                },
                1500
              );
            },
            i * 500
          );
        }
      }

      else {
        left.style.display = "none";
      }
    }
  });
}



