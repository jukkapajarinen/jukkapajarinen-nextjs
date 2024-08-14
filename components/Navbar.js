import {useState, React} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
      <header className="bg-teal-600 text-gray-50">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-8">
          <a className="font-bold text-lg hover:underline" href="/" aria-label="Homepage">Jukka Pajarinen</a>
          <button onClick={e => toggleOpen()} className="flex items-center justify-center p-2 lg:hidden" aria-controls="navbar-default" aria-expanded={isOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="animate-pulse w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div className={`w-full lg:block lg:w-auto ${!isOpen && 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col mt-6 bg-teal-500 rounded lg:bg-teal-600 lg:flex-row lg:space-x-4 rtl:space-x-reverse lg:mt-0 lg:border-0">
              <li><a className="block py-2 px-3 text-white hover:underline border-b-2 border-teal-600 lg:border-0 lg:p-0" href="https://trepo.tuni.fi/bitstream/handle/10024/119031/PajarinenJukka.pdf" target="_blank">Diplomityö 2020</a></li>
              <li><a className="block py-2 px-3 text-white hover:underline border-b-2 border-teal-600 lg:border-0 lg:p-0" href="https://www.theseus.fi/bitstream/handle/10024/72055/Pajarinen_Jukka.pdf" target="_blank">Opinnäytetyö 2014</a></li>
              <li><a className="animate-pulse block py-2 px-3 text-white hover:underline border-b-2 border-teal-600 lg:border-0 lg:p-0" href="https://github.com/jukkapajarinen" target="_blank">Github</a></li>
              <li><a className="block py-2 px-3 text-white hover:underline border-b-2 border-teal-600 lg:border-0 lg:p-0" href="https://fi.linkedin.com/in/jukkapajarinen" target="_blank">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
