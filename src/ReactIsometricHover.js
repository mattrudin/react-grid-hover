import React from 'react'
import styled from 'styled-components'

const ReactIsometricHover = (props) => { // props shall be an object
    const { content } = props; //content shall be an array
    const GridContainer = styled.div`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    `
    return ( 
        <GridContainer>

        </GridContainer>
     );
}


export default ReactIsometricHover;props