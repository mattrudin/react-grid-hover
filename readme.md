# React Grid Hover

![](ReactGridHoverAnimation.gif)

## Installation
With npm:
```javascript
npm i react-grid-hover
```

In your react file:
```javascript
import ReactGridHover from 'react-grid-hover';

//use it as follows:
<ReactGridHover {...config} > // for the config file, see section Configuration below
    <img src='yourSourceURL' alt='altAttribute' />
    <img src='yourSourceURL' alt='altAttribute' />
    <img src='yourSourceURL' alt='altAttribute' />
    <img src='yourSourceURL' alt='altAttribute' />
</ReactGridHover>
```

## Configuration
```javascript
const config = {
	itemSize: '2em', // Standard is 50px, unit may vary
	design: 'flat', //standard is none, 'flat' is alternative
    scaleFactor: 1.5, // standard is 1.1, can be changed
};
```