# react-swipeable-button

[![NPM](https://img.shields.io/npm/v/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)
[![license](https://img.shields.io/github/license/abdurrahman720/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)[![install size](https://packagephobia.com/badge?p=react-swipeable-button)](https://packagephobia.com/result?p=react-swipeable-button)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-swipeable-button?style=flat-square)](https://bundlephobia.com/package/react-swipeable-button@latest)[![npm downloads](https://img.shields.io/npm/dt/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)

<!-- [![npm downloads](https://img.shields.io/npm/dm/react-swipeable-button.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-swipeable-button) -->

### A npm pacakge for Swipeable button in react

**Changes:**

- Deprecated the `color` prop in favor of `sliderColor`.
- Resolved TypeScript compatibility issues. (`Error Failed to parse source map #1`)
- Introduced new features (see the "Props" section for details) that makes the component fully customizable!

## Install

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

You need to wrap a parent div to set the width, height and background color of the button.

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
    <div className="w-[500px] h-[100px] bg-white">
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
| width              | Number              | 400                      | Width of element (ignored if autoWidth is true)                                                               |
| height             | Number              | 60                       | Height of element                                                                                             |
| autoWidth          | Boolean             | true                     | takes 100% width of parent div                                                                                |
| circle             | Boolean             | true                     | All parts of component will be with border-radius and rounded handler                                         |
| disabled           | Boolean             | false                    | Disable interaction with component                                                                            |
| onSuccess          | Function (optional) | null                     | The function that will be called when a swipe is successful                                                   |
| onFailure          | Function (optional) | null                     | The function that will be called when a swipe is failed                                                       |

## Contribution

Contributing on this project is always welcome! Just fork, update, push to your respective branch and make a pull request after testing. Make sure to open an issue before contribute.

## License

MIT © [Abdur Rahman](https://github.com/abdurrahman720)
