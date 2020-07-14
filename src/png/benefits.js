import React from 'react';
import happyBunch from './happy-bunch.png';
import theMunchies from './the-munchies.png';
import offer from './offer.png';

const Benefit = img => <img src={img} className="mx-auto mb-2" style={{ maxHeight: '50vh' }} />;

const Diverse = () => Benefit(happyBunch);
const Food = () => Benefit(theMunchies);
const Offers = () => Benefit(offer);

export { Diverse, Food, Offers };
