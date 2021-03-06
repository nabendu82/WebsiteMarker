let showSketch = function(sketch) {

    sketch.setup = function() {
      document.body.style.MozUserSelect = 'none';
      let h = document.body.clientHeight;
      let c = sketch.createCanvas(sketch.windowWidth, h);
      c.position(0, 0);
      c.style('pointer-events', 'none');
      sketch.clear();
    }

    /*Below is working. Disable sketch after 1.5 min*/
    setTimeout(function() {
      console.log('removed');
      document.body.style.MozUserSelect = 'auto';
      sketch.remove();
    },60000);
  
    sketch.draw = function() {
      sketch.stroke(0);
      sketch.strokeWeight(4);
      if (sketch.mouseIsPressed) {
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
    }
  };
  
let myp5 = new p5(showSketch);

//not working - TBD
function removeSketch() {
  console.log('Inside removeSketch', myp5);
  myp5.remove(); 
}


browser.runtime.onMessage.addListener((message) => {
  if (message.command === "highlightify") {
    showSketch();
  } else if (message.command === "reset") {
    removeSketch();
  }
});
