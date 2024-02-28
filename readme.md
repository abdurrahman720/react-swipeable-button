# react-swipeable-button

### A npm pacakge for Swipeable button in react

[![NPM](https://img.shields.io/npm/v/react-swipeable-button.svg)](https://www.npmjs.com/package/react-swipeable-button)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=react-swipeable-button&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=react-swipeable-button)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-swipeable-button?style=flat-square)](https://bundlephobia.com/package/react-swipeable-button@latest)

## Install

```bash
npm install react-swipeable-button
```

or

```bash
yarn add react-swipeable-button
```

## Demo

![react-swipeable-button](https://raw.githubusercontent.com/abdurrahman720/react-swipeable-button/main/react-swipeable-button.gif)

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
        text="Swipe to get to know us!"
        text_unlocked="Swiped!"
        color="#000"
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

## Future Updates

Contributing on this project is always welcome! Just fork, update, push to your respective branch and make a pull request after testing.

`TypeScript support is coming soon.`

## License

MIT © [Abdur Rahman](https://github.com/abdurrahman720)
