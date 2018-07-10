import React, { Component } from 'react';
import { Graph } from './graph';
import './App.css';

// !!! IMPLEMENT ME
const canvasWidth = 1000;
const canvasHeight = 900;
const circleRadius = 15;


/**
 * GraphView
 */
class GraphView extends Component {
  /**
   * On mount
   */
  componentDidMount() {
    this.updateCanvas();
  }

  /**
   * On state update
   */
  componentDidUpdate() {
    this.updateCanvas();
  }

  /**
   * Render the canvas
   */
  updateCanvas() {
    let canvas = this.refs.canvas;
   let ctx = canvas.getContext('2d');

   console.log('this.props.graph: ', this.props.graph);
   // call our dummy function
   this.props.graph.createDummyGraph();
   console.log('called createDummyGraph');

   // Clear it
   ctx.fillStyle = 'grey';
   ctx.fillRect(0, 0, canvasWidth, canvasHeight);

   ctx.font = '13px Arial';
   ctx.textAlign = 'center';
   ctx.textBaseline = 'middle';

   // draw our dummy vertexes
   this.props.graph.vertexes.forEach((v) => {
     ctx.beginPath();
     ctx.fillStyle = 'white';
     ctx.arc(v.pos.x, v.pos.y, circleRadius, 0, 2 * Math.PI);
     ctx.fill();
     ctx.stroke();

     // fill in the text
     ctx.fillStyle = 'black';
     ctx.fillText(v.value, v.pos.x, v.pos.y);
   }); 
    // let canvas = this.refs.canvas;
    // let ctx = canvas.getContext('2d');
    //
    // // Clear it
    // ctx.fillStyle = 'black';
    // ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    // let x = 300;
    // let y = 197;
    //
    // for(let i = 0; i <= 5; i++)
    // {
    //
    //   ctx.fillStyle = 'red';
    //   ctx.fillRect( x, 100, 40,  40);
    //   x+= 43;
    //   y+= 10;
    // }
    // x = 257;
    // for(let i = 0; i <= 9; i++){
    //
    //   ctx.fillStyle = 'red';
    //   ctx.fillRect( x, 142, 40,  40);
    //   x+= 43;
    // }
    // x= 256;
    // for(let i = 0; i <= 7; i++){
    //   if(i === 0 || i === 2 || i === 6){
    //     ctx.fillStyle = 'green';
    //   }else{
    //   ctx.fillStyle = 'orange';}
    //   ctx.fillRect(x, 183, 40, 40);
    //
    //   x+=43;
    // }
    // x = 213;
    // for(let i = 0; i <= 10; i++){
    //   if(i === 0 || i === 3 || i === 7){
    //     ctx.fillStyle = 'green';
    //   }else{
    //   ctx.fillStyle = 'orange';}
    //
    //   ctx.fillRect( x, 225, 40,  40);
    //   x+= 43;
    // }
    // x = 213;
    // for(let i = 0; i <= 11; i++){
    //
    //   if(i === 0 || i === 2 || i === 8){
    //     ctx.fillStyle = 'green';
    //   }else{
    //   ctx.fillStyle = 'orange';}
    //
    //   ctx.fillRect( x, 267, 40,  40);
    //   x+= 43;
    // }
    // x = 213;
    // for(let i = 0; i <= 10; i++){
    //
    //   if(i === 0 || i === 1 || i === 7 || i === 8 || i === 9 || i === 10){
    //     ctx.fillStyle = 'green';
    //   }else{
    //   ctx.fillStyle = 'orange';}
    //
    //   ctx.fillRect( x, 310, 40,  40);
    //   x+= 43;
    // }
    // x = 300;
    // for(let i = 0; i <= 7; i++){
    //
    //   ctx.fillStyle = 'orange';
    //   ctx.fillRect( x, 353, 40,  40);
    //   x+= 43;
    // }

    // !!! IMPLEMENT ME
    // compute connected components
    // draw edges
    // draw verts
    // draw vert values (labels)
  }

  /**
   * Render
   */
  render() {
    return <canvas ref="canvas" width={canvasWidth} height={canvasHeight}></canvas>;
  }
}


/**
 * App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: new Graph()
    };

    // !!! IMPLEMENT ME
    // use the graph randomize() method
  }

  render() {
    return (
      <div className="App">
        <GraphView graph={this.state.graph}></GraphView>
      </div>
    );
  }
}

export default App;
