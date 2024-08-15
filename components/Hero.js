import React from "react";

const Hero = () => {
  return (
    <section className="text-gray-800">
      <div className="container p-6 mx-auto sm:py-12 lg:py-24">
        <div className="flex items-center justify-center p-6 mt-8 mb-8 lg:mt-0 h-32">
          <img
            src="/jukkapajarinen.png"
            alt="Jukka Pajarinen Profile Picture"
            className="object-contain h-32"
          />
        </div>
        <div className="p-6 text-center">
          <h1 className="text-5xl font-bold sm:text-6xl mb-8">
            Sinun{" "}
            <span
              className="text-white"
              style={{
                "background-image":
                  "radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)",
              }}
            >
              ohjelmisto
            </span>
            <wbr />
            konsulttisi
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            Hei sinulle! Minä olen <span className="font-bold">Jukka Pajarinen</span>. Koulutukseltani olen
            Diplomi-Insinööri ja pystyn toimimaan laajasti ohjelmistotuotannon
            eri osa-alueilla.
          </p>
          <p className="mt-2 mb-8 text-lg text-gray-700 sm:mb-12">
            Minulla on <span className="font-bold">paljon kokemusta</span>{" "}
            web-kehityksestä, mobiilikehityksestä ja UI/UX-suunnittelutöistä.
          </p>
          <div className="flex space-y-4 sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              rel="noopener noreferrer"
              href="mailto:jukka.pajarinen@lumitum.com"
              className="px-8 py-3 text-lg font-semibold hover:underline rounded bg-gray-800 hover:lg:bg-gray-500 text-gray-50"
            >
              Lähetä sähköpostia
            </a>
            <a
              rel="noopener noreferrer"
              href="https://lumitum.com"
              target="_blank"
              className="px-8 py-3 text-lg font-semibold hover:underline border rounded border-gray-800 hover:text-gray-600 hover:border-gray-600"
            >
              Lumitum Oy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
