import WorldReferenceCoordinates from "./world-reference-coordinates.js"

export default class WorldReference {
    #current = new WorldReferenceCoordinates()
    #target = new WorldReferenceCoordinates()
    #max = new WorldReferenceCoordinates()
    #min = new WorldReferenceCoordinates()
    
    constructor() {
    }
}
