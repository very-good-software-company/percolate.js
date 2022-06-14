class SeanHashRouter extends window.BaseComponent {
  onMount() {
    if(!location.hash) {
      location.hash = '#/';
    }

    this.currentPage = location.hash;

    window.addEventListener('hashchange', e => {
      this.currentPage = location.hash;
      Array.from(this.children).forEach(node => {
        node.setAttribute('current-page', this.currentPage);
      });
    });
  }
}

window.customElements.define('sean-hash-router', SeanHashRouter);