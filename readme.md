# React Grid Hover

![](ReactGridHoverAnimation.gif)

## Installation
With npm:
```javascript
npm i react-hover-grid
```

In your react file:
```javascript
import ReactHoverGrid from 'react-hover-grid';

//use it as follows:
<ReactHoverGrid {...config} > // for the config file, see section Configuration below
    <img src='yourSourceURL' alt='altAttribute' />
    <img src='yourSourceURL' alt='altAttribute' />
    <img src='yourSourceURL' alt='altAttribute' />
    <img src='yourSourceURL' alt='altAttribute' />
</ReactHoverGrid>
```

## Configuration
```javascript
const config = {
	itemSize: '2em', // Standard is 50px, unit may vary
	design: 'flat', //standard is none, 'flat' is alternative
    scaleFactor: 1.5, // standard is 1.1, can be changed
};
```