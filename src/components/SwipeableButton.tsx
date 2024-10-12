import React, { Component, RefObject } from "react";
import "./SwipeableButton.css";

interface SwipeableButtonProps {
  autoWidth?: boolean;
  circle?: boolean;
  disabled?: boolean;
  noAnimate?: boolean;
  width?: number;
  height?: number;
  position?: number;
  text?: string;
  text_unlocked?: string;
  name?: string;
  onSuccess?: () => void;
  onFailure?: () => void;
  sliderColor?: string;
  sliderTextColor?: string;
  sliderIconColor?: string;
  background_color?: string;
  borderRadius?: number;
  /**
   * @deprecated Deprecation Warning: The 'color' prop is deprecated and will be removed in future versions. Please use 'sliderColor' instead.
   */
  color?: string; // Deprecated
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
    if (this.state.unlocked || this.props.disabled) {
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
        this.onSwiped();
        if (this.props.onSuccess) {
          this.props.onSuccess();
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

  onSwiped = () => {
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
    const {
      width = 300,
      height = 50,
      circle = false,
      disabled = false,
      noAnimate = false,
      autoWidth = false,
      name = "react-swipeable-button",
      color,
      sliderColor,
      background_color = "#eee",
      borderRadius = 30,
      sliderTextColor = "#fff",
      sliderIconColor = "#fff",
    } = this.props;

    const finalSliderColor = sliderColor || color || "#16362d";

    // Log a warning if the deprecated color prop is used
    if (color && !sliderColor) {
      console.warn(
        "Deprecation Warning: The 'color' prop is deprecated and will be removed in future versions. Please use 'sliderColor' instead."
      );
    }
    return (
      <div
        key={name}
        className={`ReactSwipeButton ${disabled ? "rsbContainerDisabled" : ""}`}
        style={{
          width: autoWidth ? "100%" : `${width}px`,
          height: `${height}px`,
        }}
      >
        <div
          className={`rsbContainer ${
            this.state.unlocked ? "rsbContainerUnlocked" : ""
          } ${noAnimate ? "noAnimate" : ""}`}
          ref={this.containerRef}
          style={{
            borderRadius: circle ? "50px" : "5px",
            backgroundColor: background_color,
          }}
        >
          <div
            className={`rsbcSlider ${noAnimate ? "noAnimate" : ""} `}
            ref={this.sliderRef}
            onMouseDown={this.startDrag}
            style={{
              background: finalSliderColor,
              borderRadius: circle ? `${borderRadius}px` : "0px",
            }}
            onTouchStart={this.startDrag}
          >
            <span className="rsbcSliderText" style={{ color: sliderTextColor }}>
              {this.getText()}
            </span>
            <span
              className="rsbcSliderArrow"
              style={{
                border: `2px solid ${sliderIconColor}`,
                borderLeftColor: "transparent",
                borderBottomColor: "transparent",
                transformOrigin: "center",
              }}
            ></span>
            <span
              className="rsbcSliderCircle"
              style={{ background: finalSliderColor }}
            ></span>
          </div>
          <div className="rsbcText">{this.getText()}</div>
        </div>
      </div>
    );
  }
}
