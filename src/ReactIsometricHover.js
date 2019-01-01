import React from 'react'
import styled from 'styled-components'
import { gridDefiner } from './utilities'

const ReactIsometricHover = (props) => { 
    const columnsNumber = gridDefiner(props.children)
    const rowsNumber = gridDefiner(props.children) + 1

    const GridContainer = styled.div`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(${columnsNumber}, 1fr);
        grid-template-rows: repeat(${rowsNumber}, 1fr);
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