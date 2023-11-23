import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Sinun <span className="text-teal-600">ohjelmisto</span><wbr />konsulttisi
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Olen Diplomi-Insinööri ja pystyn toimimaan laajasti ohjelmistotuotannon eri osa-alueilla.
          </p>
          <p className="mt-2 mb-8 text-lg text-gray-700 sm:mb-12">
            Minulla on <span className="font-bold">paljon kokemusta</span> web-kehityksestä, mobiilikehityksestä ja UI/UX-suunnittelutöistä.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="mailto:jukka.pajarinen@lumitum.com" className="px-8 py-3 text-lg font-semibold rounded bg-teal-600 text-gray-50">Lähetä sähköpostia</a>
            <a rel="noopener noreferrer" href="https://lumitum.com" target="_blank" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Lumitum Oy</a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="/jukkapajarinen.png" alt="Jukka Pajarinen Profile Picture" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
