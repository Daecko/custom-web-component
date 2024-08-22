class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.count = 0;
      this.shadowRoot.innerHTML = `
        <style>
          .counter {
            font-size: 2rem;
            margin-bottom: 10px;
          }
          button {
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
          }
        </style>
        <div class="counter">Count: ${this.count}</div>
        <button>Increase</button>
      `;
    }
  
    connectedCallback() {
      this.shadowRoot.querySelector('button').addEventListener('click', () => {
        this.count++;
        this.updateCounter();
      });
    }
  
    updateCounter() {
      this.shadowRoot.querySelector('.counter').textContent = `Count: ${this.count}`;
    }
  
    disconnectedCallback() {
      this.shadowRoot.querySelector('button').removeEventListener('click', this.updateCounter);
    }
  }
  
  customElements.define('counter-component', CounterComponent);
  