import WorldReferenceCoordinates from "./world-reference-coordinates.js"
import Trigger from "../trigger.js"

export default class WorldReference {
    #current = new WorldReferenceCoordinates()
    #target = new WorldReferenceCoordinates()
    #max = new WorldReferenceCoordinates()
    #min = new WorldReferenceCoordinates()
    
    triggers = Trigger.triggers("change")
    
    constructor() {
    }
}
