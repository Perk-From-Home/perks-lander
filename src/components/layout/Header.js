import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Logo } from '../../png/icons';
import Button from '../Button';

import { CUSTOMER_GFORM_URL } from '../../data/external-links';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <Logo />
        </div>
      </div>
      <div className="flex mt-4 :mt-0 md:visible">
        <AnchorLink className="px-4" href="#features">
          How It Works
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Benefits
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Our Partners
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden lg:block">
        <Button className="text-sm" href={CUSTOMER_GFORM_URL}>
          Start Free Trial
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
