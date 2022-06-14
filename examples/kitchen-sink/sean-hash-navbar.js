class SeanHashNavbar extends window.BaseComponent {
  onMount() {
    // this.addEventListener('click', e => {
    //   e.preventDefault();
    //   if(e.target.tagName.toLowerCase() === 'a') {
    //     const path = e.target.getAttribute('href');
    //     location.hash = `${path}`;
    //   }
    // });
  }
}

window.customElements.define('sean-hash-navbar', SeanHashNavbar);