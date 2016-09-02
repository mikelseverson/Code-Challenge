window.onload = displayShapes;

function displayShapes () { 
    var shapes       = generateShapes(50);
    var sortedShapes = sortShapes(shapes);

    for(i = 0; i < sortedShapes.length; i++) {
        var shape = sortedShapes[i]
        var shapeElement = document.createElement("div"); 
        shapeElement.className = shape.type;
        if(shape.type === "square") {
            shapeElement.style.cssText = "width:" + shape.length + ";height:" + shape.length + ";"
        }
        if(shape.type === "circle") {
            shapeElement.style.cssText = "width:" + shape.radius * 2 + ";height:" + shape.radius * 2 + ";"
        } 
        document.body.appendChild(shapeElement);
    }
}

//////////

function generateShapes(amount) {
    var shapes = [];
    for(i = 0; i < amount; i++) {
        var size = Math.floor((Math.random() * 100) + 1);
        shapes.push(new square(size));
        shapes.push(new circle(size/2));
    }
    return shapes;
};

function circle(radius) {
    this.type = "circle";
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius * this.radius
    };
    this.toString = function() {
        return "Circle: Radius = " + this.radius + ", Area = " + this.getArea()
    };
};

function square(length) {
    this.type = "square";
    this.length = length;
    this.getArea = function() {
        return this.length * this.length;
    };
    this.toString = function() {
        return "Square: Size = " + this.length + ", Area = " + this.getArea();
    };
};

function sortShapes(shapesArray) {
    function compareAreas(a, b) {
        return b.getArea() - a.getArea();
    };
    return shapesArray.sort(compareAreas)
};