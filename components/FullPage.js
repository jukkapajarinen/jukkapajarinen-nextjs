import React from 'react';

const FullPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="p-6 space-y-8 pb-20 lg:pb-80">
        <header className="container flex items-center justify-between p-8 mx-auto rounded bg-white">
          <a className="font-bold text-lg" rel="noopener noreferrer" href="#" aria-label="Homepage">Jukka Pajarinen</a>
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
            <button className="px-4 py-2 rounded-md bg-teal-600 text-gray-50">Lataa CV</button>
          </div>
          <button className="flex items-center justify-center p-2 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-900">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </header>
        <main>
          <div className="container mx-auto space-y-16">
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
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-teal-600 text-gray-50">Lähetä sähköpostia</a>
                    <a rel="noopener noreferrer" href="https://lumitum.com" target="_blank" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Lumitum Oy</a>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                  <img src="https://www.jukkapajarinen.com/images/jukkapajarinen.png" alt="Jukka Pajarinen Profile Picture" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
              </div>
            </section>
            <section className="bg-gray-100 text-gray-800">
              <span className="block mb-2 text-sm font-medium tracki uppercase lg:text-center text-teal-600">Työ ja koulutushistoria</span>
              <h2 className="text-5xl font-bold lg:text-center text-gray-900">Ansioluettelo</h2>

              <div className="mt-16 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-600 text-gray-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <svg className="scale-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentColor)" d="M440,368a24.028,24.028,0,0,0,24-24V104a24.028,24.028,0,0,0-24-24H72a24.028,24.028,0,0,0-24,24V344a24.028,24.028,0,0,0,24,24ZM80,112H432V336H80Z" className="ci-primary"/>
                        <rect width="480" height="32" x="16" y="400" fill="var(--ci-primary-color, currentColor)" className="ci-primary"/>
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded bg-white p-8">
                        <div className="flex items-center justify-between space-x-2 mb-4">
                            <div className="font-bold text-gray-800">Projekti X</div>
                            <time className="font-bold text-teal-600">08/06/2023</time>
                        </div>
                        <ul className="text-gray-700 pl-5 list-disc mb-4">
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                        </ul>
                        <div className='flex flex-wrap text-gray-700'>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-600 text-gray-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg className="scale-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="var(--ci-primary-color, currentColor)" d="M440,368a24.028,24.028,0,0,0,24-24V104a24.028,24.028,0,0,0-24-24H72a24.028,24.028,0,0,0-24,24V344a24.028,24.028,0,0,0,24,24ZM80,112H432V336H80Z" className="ci-primary"/>
                        <rect width="480" height="32" x="16" y="400" fill="var(--ci-primary-color, currentColor)" className="ci-primary"/>
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded bg-white p-8">
                    <div className="flex items-center justify-between space-x-2 mb-4">
                            <div className="font-bold text-gray-800">Projekti X</div>
                            <time className="font-bold text-teal-600">08/06/2023</time>
                        </div>
                        <ul className="text-gray-700 pl-5 list-disc mb-4">
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                        </ul>
                        <div className='flex flex-wrap text-gray-700'>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-600 text-gray-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg className="scale-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <polygon fill="var(--ci-primary-color, currentColor)" points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643" className="ci-primary"/>
                        <path fill="var(--ci-primary-color, currentColor)" d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z" className="ci-primary"/>
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded bg-white p-8">
                    <div className="flex items-center justify-between space-x-2 mb-4">
                            <div className="font-bold text-gray-800">Projekti X</div>
                            <time className="font-bold text-teal-600">08/06/2023</time>
                        </div>
                        <ul className="text-gray-700 pl-5 list-disc mb-4">
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                        </ul>
                        <div className='flex flex-wrap text-gray-700'>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-teal-600 text-gray-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <svg className="scale-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <polygon fill="var(--ci-primary-color, currentColor)" points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643" className="ci-primary"/>
                        <path fill="var(--ci-primary-color, currentColor)" d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z" className="ci-primary"/>
                      </svg>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] rounded bg-white p-8">
                    <div className="flex items-center justify-between space-x-2 mb-4">
                            <div className="font-bold text-gray-800">Projekti X</div>
                            <time className="font-bold text-teal-600">08/06/2023</time>
                        </div>
                        <ul className="text-gray-700 pl-5 list-disc mb-4">
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                          <li>Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum morbi blandit cursus risus.</li>
                        </ul>
                        <div className='flex flex-wrap text-gray-700'>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                          <span class="bg-gray-200 text-gray-700 text-xs font-medium m-1 px-2 py-1 rounded">Default</span>
                        </div>
                    </div>
                </div>

              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FullPage;
