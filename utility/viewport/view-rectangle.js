import Trigger from "../trigger.js"

export default class ViewRectangle {
    left = 0
    top = 0
    width = 0
    height = 0
    
    triggers = Trigger.triggers("change")
    
    constructor(base = {}) {
        this.setPosition(base.left ?? 0, base.top ?? 0)
        this.setSize(base.width ?? 0, base.height ?? 0)
    }

    setPosition(left, top) {
        this.left = left
        this.top = top
        
        this.triggers.change()
    }
    
    setSize(width, height, centered = false) {
        if (centered) {
            this.left += (this.width - width) / 2
            this.top += (this.height - height) / 2
        }
        
        this.width = width
        this.height = height
        
        this.triggers.change()
    }
    
    setBoundaries(left, top, right, bottom) {
        this.left = left
        this.top = top
        this.width = right - left
        this.height = bottom - top
        
        this.triggers.change()
    }
}
