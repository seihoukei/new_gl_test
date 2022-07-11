import Point from "./point.js"
import Trigger from "../trigger.js"
import ViewRectangle from "./view-rectangle.js"

export default class WorldView {
    static RESTRICTION = {
        NONE : 0, // can view anywhere
        WIDTH : 1, // stick view within width
        HEIGHT : 2, // stick view within height
        INSIDE : 3, // stick view within contents
        OUTSIDE : 4, // expand view to see whole contents
    }
    
    static DEFAULT_OPTIONS = {
        restriction : WorldView.RESTRICTION.NONE,
        viewExpansion : 0,
    }
    
    #viewRectangle = null
    #worldReference = null
    #contentRectangle = new ViewRectangle()
    
    #viewChangeEvent = null
    #contentChangeEvent = null
    
    #options = WorldView.DEFAULT_OPTIONS
    
    constructor(viewRectangle = null, worldReference = null, options = {}) {
        this.setViewRectangle(viewRectangle)
        this.setWorldReference(worldReference)
    
        Object.assign(this.#options, options)

        this.setRestriction(this.#options.restriction, this.#options.expandView)
    }
    
    setViewRectangle(viewRectangle) {
        this.#viewChangeEvent?.cancel()
        this.#viewRectangle = viewRectangle
        this.#viewChangeEvent = Trigger.on(this.#viewRectangle.triggers.change, () => this.updateWorldRestriction())
    }
    
    setContentArea(left, top, right, bottom) {
        this.#contentRectangle.setBoundaries(left, top, right, bottom)
    }
    
    setWorldReference(worldReference) {
        this.#worldReference = worldReference
    }
    
    setRestriction(restriction, expandView = 0) {
        this.#options.restriction = restriction
        this.#options.expandView = expandView
        
        this.updateWorldRestriction()
    }
    
    updateWorldRestriction() {
    
    }
    
    worldPointToView(world, view = new Point()) {
    
    }
    
    viewPointToWorld(view, world = new Point()) {
    
    }
    
    
}
