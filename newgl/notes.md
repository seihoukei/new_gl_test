## Coordinates
- **Screen** - px based
- **Render** - render surface based (after scaling / device pixel ratio application)
- **World** - world based (game space)

## Elements

### Viewport
Responsible for Screen <=> Render transition

### WorldView 
Responsible for Render <=> World transition
- screenArea (left, top, width, height) - output area on viewport
- min (x, y, size) - minimum possible values
- max (x, y, size) - maximum possible values
- current (x, y, size) - current values
- target (x, y, size) - target values
- contentArea (left, top, right, bottom)
- options
  - minSize - minimum possible size to display, disregarding area
  - maxSize - maximum possible size to display, disregarding area (0 = contentArea + extraSpace)
  - extraSpace - extra are around content for restriction
  - restriction
    - none - free coordinate setting
    - center - x, y restricted to contentArea + extraSpace
    - view - x, y restricted to contentArea + extraSpace - size
