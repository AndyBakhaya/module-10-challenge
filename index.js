const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

const questions = [
    {
        type: "imput",
        message: "Use up to 3 characters for the logo",
        name: "text"
    },

    {
        type: "imput",
        message: "Use a Color Keyword or Hexadecimal",
        name: "textColor"
    },

    {
        type: "list",
        message: "Choose a Background Shape",
        name: "logoShape",
        choices: ["Square", "Circle", "Triangle"]
    },
    
    {
        type: "imput",
        message: "Use a Color Keyword or Hexadecimal",
        name: "shapeColor"
    },
];




function writeToFile(fileName, result) {
    let shape;

    if(result.logoShape === "Square") {
        shape = new Square();
    }
    if(result.logoShape === "Circle") {
        shape = new Circle();
    }if(result.logoShape === "Triangle") {
        shape = new Triangle();
    }
    else {
        console.log("Invalid Shape!")
    }

    shape.setText(result.text);
    shape.setTextColor(result.textColor);
    shape.setShapeColor(result.shapeColor);

    const svg = shape.render();

    fs.writeFile(filename,svg, (err) =>
        err ? console.log(err) : console.log("created gen-logo.svg")
    );
};


function init() {
    inquirer
        .prompt (questions)
        .then ((result)=> {
            writeToFile("gen-logo.svg", result);
    });
};

init();
module.exports = { writeToFile };