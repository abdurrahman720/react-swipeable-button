# react-swipeable-button

[![NPM](https://img.shields.io/npm/v/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)
[![license](https://img.shields.io/github/license/abdurrahman720/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)[![install size](https://packagephobia.com/badge?p=react-swipeable-button)](https://packagephobia.com/result?p=react-swipeable-button)[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-swipeable-button?style=flat-square)](https://bundlephobia.com/package/react-swipeable-button@latest)[![npm downloads](https://img.shields.io/npm/dt/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)

<!-- [![npm downloads](https://img.shields.io/npm/dm/react-swipeable-button.svg?style=flat-square)](https://npm-stat.com/charts.html?package=react-swipeable-button) -->

### A npm pacakge for Swipeable button in react

`Updates:`

- Typescript Support Added

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

  return (
    <div className="w-[500px] h-[100px] bg-white">
      <SwipeableButton
        onSuccess={onSuccess}
        text="Swipe me!"
        text_unlocked="yeee"
        color="#16362d"
      />
    </div>
  );
}

export default App;
```

## Props

**text (Default will be 'SWIPE')**
The text that will display on the swipe button

**text_unlocked (Default will be 'UNLOCKED!')**
The text that will display on the swipe button

**color**
The color of swipe button

**onSuccess**
The function that will get called when a swipe is success

## Contribution

Contributing on this project is always welcome! Just fork, update, push to your respective branch and make a pull request after testing. Make sure to open an issue before contribute.

## License

MIT © [Abdur Rahman](https://github.com/abdurrahman720)
