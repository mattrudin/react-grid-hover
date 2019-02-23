# React Grid Hover

## Installation
With npm:
```javascript
npm i react-hover-grid
```

In your react file:
```javascript
import ReactHoverGrid from 'react-hover-grid';

//use it as follows:
<ReactHoverGrid {...config} >
    <img srv='yourSourceURL' alt='altAttribute' />
    <img srv='yourSourceURL' alt='altAttribute' />
    <img srv='yourSourceURL' alt='altAttribute' />
    <img srv='yourSourceURL' alt='altAttribute' />
</ReactHoverGrid>
```

## Configuration
```javascript
const config = {
	itemSize: 50, // in pixels
	design: 'flat', //standard is none, 'flat' is alternative
    scaleFactor: 1.5, // standard is 1.1, can be changed
};
```