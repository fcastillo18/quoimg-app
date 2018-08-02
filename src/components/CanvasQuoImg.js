import React, { Component } from 'react';

export default class CanvasQuoImg extends Component {
    componentDidMount() {
      console.log('did mount!')
      this.generateCanvas();
    }
    componentDidUpdate() {
      console.log('updated!')
      this.generateCanvas();
    }

    generateCanvas(){
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
      //console.log(img);
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)//image position 1=RL 2=UD
        ctx.font = "bold 14px Courier"
        ctx.fillStyle = 'white'
        ctx.fillText(this.props.quote, 0, 75)//text position 1st= Rigth & Left 2nd=Up & Dowm
        ctx.fillText(this.props.author, 100, 100)
      }
      
    }
    
    noneStyle ={
      display: 'none'
    };
    render() {
      //console.log(this.props, 'CanvasQuoteImg') 
      return(
        <div>
          <canvas ref="canvas" width={this.props.width} height={this.props.height} />
          <img ref="image" src={this.props.image} className="hidden" style={this.noneStyle} />
        </div>
      )
    }
  }
  