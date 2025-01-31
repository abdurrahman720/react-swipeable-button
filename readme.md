# react-swipeable-button

[![NPM](https://img.shields.io/npm/v/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)
[![license](https://img.shields.io/github/license/abdurrahman720/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)[![install size](https://packagephobia.com/badge?p=react-swipeable-button)](https://packagephobia.com/result?p=react-swipeable-button)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-swipeable-button?style=flat-square)](https://bundlephobia.com/package/react-swipeable-button@latest)[![npm downloads](https://img.shields.io/npm/dt/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)

<!-- [![npm downloads](https://img.shields.io/npm/dm/react-swipeable-button.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-swipeable-button) -->

### A npm package for Swipeable button in react

<!-- ![react-swipeable-button](https://github.com/abdurrahman720/react-swipeable-button/blob/main/react-swipeable-button-v1.0.7.gif?raw=true) -->

![react-swipeable-button](https://github.com/abdurrahman720/react-swipeable-button/blob/main/react-swipeable-button-v1.6.1.gif?raw=true)

**Changes:**

**1.6.5**
- Storybook improvement


**1.6.3**
_Fixes_
- Slider Button vanishes in Storybook sometimes

_Improvements_
- `circle` prop is now *true* by default


**v1.6.2**

_Improvements_

- `Shimmer Effect enhancement`: Enhanced the visibility of the shimmer effect

_Fixes_

- Removed transition effect as it was causing slide delay
- Disabled animation when the button is disabled


Check all the changes in the [Release Notes](https://github.com/abdurrahman720/react-swipeable-button/releases)

## Installs

```bash
npm install react-swipeable-button
```

or

```bash
yarn add react-swipeable-button
```

## Usage

#### General Usage

```jsx
import { SwipeableButton } from "react-swipeable-button";

function App() {
  const onSuccess = () => {
    console.log("Successfully Swiped!");
  };

  const onFailure = () => {
    console.log("Failed to Swipe!");
  };

  return (
    <SwipeableButton
      onSuccess={onSuccess}
      onFailure={onFailure}
      noAnimate={false} //default is false
      text="Swipe me!"
      text_unlocked="yeee"
      sliderTextColor="#fff" //default is #fff
      sliderIconColor="#fff" //default is #fff
      background_color="#eee" //default is #eee
      ...otherProps (check props section for more details)
      name="react-swipeable-button"
    />
  );
}

export default App;
```

#### Using ReactNode insead of text

```tsx
<SwipeableButton
  onSuccess={onSuccess}
  onFailure={onFailure}
  buttonChildren={
    <p style={{ color: "green", textAlign: "center" }}>Click me</p> // instead of text
  }
  buttonChildrenUnlocked={
    <p style={{ color: "red", textAlign: "center" }}>Unlocked!</p> // using instead of text_unlocked
  }
  sliderColor="#16362d"
  sliderTextColor="#fff"
  sliderIconColor="#fff"
  background_color="#eee"
  borderRadius={30}
  circle //default is true
  autoWidth
  disabled={false}
  name="react-swipeable-button"
/>
```

#### With Ref : `buttonReset` and `buttonComplete` methods

```tsx
import { useRef } from "react";
import { SwipeableButton } from "react-swipeable-button";

function App() {

  const swipeableButtonRef = useRef<SwipeableButton | null>(null); // Create a ref for the component

  const handleReset = () => {
    swipeableButtonRef.current?.buttonReset(); // Call the reset method
  };

  const handleComplete = () => {
    swipeableButtonRef.current?.buttonComplete(); // Call the complete method
  };
  return (
      <SwipeableButton
        text="Swipe me!"
        text_unlocked="yeee"
        color="16362d"
        sliderTextColor="#fff"
        sliderIconColor="#fff"
        background_color="#eee"
        circle
        name="react-swipeable-button"
        ref={swipeableButtonRef} // Expose the ref to the component
      />
      //example usage of the reset and complete methods
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
}

export default App;
```

#### Troubleshooting

- If you face trouble with long text, try to increase the width

```tsx
<SwipeableButton
  text="A long text that doesn't fit in the middle" //long text
  width={500} // increase the width (default is 300)
  ...otherProps
/>
```

- using `buttonChildren` and `buttonChildrenUnlocked` props can be an alternative too though it needs more work ; check props section for more details

## Props

| Prop                   | Type                | Default                  | Description                                                                                                                                                                        |
| ---------------------- | ------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name                   | String              | "react-swipeable-button" | Unique ID, in case of using several components on one page                                                                                                                         |
| buttonChildren         | ReactNode           | None                     | We can pass any react component as children to the button instead of text                                                                                                          |
| buttonChildrenUnlocked | ReactNode           | None                     | We can pass any react component as children to the button instead of text_unlocked when the button is unlocked (buttonChildren is mandatory when buttonChildrenUnlocked is passed) |
| text                   | String              | "SWIPE"                  | The text that will be displayed on the swipe button (will be overridden by buttonChildren)                                                                                         |
| text_unlocked          | String              | "UNLOCKED!"              | The text that will displayed if swiping is successful (will be overridden by buttonChildrenUnlocked)                                                                               |
| color (Depricated)     | String              | "#333"                   | Depricated, use sliderColor instead                                                                                                                                                |
| sliderColor            | String              | "#16362d"                | The color of the slider                                                                                                                                                            |
| sliderTextColor        | String              | "#fff"                   | The color of the Slider Text                                                                                                                                                       |
| textColor              | String              | "#000"                   | The color of the Text (without slider)                                                                                                                                             |
| sliderIconColor        | String              | "#fff"                   | The color of the icon                                                                                                                                                              |
| background_color       | String              | "#eee"                   | The background color of the container                                                                                                                                              |
| borderRadius           | Number              | 30                       | The border radius of the container lets you control the roundness of the corners (ignored if circle is false)                                                                      |
| noAnimate              | Boolean             | false                    | Disable animation                                                                                                                                                                  |
| width                  | Number              | 300                      | Width of element (ignored if autoWidth is true)                                                                                                                                    |
| height                 | Number              | 50                       | Height of element                                                                                                                                                                  |
| autoWidth              | Boolean             | false                    | takes 100% width of parent div                                                                                                                                                     |
| circle                 | Boolean             | true                     | All parts of component will be with border-radius and rounded handler                                                                                                              |
| disabled               | Boolean             | false                    | Disable interaction with component                                                                                                                                                 |
| onSuccess              | Function (optional) | null                     | The function that will be called when a swipe is successful                                                                                                                        |
| onFailure              | Function (optional) | null                     | The function that will be called when a swipe is failed                                                                                                                            |

## Contribution

Contributing on this project is always welcome! Just fork, update, push to your respective branch and make a pull request after testing. Make sure to open an issue before contribute.

## License

MIT © [Abdur Rahman](https://github.com/abdurrahman720)
