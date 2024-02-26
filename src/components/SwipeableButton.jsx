import React, { Component } from 'react';
import './SwipeableButton.css';

const slider = React.createRef();
const container = React.createRef();
const isTouchDevice = navigator.maxTouchPoints > 0;

export default class SwipeableButton extends Component {
  state = {
    unlocked: false, // Initialize unlocked state
  };

  componentDidMount() {
    this.containerWidth = container.current.clientWidth - 50;

    if (isTouchDevice) {
      document.addEventListener('touchmove', this.onDrag);
      document.addEventListener('touchend', this.stopDrag);
    } else {
      document.addEventListener('mousemove', this.onDrag);
      document.addEventListener('mouseup', this.stopDrag);
    }
  }

  componentWillUnmount() {
    // Remove event listeners when the component is unmounted
    if (isTouchDevice) {
      document.removeEventListener('touchmove', this.onDrag);
      document.removeEventListener('touchend', this.stopDrag);
    } else {
      document.removeEventListener('mousemove', this.onDrag);
      document.removeEventListener('mouseup', this.stopDrag);
    }
  }

  onDrag = (e) => {
    if (this.state.unlocked) {
      return;
    }

    if (this.isDragging) {
      const clientX = isTouchDevice ? e.touches[0].clientX : e.clientX;
      this.sliderLeft = Math.min(Math.max(0, clientX - this.startX), this.containerWidth);
      this.updateSliderStyle();
    }
  };

  updateSliderStyle = () => {
    if (this.state.unlocked) return;
    slider.current.style.left = `${this.sliderLeft + 50}px`;
  };

  stopDrag = () => {
    if (this.state.unlocked) return;
    if (this.isDragging) {
      this.isDragging = false;
      if (this.sliderLeft > this.containerWidth * 0.9) {
        this.sliderLeft = this.containerWidth;
        if (this.props.onSuccess) {
          this.props.onSuccess();
          this.onSuccess();
        }
      } else {
        this.sliderLeft = 0;
        if (this.props.onFailure) {
          this.props.onFailure();
        }
      }
      this.updateSliderStyle();
    }
  };

  startDrag = (e) => {
    if (this.state.unlocked) return;
    this.isDragging = true;
    this.startX = isTouchDevice ? e.touches[0].clientX : e.clientX;
  };

  onSuccess = () => {
    container.current.style.width = `${container.current.clientWidth}px`;
    this.setState({
      unlocked: true,
    });
  };

  getText = () => {
    return this.state.unlocked ? (this.props.text_unlocked || 'UNLOCKED') : (this.props.text || 'SLIDE');
  };

  reset = () => {
    if (this.state.unlocked) return;
    this.setState({ unlocked: false }, () => {
      this.sliderLeft = 0;
      this.updateSliderStyle();
    });
  };

  render() {
    return (
      <div className="ReactSwipeButton">
        <div className={'rsbContainer ' + (this.state.unlocked ? 'rsbContainerUnlocked' : '')} ref={container}>
          <div
            className="rsbcSlider"
            ref={slider}
            onMouseDown={this.startDrag}
            style={{ background: this.props.color }}
            onTouchStart={this.startDrag}
          >
            <span className="rsbcSliderText">{this.getText()}</span>
            <span className="rsbcSliderArrow"></span>
            <span className="rsbcSliderCircle" style={{ background: this.props.color }}></span>
          </div>
          <div className="rsbcText">{this.getText()}</div>
        </div>
      </div>
    );
  }
}