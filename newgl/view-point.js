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
                //render => screen
                //world => render
                break
            case ViewPoint.ANCHORS.RENDER:
                //screen => render
                //world => render
                break
            case ViewPoint.ANCHORS.WORLD:
                //render => world
                //screen => render
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
        this.x = x
        this.y = y
        this.#anchor = ViewPoint.ANCHORS.SCREEN
        
        this.#updateCoordinates()
    }
    
    setRenderCoordinates(x, y) {
        this.x = x
        this.y = y
        this.#anchor = ViewPoint.ANCHORS.RENDER
    
        this.#updateCoordinates()
    }
    
    setWorldCoordinates(x, y) {
        this.x = x
        this.y = y
        this.#anchor = ViewPoint.ANCHORS.WORLD
    
        this.#updateCoordinates()
    }
}
