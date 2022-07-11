import Trigger from "../trigger.js"
import WorldReference from "./world-reference.js"
import Point from "./point.js"

export default class Viewport {
    static DEFAULT_OPTIONS = {
        devicePixelRatio : window.devicePixelRatio ?? 1,
        renderPixelSize : 1,
    }
    
    #canvas = null
    #options = Viewport.DEFAULT_OPTIONS
    
    #screenWidth = 0
    #screenHeight = 0
    
    #renderScaling = 0
    #renderWidth = 0
    #renderHeight = 0
    
    triggers = Trigger.triggers("change")
    
    constructor(canvas, options = {}) {
        this.#canvas = canvas
        Object.assign(this.#options, options)
        
        this.#renderScaling = this.#options.devicePixelRatio / this.#options.renderPixelSize
        
        this.updateSize()
    }
    
    updateSize() {
        if (this.#screenHeight === this.#canvas.clientHeight &&
            this.#screenWidth === this.#canvas.clientWidth)
            return
        
        this.#screenWidth = this.#canvas.clientWidth
        this.#screenHeight = this.#canvas.clientHeight
        
        this.#renderWidth = this.#screenWidth / this.#renderScaling
        this.#renderHeight = this.#screenHeight / this.#renderScaling
        
        this.#canvas.width = this.#renderWidth
        this.#canvas.height = this.#renderHeight
        
        this.triggers.change()
    }
    
    screenPointToRender(screen, render = new Point()) {
    
    }
    
    renderPointToScreen(render, screen = new Point()) {
    
    }
}
