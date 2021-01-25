(function (window, document) {
  "use strict";

  const $toggles = document.querySelectorAll(".toggle");
  const $toggleBtn = document.getElementById("toogle-btn");

  $toggleBtn.addEventListener("click", function () {
    toggleElements();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      offElements();
    } 
  });

  function toggleElements() {
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle("on");
    });
  }

  functionn offElements(){
    [].forEach.call($toggles, function (toggle) {
      toggle.classList.toggle("on");
    });
  }
})(window, document);

