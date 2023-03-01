import PropTypes from 'prop-types'
export const GridElement = ({title, url}) => {
  return (
    <div className='card'>
      <img src={url}/>
      <p>{title}</p>
    </div>
  )
}

GridElement.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}