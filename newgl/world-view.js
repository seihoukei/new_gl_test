import Point from "./point.js"

export default class WorldView {
    #viewport = null
    
    constructor(viewport) {
        this.#viewport = viewport
    }
    
    renderPointToWorld(render, world = new Point()) {
    
    }
    
    worldPointToRender(world, render = new Point()) {
    
    }
}
