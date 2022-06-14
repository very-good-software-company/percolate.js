window.BaseComponent = class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }

  onMount() {}

  afterMount() {}

  connectedCallback() {
    this.onMount();

    const templateString = this.template();
    if(templateString) {
      this.templateNode = document.createElement('template');
      this.templateNode.innerHTML = this.template();
    }

    if(this.templateNode) {
      this.appendChild(this.templateNode.content.cloneNode(true));
    }

    this.afterMount();
  }

  template() {
    return ``;
  }

  onUnMount() {}

  disconnectedCallback() {
    this.onUnMount();
  }
}