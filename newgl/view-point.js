import Point from "./point.js"

export default class ViewPoint {
    static ANCHORS = {
        SCREEN : 0,
        RENDER : 1,
        WORLD : 2
    }
    
    #viewport = null
    #worldView = null
    
    #screen = new Point(0, 0)
    #render = new Point(0, 0)
    #world = new Point(0, 0)
    
    #anchor = ViewPoint.ANCHORS.WORLD
    
    #updateCoordinates() {
        switch (this.#anchor) {
            case ViewPoint.ANCHORS.SCREEN:
                this.#viewport?.screenPointToRender(this.#screen, this.#render)
                this.#worldView?.renderPointToWorld(this.#render, this.#world)
                break
            case ViewPoint.ANCHORS.RENDER:
                this.#viewport?.renderPointToScreen(this.#render, this.#screen)
                this.#worldView?.renderPointToWorld(this.#render, this.#world)
                break
            case ViewPoint.ANCHORS.WORLD:
                this.#worldView?.worldPointToRender(this.#world, this.#render)
                this.#viewport?.renderPointToScreen(this.#render, this.#screen)
                break
        }
    }
    
    setViewport(viewport) {
        this.#viewport = viewport
    }
    
    setWorldView(worldView) {
        this.#worldView = worldView
    }
    
    setScreenCoordinates(x, y) {
        this.#screen.x = x
        this.#screen.y = y
        this.#anchor = ViewPoint.ANCHORS.SCREEN
        
        this.#updateCoordinates()
    }
    
    setRenderCoordinates(x, y) {
        this.#render.x = x
        this.#render.y = y
        this.#anchor = ViewPoint.ANCHORS.RENDER
    
        this.#updateCoordinates()
    }
    
    setWorldCoordinates(x, y) {
        this.#world.x = x
        this.#world.y = y
        this.#anchor = ViewPoint.ANCHORS.WORLD
    
        this.#updateCoordinates()
    }
}
