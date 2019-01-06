import React from 'react'
import styled from 'styled-components'
import { gridDefiner } from './utilities'

const ReactIsometricHover = (props) => { 
    const { children, itemSize, skew='left' } = props
    const columnsNumber = gridDefiner(children)
    const rowsNumber = gridDefiner(children) + 1

    const GridContainer = styled.div`
        display: grid;
        grid-gap: 20px;
        width: ${itemSize * columnsNumber}px;
        height: ${itemSize * rowsNumber}px;
        grid-template-columns: repeat(${columnsNumber}, 1fr);
        grid-template-rows: repeat(${rowsNumber}, 1fr);
        transform: skewX(${skew === "right" ? "-" : ""}45deg);
    `

    const GridChild = styled.div`
        width: ${itemSize}px;
        height: ${itemSize}px;
        box-shadow: -20px 30px 5px grey;
        transition-duration: 0.5s;
        :hover {
            transform: translate3d(0px,-10px,10px);
        }
        img {
            width: 100%;
            height: 100%;
        }
    `
    
    return ( 
        <>
            <GridContainer>
                {children.map(child => (
                    <GridChild>
                        {child}
                    </GridChild>
                ))}
            </GridContainer>
        </>
     );
}


export default ReactIsometricHover