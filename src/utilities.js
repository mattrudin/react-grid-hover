export const gridDefiner = (children) => {
    const numberOfChildrens = React.Children.count(children)
    return Math.floor(Math.sqrt(numberOfChildrens))
}

export const designChecker = string => string === 'flat' ? 'flat' : 'standard';
