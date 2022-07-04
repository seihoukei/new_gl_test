import SquareGL from "../../newgl/square-gl.js"

function init() {
    const canvas = document.createElement("canvas")
    document.body.appendChild(canvas)
    
    const GL = new SquareGL(canvas)
    const viewport = GL.getViewport()
}

document.addEventListener("DOMContentLoaded", init)
