import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Logo } from '../../png/icons';
import Button from '../Button';

import { CUSTOMER_GFORM_URL } from '../../data/external-links';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div style={{ margin: '0 auto' }}></div>
    <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="text-2xl lg:pl-0 text-center">
        <Logo />
      </div>

      <div className="flex mt-4 :mt-0 md:visible pb-4 ">
        <AnchorLink className="px-4 text-black" href="#features">
          How It Works
        </AnchorLink>
        <AnchorLink className="px-4 text-black" href="#services">
          Benefits
        </AnchorLink>
        <AnchorLink className="px-4 text-black" href="#stats">
          Our Partners
        </AnchorLink>
        <AnchorLink className="px-4 text-black" href="#testimonials">
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
