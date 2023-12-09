class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = "";
        this.textColor = "";
        this.shapeColor = "";
    }

    setText(text) {
        this.text = text;
    };
    setTextColor(textColor) {
        this.textColor = textColor;
    };
    setshapeColor(shapeColor) {
        this.shapeColor = shapeColor;
    };
};

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};
class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="20" width="200" height="200" fill="${this.shapeColor}" /><text x="125" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};
class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="${this.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    };
};

module.exports = {Square, Circle, Triangle};