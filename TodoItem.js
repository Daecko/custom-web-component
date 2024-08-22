const template = document.createElement("template")
template.innerHTML = `
<style>
    h3 { color: green }
</style>
<h3>
    <slot></slot>
</h3>
`
//everything put inside the web component in the html is a slot

class CustomComponent extends HTMLElement {
    constructor() {
        super()
        //shadowdom (shadow) prevents changing style outside the component and prevents its own style from changing from the outside
        const shadow = this.attachShadow({mode: "open"})
        shadow.append(template.content.cloneNode(true))
        
    }
}

customElements.define("custom-component", CustomComponent)