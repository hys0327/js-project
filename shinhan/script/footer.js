function loadFooter() {
  fetch('../layouts/footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer-bg').innerHTML = data;
    });
}

window.addEventListener('DOMContentLoaded', loadFooter);
