import React from "react";

const Header = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-0 py-12 sm:py-16 md:py-20 bg-white">
      <div className="flex flex-col lg:flex-row bg-[#403E3B] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:h-100">
        {/* Левая колонка - текст */}
        <div className="lg:w-1/2 py-8 sm:py-10 md:py-12 lg:py-0 lg:mt-20">
          <div className="px-4 sm:px-6 md:px-8 lg:ml-85">
            {/* Заголовок */}
            <h1 className="text-[#ECE7E4] text-[14px] sm:text-[14px] md:text-[14px] font-normal mb-2">
              PRIOR CLIENTS
            </h1>

            {/* Подзаголовок */}
            <p className="text-[#ECE7E4] text-[24px] sm:text-[28px] md:text-[32px] font-normal mb-4 sm:mb-5 md:mb-6">
              Happy customers.
            </p>

            {/* Описание */}
            <span className="text-[#ECE7E4] text-[14px] sm:text-[15px] md:text-[16px] block">
              Morbi neque ex, condimentum dapibus congue et, vulputate ut
              ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et
              nisi ultrices, ut faucibus orci tincidunt.
            </span>
          </div>
        </div>

        {/* Правая колонка - 4 картинки (2×2) */}
        <div className="lg:w-1/2 py-8 sm:py-10 md:py-12 lg:py-0 lg:mt-20 lg:ml-35">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
            {/* Верхний ряд */}
            <div className="flex items-center justify-center p-2 sm:p-3 md:p-4">
              <img
                src="/assets/IMAGE (7).svg"
                alt="Hill Playes"
                className="w-24 sm:w-28 md:w-32 lg:w-[128px] h-auto"
              />
            </div>

            <div className="flex items-center justify-center p-2 sm:p-3 md:p-4">
              <img
                src="/assets/IMAGE (8).svg"
                alt="RIKSGRÄNSEN"
                className="w-24 sm:w-28 md:w-32 lg:w-[128px] h-auto"
              />
            </div>

            {/* Нижний ряд */}
            <div className="flex items-center justify-center p-2 sm:p-3 md:p-4">
              <img
                src="/assets/IMAGE (9).svg"
                alt="Studio Cai"
                className="w-24 sm:w-28 md:w-32 lg:w-[128px] h-auto"
              />
            </div>

            <div className="flex items-center justify-center p-2 sm:p-3 md:p-4">
              <img
                src="/assets/IMAGE (10).svg"
                alt="Chill Industries"
                className="w-24 sm:w-28 md:w-32 lg:w-[128px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Новый блок с изображением "The swirling staircase" */}
      <div className="mt-8 sm:mt-10 md:mt-12 relative">
        {/* Изображение во всю ширину */}
        <div className="w-full">
          <img
            src="/assets/Frame (17).svg"
            alt="The swirling staircase"
            className="w-full h-auto"
          />
        </div>

        {/* Текст поверх изображения */}
        <div className="absolute top-0 left-0 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="bg-white/80 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded">
            <h2 className="text-[#403E3B] text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-normal mb-2 sm:mb-3 md:mb-4">
              The swirling staircase
            </h2>
            <p className="text-[#645C55] text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px]">
              Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      {/* Блок Featured projects */}
      <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/3 lg:ml-85">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[39px]">
              Featured projects
            </h1>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] mt-2">
              Some of the latest and greatest projects from us{" "}
              <br className="hidden sm:block" /> here at Wishbone+Partners.
            </p>
          </div>
          <div className="lg:w-1/3 mt-4 lg:mt-0 lg:ml-35 flex items-end">
            {/* Кнопка View all projects будет ниже в центре */}
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:ml-85">
          {/* Картинка 1 */}
          <div>
            <img
              src="/assets/Frame (18).svg"
              alt="Project 1"
              className="w-full h-auto"
            />
          </div>

          {/* Картинка 2 с текстом и кнопкой */}
          <div className="relative">
            <img
              src="/assets/Frame (19).svg"
              alt="Big Road Brewery"
              className="w-full h-auto"
            />
            {/* Текст поверх изображения */}
            <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8">
              <h3 className="text-[#645C55] text-[12px] sm:text-[13px] md:text-[14px] font-normal">
                New York
              </h3>
              <p className="text-[#403E3B] text-[16px] sm:text-[19px] md:text-[21px] lg:text-[23px] font-normal mt-1">
                Big Road Brewery
              </p>
            </div>
            {/* Кнопка Read More */}
            <button className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 bg-black text-white px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] hover:bg-gray-800 transition-colors rounded-2xl">
              Read More
            </button>
          </div>

          {/* Картинка 3 */}
          <div>
            <img
              src="/assets/Frame (20).svg"
              alt="Project 3"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Кнопка View all projects - по центру */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <button className="text-black text-[14px] sm:text-[15px] md:text-[16px] hover:text-gray-700 transition-colors border-b border-black pb-1 hover:border-gray-700">
            View all projects
          </button>
        </div>
      </div>

      {/* Блок Meet our team */}
      <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row">
          {/* Левая часть - заголовок и описание */}
          <div className="lg:w-2/3">
            <div className="lg:ml-85">
              <h1 className="text-black text-[24px] sm:text-[28px] md:text-[32px] lg:text-[39px] font-normal mb-2">
                Meet our team
              </h1>
              <p className="text-[#403E3B] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis.
              </p>
              <button className="text-black text-[14px] sm:text-[15px] md:text-[16px] hover:text-gray-700 transition-colors border-b border-black pb-1 hover:border-gray-700">
                See team
              </button>
            </div>
          </div>

          {/* Правая часть - команда (2 колонны на десктопе) */}
          <div className="lg:w-2/3 mt-8 lg:mt-0 lg:ml-35">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Первая колонна */}
              <div className="flex-1">
                <div className="space-y-6 sm:space-y-8">
                  {/* Stephen Collier */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      {/* Замените на ваше изображение */}
                      <img
                        src="/assets/IMAGE (3).svg"
                        alt="Stephen Collier"
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-normal">
                        Stephen Collier
                      </h3>
                      <p className="text-[#645C55] text-[12px] sm:text-[13px] lg:text-[14px] mt-1">
                        Senior Partner
                      </p>
                    </div>
                  </div>

                  {/* Ferris Wonder */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      {/* Замените на ваше изображение */}
                      <img
                        src="/assets/IMAGE (11).svg"
                        alt="Ferris Wonder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-normal">
                        Ferris Wonder
                      </h3>
                      <p className="text-[#645C55] text-[12px] sm:text-[13px] lg:text-[14px] mt-1">
                        Associate Partner
                      </p>
                    </div>
                  </div>

                  {/* Niko Ferry */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      {/* Замените на ваше изображение */}
                      <img
                        src="/assets/IMAGE (12).svg"
                        alt="Ferris Wonder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-normal">
                        Niko Ferry
                      </h3>
                      <p className="text-[#645C55] text-[12px] sm:text-[13px] lg:text-[14px] mt-1">
                        Partner
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Вторая колонна */}
              <div className="flex-1">
                <div className="space-y-6 sm:space-y-8">
                  {/* Nolan Peters */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      {/* Замените на ваше изображение */}
                      <img
                        src="/assets/IMAGE (13).svg"
                        alt="Ferris Wonder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-normal">
                        Nolan Peters
                      </h3>
                      <p className="text-[#645C55] text-[12px] sm:text-[13px] lg:text-[14px] mt-1">
                        Associate
                      </p>
                    </div>
                  </div>

                  {/* Aria Stone */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                      {/* Замените на ваше изображение */}
                      <img
                        src="/assets/IMAGE (14).svg"
                        alt="Ferris Wonder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-normal">
                        Aria Stone
                      </h3>
                      <p className="text-[#645C55] text-[12px] sm:text-[13px] lg:text-[14px] mt-1">
                        Senior Partner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Разделительная линия для мобильных */}
      <div className="block lg:hidden h-px bg-gray-300 my-8 sm:my-10 md:my-12 mx-4 sm:mx-6 md:mx-8"></div>

      <div className="bg-[#CEC4BC] py-12 sm:py-16 md:py-20 lg:py-30">
        <div className="px-4 sm:px-6 md:px-8 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Текст слева */}
            <div className="lg:pl-85">
              <h1 className="text-[#645C55] text-[14px] sm:text-[14px] md:text-[14px] font-normal mb-2">
                Get in touch
              </h1>
              <p className="text-black text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-normal">
                Think we would be a good fit <br className="hidden sm:block" />
                for your next project?
              </p>
            </div>

            {/* Кнопка справа */}
            <div className="mt-6 lg:mt-0 lg:pr-15 lg:right-20">
              <button className="text-black px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 text-[14px] sm:text-[15px] md:text-[16px] hover:bg-gray-200 transition-colors rounded">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
