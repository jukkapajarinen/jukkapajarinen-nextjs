import {useState, React} from 'react';

const Navbar = () => {
  return (
      <header className="bg-gray-200 text-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto lg:py-8 lg:px-96">
          <div className='w-full'  id="navbar-default">
            <ul className="font-medium flex justify-between">
              <li><a className="block py-2 px-3 hover:underline" href="https://trepo.tuni.fi/bitstream/handle/10024/119031/PajarinenJukka.pdf" target="_blank">Diplomityö 2020</a></li>
              <li><a className="block py-2 px-3 hover:underline" href="https://www.theseus.fi/bitstream/handle/10024/72055/Pajarinen_Jukka.pdf" target="_blank">Opinnäytetyö 2014</a></li>
              <li><a className="animate-pulse block py-2 px-3 hover:underline" href="https://github.com/jukkapajarinen" target="_blank">Github</a></li>
              <li><a className="block py-2 px-3 hover:underline" href="https://fi.linkedin.com/in/jukkapajarinen" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
