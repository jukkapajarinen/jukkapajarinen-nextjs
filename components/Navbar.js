import React from 'react';

const Navbar = () => {
  return (
    <header className="container flex items-center justify-between p-8 mx-auto rounded bg-white">
      <a className="font-bold text-lg" rel="noopener noreferrer" href="/" aria-label="Homepage">Jukka Pajarinen</a>
      <div className="items-center hidden space-x-8 lg:flex font-medium">
        <div className="space-x-4">
          <a rel="noopener noreferrer" href="https://github.com/jukkapajarinen" target="_blank">Github</a>
          <a rel="noopener noreferrer" href="https://play.google.com/store/apps/developer?id=Jukka+Pajarinen" target="_blank">Google Play</a>
          <a rel="noopener noreferrer" href="https://trepo.tuni.fi/bitstream/handle/10024/119031/PajarinenJukka.pdf" target="_blank">Diplomityö 2020</a>
          <a rel="noopener noreferrer" href="https://www.theseus.fi/bitstream/handle/10024/72055/Pajarinen_Jukka.pdf" target="_blank">Opinnäytetyö 2014</a>
          <a rel="noopener noreferrer" href="https://fi.linkedin.com/in/jukkapajarinen" target="_blank">LinkedIn</a>
          <a rel="noopener noreferrer" href="https://twitter.com/pajarinenjukka" target="_blank">X</a>
          <a rel="noopener noreferrer" href="https://www.facebook.com/jukka.pajarinen" target="_blank">Facebook</a>
        </div>
        <a href="/CV_Lumitum_Jukka_Pajarinen_2023.pdf" target="_blank" className="px-4 py-2 rounded-md bg-teal-600 text-gray-50">Lataa CV</a>
      </div>
      <button className="flex items-center justify-center p-2 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </header>
  );
};

export default Navbar;
