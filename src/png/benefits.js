import React from 'react';
import happyBunch from './happy-bunch.png';
import theMunchies from './the-munchies.png';
import cityscape from './cityscapes.png';

const Benefit = (img, alt) => (
  <img src={img} alt={alt} className="mx-auto mb-2" style={{ maxHeight: '50vh' }} />
);

const Diverse = () => Benefit(happyBunch, 'A happy group of people');
const Food = () => Benefit(theMunchies, 'A variety of employees having fun');
const Community = () => Benefit(cityscape, 'A cityscape');

export { Diverse, Food, Community };
