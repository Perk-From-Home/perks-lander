import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Logo } from '../../png/icons';
import Button from '../Button';

import { CUSTOMER_GFORM_URL } from '../../data/external-links';

const Header = () => (
  <header className="sticky top-0 bg-white shadow bg-opacity-75">
    <div style={{ margin: '0 auto' }}></div>
    <div className="container flex flex-col lg:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="text-2xl text-center">
        <Logo />
      </div>

      <div className="flex md:mt-4 hidden md:inline md:pb-4 ">
        <AnchorLink className="px-4 text-black text-center p-1" href="#features">
          How It Works
        </AnchorLink>
        <AnchorLink className="px-4 text-black text-center p-1" href="#services">
          Benefits
        </AnchorLink>
        <AnchorLink className="px-4 text-black text-center p-1" href="#stats">
          Our Partners
        </AnchorLink>
        <AnchorLink className="px-4 text-black text-center p-1" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden lg:block">
        <Button className="text-sm" href={CUSTOMER_GFORM_URL}>
          Get Early Access
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
