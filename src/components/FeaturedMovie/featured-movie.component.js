import React, { useState, useEffect } from 'react';
import { 
  FeaturedBox, 
  FeaturedInfo, 
  FeaturedTitle, 
  FeaturedButton 
} from './featured-movie.styled';

const FeaturedMovieComponent = () => {
  const [ backgroundPos, setBackgroundPos ] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setBackgroundPos(window.scrollY);
    })
  });

  return (
    <FeaturedBox yPos={backgroundPos}>
      <FeaturedInfo>
        <FeaturedTitle>Vikings</FeaturedTitle>
        <FeaturedButton>Assistir</FeaturedButton>
      </FeaturedInfo>
    </FeaturedBox>
  );
}

export const FeaturedMovie = FeaturedMovieComponent;
