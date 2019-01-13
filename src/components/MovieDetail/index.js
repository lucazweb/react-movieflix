import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../BackButton';
import { Appbox, MovieImageBox, MovieDetailBox} from './style';

const MovieDetail = () => (
  <Fragment>
    <Link to='/'>
      <BackButton />
    </Link>
    <Appbox>
      <MovieImageBox>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GpxcgXxdRAsqR72sQndrQdHEYLmiLIbrRz9zmK5EiP2PB4dJlzQUVQ" title="Movie title" alt="Movie title" />
      </MovieImageBox>

      <MovieDetailBox>
        <h2> Movie title</h2>
        <p> If you're averse to change, then you might not like Netflix's most recent announcement. According to It's Nice That, the streaming service is changing its typeface from the old reliable Gotham to Netflix Sans. It was developed with typeface designers Dalton Maag.</p>
      </MovieDetailBox>
      
    </Appbox>
  </Fragment>
);

export default MovieDetail;