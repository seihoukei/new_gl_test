## Coordinates
- **Screen** - px based
- **Render** - render surface based (after scaling / device pixel ratio application)
- **World** - world based (game space)

## Elements

### Viewport
A portal from Screen to Render coordinates

### ViewRectangle
View region, defined by
- left
- top
- width
- height

### WorldReferenceCoordinates
View continuity, defined by
- x
- y
- scale

### WorldReference
View continuity that can be animated, defined by sets of coordinates:
- min
- max
- current
- target

### WorldView
A portal from Render ViewRectangle to World WorldReference
