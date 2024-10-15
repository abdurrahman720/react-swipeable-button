# react-swipeable-button

[![NPM](https://img.shields.io/npm/v/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)
[![license](https://img.shields.io/github/license/abdurrahman720/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)[![install size](https://packagephobia.com/badge?p=react-swipeable-button)](https://packagephobia.com/result?p=react-swipeable-button)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-swipeable-button?style=flat-square)](https://bundlephobia.com/package/react-swipeable-button@latest)[![npm downloads](https://img.shields.io/npm/dt/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)

<!-- [![npm downloads](https://img.shields.io/npm/dm/react-swipeable-button.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-swipeable-button) -->

### A npm pacakge for Swipeable button in react

**Changes:**

**v1.2.0**

- Added `buttonReset` method to reset the component
- Added `buttonComplete` method to complete the component

Check all the changes in the [Release Notes](https://github.com/abdurrahman720/react-swipeable-button/releases)

## Installs

```bash
npm install react-swipeable-button
```

or

```bash
yarn add react-swipeable-button
```

## Demo

![react-swipeable-button](https://github.com/abdurrahman720/react-swipeable-button/blob/main/react-swipeable-button-v1.0.7.gif?raw=true)

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
      text="Swipe me!"
      text_unlocked="yeee"
      sliderColor="#16362d"
      sliderTextColor="#fff"
      sliderIconColor="#fff"
      background_color="#eee"
      borderRadius={30}
      circle
      autoWidth
      disabled={false}
      name="react-swipeable-button"
    />
  );
}

export default App;
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

## Props

| Prop               | Type                | Default                  | Description                                                                                                   |
| ------------------ | ------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| name               | String              | "react-swipeable-button" | Unique ID, in case of using several components on one page                                                    |
| text               | String              | "SWIPE"                  | The text that will be displayed on the swipe button                                                           |
| text_unlocked      | String              | "UNLOCKED!"              | The text that will displayed if swiping is successful                                                         |
| color (Depricated) | String              | "#333"                   | Depricated, use sliderColor instead                                                                           |
| sliderColor        | String              | "#16362d"                | The color of the slider                                                                                       |
| sliderTextColor    | String              | "#fff"                   | The color of the text                                                                                         |
| sliderIconColor    | String              | "#fff"                   | The color of the icon                                                                                         |
| background_color   | String              | "#eee"                   | The background color of the container                                                                         |
| borderRadius       | Number              | 30                       | The border radius of the container lets you control the roundness of the corners (ignored if circle is false) |
| noAnimate          | Boolean             | false                    | Disable css transition                                                                                        |
| width              | Number              | 300                      | Width of element (ignored if autoWidth is true)                                                               |
| height             | Number              | 50                       | Height of element                                                                                             |
| autoWidth          | Boolean             | false                    | takes 100% width of parent div                                                                                |
| circle             | Boolean             | true                     | All parts of component will be with border-radius and rounded handler                                         |
| disabled           | Boolean             | false                    | Disable interaction with component                                                                            |
| onSuccess          | Function (optional) | null                     | The function that will be called when a swipe is successful                                                   |
| onFailure          | Function (optional) | null                     | The function that will be called when a swipe is failed                                                       |

## Contribution

Contributing on this project is always welcome! Just fork, update, push to your respective branch and make a pull request after testing. Make sure to open an issue before contribute.

## License

MIT © [Abdur Rahman](https://github.com/abdurrahman720)
