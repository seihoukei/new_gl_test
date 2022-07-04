import Trigger from "./trigger.js"
import WorldView from "./world-view.js"

const DEFAULT_OPTIONS = {
    devicePixelRatio : window.devicePixelRatio ?? 1,
    renderPixelSize : 1,
}

export default class Viewport {
    #canvas = null
    #options = DEFAULT_OPTIONS
    
    #screenWidth = 0
    #screenHeight = 0
    
    #renderScaling = 0
    #renderWidth = 0
    #renderHeight = 0
    
    events = {}
    
    constructor(canvas, options = {}) {
        this.#canvas = canvas
        Object.assign(this.#options, options)
        
        this.#renderScaling = this.#options.devicePixelRatio / this.#options.renderPixelSize
        
        Trigger.registerEvent(this, "change")
        
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
        
        this.events.change()
    }
    
    createWorldView() {
        const view = new WorldView(this)
        
        return view
    }
}
