import Viewport from "../utility/viewport/viewport.js"

export default class SquareGL {
    #canvas = null
    #viewport = null
    #gl = null
    
    constructor(canvas) {
        this.#canvas = canvas
        this.#viewport = new Viewport(this.#canvas)
        this.#regenerateContext()
    }
    
    #regenerateContext() {
        this.#gl = this.#canvas.getContext("gl")
    }
    
    getViewport() {
        return this.#viewport
    }
}
