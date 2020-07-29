import React from 'react';

const Footer = () => (
  <footer className="container flex-col mx-auto py-6 px-3 mt-12 mb-8 text-gray-800 items-center text-center">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <p className="mt-5">Made with ❤️ in Montreal.</p>
      </div>
    </div>
    <div className="py-2">
      Icons from{' '}
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik{' '}
      </a>
      hosted on{' '}
      <a href="https://www.flaticon.com/" title="Flaticon">
        Flaticon
      </a>
        , illustrations from{' '}
        <a href="http://blush.design" title="Flaticon">
          Blush
        </a>
    </div>
  </footer>
);

export default Footer;
