// generate footer copyright year
(function copyrightDate() {
  let element = document.querySelector('#copyrightDate');
  let year = new Date().getFullYear();
  element.innerText = year + '\xa0';
})();
