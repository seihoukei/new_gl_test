export default class WorldReferenceCoordinates {
    x = 0
    y = 0
    scale = 1
    
    constructor(base = {}) {
        this.setPosition(base.x ?? 0, base.y ?? 0)
        this.setScale(base.scale ?? 1)
    }
    
    setPosition(x, y) {
        this.x = x
        this.y = y
    }
    
    setScale(scale) {
        this.scale = scale
    }
}
