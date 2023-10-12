import Loader from 'components/Loader/Loader';
import FilmGalleryItem from '../FilmGalleryItem/FilmGalleryItem';
import { useLocation } from 'react-router-dom';
import {ListSearchFilms} from '../styled'


const FilmGallery = ({ films, error, loading }) => {
    const location = useLocation();
    return (
        <ListSearchFilms className="FilmGallery">
            {loading && <Loader />}
            {error && <div>Something went wrong. Try again later</div>}
            {films && films.map((film) => <FilmGalleryItem className='FilmGalleryItem' key={film.id} film={film} location={location} />)}
        </ListSearchFilms>)
};

export default FilmGallery