// generate footer copyright year
(copyrightDate = () => {
  const element = document.querySelector('#copyrightDate');
  const year = new Date().getFullYear();
  element.innerText = year + '\xa0';
})();
