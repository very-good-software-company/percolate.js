class SeanClicker extends window.BaseComponent {
  onMount() {
    this.count = 0;
  }

  afterMount() {
    this.countEls = this.querySelectorAll('.click-count');

    this.addEventListener('click', e => {
      e.preventDefault();
      if(e.target.classList.contains('inc')) {
        this.count++;
      } else if(e.target.classList.contains('dec')) {
        this.count--;
      }

      this.countEls.forEach(node => {
        node.innerText = `Count: ${this.count}`;
      });
    });
  }
}

window.customElements.define('sean-clicker', SeanClicker);