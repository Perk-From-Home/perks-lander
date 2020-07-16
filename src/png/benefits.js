import React from 'react';
import happyBunch from './happy-bunch.png';
import theMunchies from './the-munchies.png';
import cityscape from './cityscapes.png';

const Benefit = img => <img src={img} className="mx-auto mb-2" style={{ maxHeight: '50vh' }} />;

const Diverse = () => Benefit(happyBunch);
const Food = () => Benefit(theMunchies);
const Community = () => Benefit(cityscape);

export { Diverse, Food, Community };
