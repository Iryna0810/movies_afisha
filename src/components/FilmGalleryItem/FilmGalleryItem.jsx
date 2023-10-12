import { Link } from 'react-router-dom';
import '../styles.css'
import { Container, Poster } from 'components/styled';
const IMG_URL = `https://image.tmdb.org/t/p/original`

const FilmGalleryItem = ({ film, location }) => {
  const { id, overview, title, backdrop_path } = film;
  return (
    <li key={id} className="ImageGalleryItem">
      <Container>     
        <Link to={`${id}`} state={{from: location}}>
          <Poster
            className='ImageGalleryItem-image'
            src={`${IMG_URL}/${backdrop_path}`}
            alt={title} />
        </Link>
        <h3>{title}</h3>
        <p>{overview}</p>
      </Container>
    </li>)
};

export default FilmGalleryItem
