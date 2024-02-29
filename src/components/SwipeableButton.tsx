import React, { Component, RefObject } from "react";
import "./SwipeableButton.css";

interface SwipeableButtonProps {
  color?: string;
  text?: string;
  text_unlocked?: string;
  onSuccess?: () => void;
  onFailure?: () => void;
}

interface SwipeableButtonState {
  unlocked: boolean;
}

export default class SwipeableButton extends Component<
  SwipeableButtonProps,
  SwipeableButtonState
> {
  private sliderLeft: number = 0;
  private isDragging: boolean = false;
  private startX: number = 0;
  private containerWidth: number = 0;

  private sliderRef: RefObject<HTMLDivElement> = React.createRef();
  private containerRef: RefObject<HTMLDivElement> = React.createRef();

  constructor(props: SwipeableButtonProps) {
    super(props);
    this.state = {
      unlocked: false,
    };
  }

  componentDidMount() {
    if (this.containerRef.current) {
      this.containerWidth = this.containerRef.current.clientWidth - 50;
    }

    document.addEventListener("mousemove", this.onDrag);
    document.addEventListener("mouseup", this.stopDrag);
    document.addEventListener("touchmove", this.onDrag);
    document.addEventListener("touchend", this.stopDrag);
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onDrag);
    document.removeEventListener("mouseup", this.stopDrag);
    document.removeEventListener("touchmove", this.onDrag);
    document.removeEventListener("touchend", this.stopDrag);
  }

  onDrag = (e: MouseEvent | TouchEvent) => {
    if (this.state.unlocked) {
      return;
    }

    if (this.isDragging) {
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      this.sliderLeft = Math.min(
        Math.max(0, clientX - this.startX),
        this.containerWidth
      );
      this.updateSliderStyle();
    }
  };

  updateSliderStyle = () => {
    if (this.state.unlocked) return;
    if (this.sliderRef.current) {
      this.sliderRef.current.style.left = `${this.sliderLeft + 50}px`;
    }
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

  startDrag = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (this.state.unlocked) return;
    this.isDragging = true;
    this.startX = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  onSuccess = () => {
    if (this.containerRef.current) {
      this.containerRef.current.style.width = `${this.containerRef.current.clientWidth}px`;
    }
    this.setState({
      unlocked: true,
    });
  };

  getText = () => {
    return this.state.unlocked
      ? this.props.text_unlocked || "UNLOCKED"
      : this.props.text || "SLIDE";
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
        <div
          className={`rsbContainer ${
            this.state.unlocked ? "rsbContainerUnlocked" : ""
          }`}
          ref={this.containerRef}
        >
          <div
            className="rsbcSlider"
            ref={this.sliderRef}
            onMouseDown={this.startDrag}
            style={{ background: this.props.color }}
            onTouchStart={this.startDrag}
          >
            <span className="rsbcSliderText">{this.getText()}</span>
            <span className="rsbcSliderArrow"></span>
            <span
              className="rsbcSliderCircle"
              style={{ background: this.props.color }}
            ></span>
          </div>
          <div className="rsbcText">{this.getText()}</div>
        </div>
      </div>
    );
  }
}
