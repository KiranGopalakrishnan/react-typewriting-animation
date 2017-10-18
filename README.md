# react-typewriter-animation

Imitates the animated effect of a typewriter ,ie a single character is typed at a time, and the typing of the entire text is completed withn the specified time

## Installation

To install this Component, run `npm install react-typewriter-animation`.


## Usage

To use the component, In your react Application just do

```javascript
import React, { Component } from 'react';
//importing the component
import Typewriter from 'react-typewriter-animation';
class App extends Component {
  render() {
    return (
      <div className="App">
      //text-->text to type
      //time--> the time constraint for finishing the typing
        <Typewriter text="Helllllo" time={1000} />
      </div>
    );
  }
}
export default App;
```
Find the project npm registery at : https://www.npmjs.com/package/simple-react-counter
