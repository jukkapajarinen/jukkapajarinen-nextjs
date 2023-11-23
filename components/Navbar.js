import {useState, React} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
      <header className="container flex flex-wrap items-center justify-between mx-auto p-8 rounded bg-white">
        <a className="font-bold text-lg hover:text-teal-600" href="/" aria-label="Homepage">Jukka Pajarinen</a>
        <button onClick={e => toggleOpen()} className="flex items-center justify-center p-2 lg:hidden" aria-controls="navbar-default" aria-expanded={isOpen}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <div className={`w-full lg:block lg:w-auto ${!isOpen && 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-4 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white">
            <li><a className="block py-2 px-3 text-gray-900 hover:text-teal-600 border-b-2 border-gray-200 lg:border-0 lg:p-0" href="https://github.com/jukkapajarinen" target="_blank">Github</a></li>
            <li><a className="block py-2 px-3 text-gray-900 hover:text-teal-600 border-b-2 border-gray-200 lg:border-0 lg:p-0" href="https://play.google.com/store/apps/developer?id=Jukka+Pajarinen" target="_blank">Google Play</a></li>
            <li><a className="block py-2 px-3 text-gray-900 hover:text-teal-600 border-b-2 border-gray-200 lg:border-0 lg:p-0" href="https://trepo.tuni.fi/bitstream/handle/10024/119031/PajarinenJukka.pdf" target="_blank">Diplomityö 2020</a></li>
            <li><a className="block py-2 px-3 text-gray-900 hover:text-teal-600 border-b-2 border-gray-200 lg:border-0 lg:p-0" href="https://www.theseus.fi/bitstream/handle/10024/72055/Pajarinen_Jukka.pdf" target="_blank">Opinnäytetyö 2014</a></li>
            <li><a className="block py-2 px-3 text-gray-900 hover:text-teal-600 border-b-2 border-gray-200 lg:border-0 lg:p-0" href="https://fi.linkedin.com/in/jukkapajarinen" target="_blank">LinkedIn</a></li>
            <li><a className="block py-2 px-3 text-gray-900 hover:text-teal-600 border-b-2 border-gray-200 lg:border-0 lg:p-0" href="https://twitter.com/pajarinenjukka" target="_blank">X</a></li>
            <li><a className="block py-2 px-3 text-gray-900 hover:text-teal-600 border-b-2 border-gray-200 lg:border-0 lg:p-0" href="https://www.facebook.com/jukka.pajarinen" target="_blank">Facebook</a></li>
            <li><a className="block py-2 px-3 text-gray-900 lg:rounded lg:px-4 lg:py-3 lg:inline lg:bg-teal-600 hover:lg:bg-teal-500 lg:text-gray-50" href="/CV_Lumitum_Jukka_Pajarinen_2023.pdf" target="_blank">Lataa CV</a></li>
          </ul>
        </div>
      </header>
  );
};

export default Navbar;
