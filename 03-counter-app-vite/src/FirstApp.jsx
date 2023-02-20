import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, number} ) =>{
    return(
        <>
            <h1>{title}</h1>
            <p>{subTitle} {number +1}</p>
        </>
    )
}
FirstApp.defaultProps = {
    title: "No hay titulo",
    subTitle: "No hay subtitulo",
    number: 0
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    number: PropTypes.number.isRequired
}
