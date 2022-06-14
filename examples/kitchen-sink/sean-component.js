class SeanComponent extends window.BaseComponent {
  onMount() {
    this.message = this.getAttribute('message');
  }

  template() {
    return `
      <h3>${this.message}</h3>
    `;
  }
}

window.customElements.define('sean-component', SeanComponent);