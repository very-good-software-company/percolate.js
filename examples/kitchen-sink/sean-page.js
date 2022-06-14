class SeanPage extends window.BaseComponent {
  static get observedAttributes() { return ['current-page']; }

  onMount() {
    this.pagePath = this.getAttribute('path');
    if(`#${this.pagePath}` === location.hash) {
      this.style.display = 'block';
    } else {
      this.style.display = 'none';
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if(`#${this.pagePath}` === newVal) {
      this.style.display = 'block';
    } else {
      this.style.display = 'none';
    }
  }
}

window.customElements.define('sean-page', SeanPage);