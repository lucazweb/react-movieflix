import React from 'react';
import { Appbox, Movie } from './style';

const Mock = [1, 2, 3, 4, 5];

const Intro = () => (
    <Appbox>
        {
            Mock.map((movie) => (
                <Movie>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEkvZ3dr8qm2AIGRqRQ9yYK9bDnk_i3ANr0NO3EtFoxgIOdVrbLg" alt="Movie title" title="Movie title" />
                    <h2> Movie title </h2>
                </Movie>
            ))
        }
    </Appbox>
);

export default Intro;