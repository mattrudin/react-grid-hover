export const gridDefiner = (children) => {
    const numberOfChildrens = React.Children.count(children)
    return Math.floor(Math.sqrt(numberOfChildrens))
}