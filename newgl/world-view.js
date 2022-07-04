import Point from "./point.js"

export default class WorldView {
    static RESTRICT = {
        NONE : 0,
        CENTER : 1,
        VIEW : 2,
    }
    
    static DEFAULT_OPTIONS = {
        minSize : 0,
        maxSize : 0,
        extraSpace : 0,
        restrict : WorldView.RESTRICT.NONE,
    }
    
    #viewport = null
    #options = WorldView.DEFAULT_OPTIONS
    
    #screenArea = null
    
    constructor(viewport, options = {}) {
        this.#viewport = viewport
        Object.assign(this.#options, options)
    }
    
    setScreenArea(screenArea) {
        this.#screenArea = screenArea
    }
    
    renderPointToWorld(render, world = new Point()) {
    
    }
    
    worldPointToRender(world, render = new Point()) {
    
    }
    
}
