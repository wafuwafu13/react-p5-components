import React, { useEffect } from "react";
import p5 from "p5";

const GenerateLettersByDragCanvas = (props) => {
  window.generateLettersByDragCanvasLetters = props.letters;
  window.generateLettersByDragCanvasHeight = props.height;
  window.generateLettersByDragCanvasWidth = props.width;
  window.generateLettersByDragCanvasFont = props.font;
  window.generateLettersByDragCanvasFontColor = props.fontColor;
  window.generateLettersByDragCanvasFontSizeMin = props.fontSizeMin;
  window.generateLettersByDragCanvasBackgroundColor = props.backgroundColor;

  const generateLettersByDrag = (p) => {
    let x = 0;
    let y = 0;
    let stepSize = 100;

    const font = window.generateLettersByDragCanvasFont;
    const letters = window.generateLettersByDragCanvasLetters;
    const fontSizeMin = window.generateLettersByDragCanvasFontSizeMin;

    let counter = 0;

    p.setup = () => {
      p.createCanvas(
        window.generateLettersByDragCanvasHeight,
        window.generateLettersByDragCanvasWidth
      );
      p.background(
        window.generateLettersByDragCanvasBackgroundColor
      );
      p.cursor(p.HAND);

      x = p.mouseX;
      y = p.mouseY;

      p.textFont(font);
      p.textAlign(p.LEFT);

      p.fill(window.generateLettersByDragCanvasFontColor);
    };

    p.draw = () => {
      const d = p.dist(x, y, p.mouseX, p.mouseY);
      p.textSize(fontSizeMin + d / 2);
      const newLetter = letters.charAt(counter);

      stepSize = p.textWidth(newLetter);

      if (d > stepSize) {
        const angle = p.atan2(p.mouseY - y, p.mouseX - x);

        p.translate(x, y);
        p.text(newLetter, 0, 0);

        counter++;
        if (counter >= letters.length) counter = 0;

        x = x + p.cos(angle) * stepSize;
        y = y + p.sin(angle) * stepSize;
      }
    };

    p.mousePressed = () => {
      x = p.mouseX;
      y = p.mouseY;
    };

    p.keyPressed = () => {
      if (p.key == "s") p.saveCanvas("generateLettersByDrag", "png");
    };
  };

  useEffect(() => {
    new p5(generateLettersByDrag);
  }, []);
  return <></>;
};

export default GenerateLettersByDragCanvas;
