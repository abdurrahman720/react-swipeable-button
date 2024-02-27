# react-swipeable-button

> A npm pacakge for Swipeable button in react

[![NPM](https://img.shields.io/npm/v/react-swipe-button.svg)](https://www.npmjs.com/package/react-swipeable-btn) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install react-swipeable-button
```
or

```bash
yarn add react-swipeable-button
```

<!-- ## [Demo](http://react-swipe-button.rinas.in/)

This is a [demo](http://react-swipe-button.rinas.in/) of react-swipe-button -->

## Usage

```jsx
import { SwipeableButton } from "react-swipeable-button";

function App() {
  const onSuccess = () => {
   
    console.log("Successfully Swiped!");
  };

  return (
    <div>
      <SwipeableButton
        onSuccess={onSuccess}
        text="Swipe to learn More!"
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
The color of swipe button icon

**onSuccess**
The function that will get called when a swipe is success

## License

MIT © [Abdur Rahman](https://github.com/abdurrahman720)
