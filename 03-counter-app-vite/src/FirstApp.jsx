import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, number} ) =>{
    return(
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p> 
            <p>{number +1}</p>
        </>
    )
}
FirstApp.defaultProps = {
    subTitle: "No hay subtitulo",
    number: 0
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    number: PropTypes.number.isRequired
}
