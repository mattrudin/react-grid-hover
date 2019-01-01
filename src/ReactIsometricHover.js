import React from 'react'
import styled from 'styled-components'

const ReactIsometricHover = (props) => { 
    const GridContainer = styled.div`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    `
    return ( 
        <>
            <GridContainer>
                {props.children}
            </GridContainer>
        </>
     );
}


export default ReactIsometricHover;props