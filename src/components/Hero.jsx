import React from "react";

const Hero = () => {
  return (
    <div className="text-black bg-[#ECE7E4]">
      {/* Основной контент */}
      <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Левая часть с текстом */}
        <div className="lg:ml-10 w-full lg:w-1/2 pt-6 sm:pt-8 md:pt-10 lg:pt-0">
          <h1 className="text-[12px] sm:text-[13px] md:text-[14px] text-[#645C55] mt-8 sm:mt-10 lg:mt-30 leading-[1.2]">
            Wishbone+Partners
          </h1>

          <p className="mt-2 sm:mt-3 md:mt-2.5 text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-black leading-[70.4px]">
            The home of <br />
            beautiful <br />
            architecture.
          </p>

          <span className="text-[14px] sm:text-[15px] md:text-[16px] text-[#403E3B] block mt-4 sm:mt-5 md:mt-6">
            We are an architecture firm with a focus on beautiful but{" "}
            <br className="hidden sm:block" />
            functional design. At its heart, we believe design is about{" "}
            <br className="hidden sm:block" />
            usability and accessibility — these are the guiding principles for{" "}
            <br className="hidden sm:block" />
            our work. Read more about our previous projects, our process{" "}
            <br className="hidden sm:block" />
            and our team below.
          </span>

          {/* Кнопка Read More с отступом 30px */}
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-10">
            <button className="text-[14px] sm:text-[15px] md:text-[16px] text-black hover:text-gray-700 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Правая часть с изображением */}
        <div className="lg:ml-24 xl:ml-32 w-full lg:w-1/2 mt-8 sm:mt-10 md:mt-12 lg:mt-0">
          <img
            src="src/assets/IMAGE (2).svg"
            alt="Architecture"
            className="w-full h-auto max-w-full"
          />
        </div>
      </div>

      {/* Блок "Our firm" в самом низу */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-10 mt-8 sm:mt-10 md:mt-12 lg:mt-16 bg-white">
        <div className="flex flex-col lg:flex-row">
          {/* Заголовок слева */}
          <div className="lg:w-1/3">
            <div className="text-[24px] sm:text-[28px] md:text-[32px] text-black font-normal lg:ml-85">
              <h1>Our firm</h1>
            </div>
          </div>

          {/* Текст справа */}
          <div className="lg:w-2/3 mt-6 lg:mt-0 lg:ml-35">
            <div className="text-[#403E3B] text-[14px] sm:text-[15px] md:text-[16px] space-y-4 md:space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <br className="hidden sm:block" />
                Suspendisse varius enim in eros elementum tristique. Duis{" "}
                <br className="hidden sm:block" />
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut{" "}
                <br className="hidden sm:block" />
                commodo diam libero vitae erat. Aenean faucibus nibh et{" "}
                <br className="hidden sm:block" /> justo cursus id rutrum lorem
                imperdiet. Nunc ut sem vitae <br className="hidden sm:block" />{" "}
                risus tristique posuere.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <br className="hidden sm:block" />
                Suspendisse varius enim in eros elementum tristique. Duis{" "}
                <br className="hidden sm:block" />
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut{" "}
                <br className="hidden sm:block" />
                commodo diam libero vitae erat. Aenean faucibus nibh et{" "}
                <br className="hidden sm:block" /> justo cursus id rutrum lorem
                imperdiet. Nunc ut sem vitae <br className="hidden sm:block" />{" "}
                risus tristique posuere.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <br className="hidden sm:block" />
                Suspendisse varius enim in eros elementum tristique. Duis{" "}
                <br className="hidden sm:block" />
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut{" "}
                <br className="hidden sm:block" />
                commodo diam libero vitae erat. Aenean faucibus nibh et{" "}
                <br className="hidden sm:block" /> justo cursus id rutrum lorem
                imperdiet. Nunc ut sem vitae <br className="hidden sm:block" />{" "}
                risus tristique posuere.
              </p>
            </div>
            <div className="flex mt-8 sm:mt-10 flex-col sm:flex-row sm:items-center">
              <img
                src="src/assets/IMAGE (3).svg"
                alt="Stephen Collier"
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-auto lg:h-auto"
              />
              <div className="flex flex-col mt-4 sm:mt-0 sm:ml-4 lg:ml-10">
                <p className="text-[16px] sm:text-[18px] font-medium">
                  Stephen Collier
                </p>
                <span className="text-[14px] sm:text-[16px] text-[#645C55]">
                  Senior Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Новый блок с изображением "Reeding House" во всю ширину с текстом поверх */}
      <div className="mt-8 sm:mt-10 md:mt-12 relative">
        {/* Изображение во всю ширину */}
        <div className="w-full">
          <img
            src="src/assets/Frame (15).svg"
            alt="Reeding House"
            className="w-full h-auto"
          />
        </div>

        {/* Текст поверх изображения в правой части */}
        <div className="absolute top-0 right-0 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-md backdrop-blur-sm p-6 sm:p-8">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-[#403E3B] font-normal mb-4">
              Reeding House
            </h2>
            <p className="text-[#645C55] text-[14px] sm:text-[15px] md:text-[16px]">
              Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="flex-col text-center">
          <h1 className="text-[#645C55] text-[14px] sm:text-[14px] md:text-[14px]">
            Our process
          </h1>
          <p className="text-black text-[28px] sm:text-[34px] md:text-[39px] mt-2">
            How we do what we do.
          </p>
        </div>

        {/* 3 колонки с изображениями сверху */}
        <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {/* Колонка 1: Sketching */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img
                src="src/assets/IMAGE (4).svg"
                alt="Sketching Process"
                className="w-[117px] h-[102px] mx-auto"
              />
            </div>
            <h3 className="text-black text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mb-3">
              Sketching
            </h3>
            <p className="text-[#403E3B] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] leading-relaxed text-left">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Nulla ut <br />
              tristique libero. Nulla luctus sapien ac <br /> arcu tempor, vitae
              tempor leo iaculis.
            </p>
          </div>

          {/* Колонка 2: Finalizing */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img
                src="src/assets/IMAGE (5).svg"
                alt="Finalizing Process"
                className="w-[117px] h-[102px] mx-auto"
              />
            </div>
            <h3 className="text-black text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mb-3">
              Finalizing
            </h3>
            <p className="text-[#403E3B] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] leading-relaxed text-left">
              Adipiscing elit. Nulla ut tristique <br /> libero. Nulla vitae
              tempor leo iaculis <br /> luctus sapien ac arcu tempor, vitae.
            </p>
          </div>

          {/* Колонка 3: Building */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-4">
              <img
                src="src/assets/IMAGE (6).svg"
                alt="Building Process"
                className="w-[117px] h-[102px] mx-auto"
              />
            </div>
            <h3 className="text-black text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mb-3">
              Building
            </h3>
            <p className="text-[#403E3B] text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] leading-relaxed text-left">
              Nulla ut tristique libero. Lorem <br />
              ipsum ut tristique libero. Nulla <br />
              luctus sapien ac arcu tempor, vitae <br /> lorem ipsum dolor leo
              iaculis.
            </p>
          </div>
        </div>
      </div>

      {/* Новый блок с изображением "The marble staircase" во всю ширину с текстом поверх */}
      <div className="mt-8 sm:mt-10 md:mt-12 relative">
        {/* Изображение во всю ширину */}
        <div className="w-full">
          <img
            src="src/assets/Frame (16).svg"
            alt="The marble staircase"
            className="w-full h-auto"
          />
        </div>

        {/* Текст поверх изображения в правой части */}
        <div className="absolute top-0 right-0 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-md backdrop-blur-sm p-6 sm:p-8">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] text-[#403E3B] font-normal mb-4">
              The marble staircase
            </h2>
            <p className="text-[#645C55] text-[14px] sm:text-[15px] md:text-[16px]">
              Lorem ipsum dolor sit amet, dolor sit amet dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
