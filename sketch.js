let showSketch = function(sketch) {

    sketch.setup = function() {
      document.body.style.MozUserSelect = 'none';
      let h = document.body.clientHeight;
      let c = sketch.createCanvas(sketch.windowWidth, h);
      c.position(0, 0);
      c.style('pointer-events', 'none');
      sketch.clear();
    }
  
    sketch.draw = function() {
      sketch.stroke(0);
      sketch.strokeWeight(4);
      if (sketch.mouseIsPressed) {
        sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
      }
    }
  };
  
let myp5 = new p5(showSketch);

function removeSketch() {
  console.log('Inside removeSketch');
}


//browser.runtime.onMessage.addListener(s);

browser.runtime.onMessage.addListener((message) => {
  if (message.command === "highlightify") {
    showSketch();
  } else if (message.command === "reset") {
    removeSketch();
  }
});
