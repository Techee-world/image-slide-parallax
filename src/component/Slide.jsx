import React, { useState, useEffect } from "react";

function Slide() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg",
      title: "this is included slider and parallax effect",
    },
    {
      url: "https://cdn.pixabay.com/photo/2013/08/28/00/54/field-176602_1280.jpg",
      title: "this is included slider and parallax effect",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_1280.jpg",
      title: "this is included slider and parallax effect",
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/11/09/08/08/forest-3804001_1280.jpg",
      title: "this is included slider and parallax effect",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoSlide = true;
  const autoSlideInterval = 3000;

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, currentIndex]);

  return (
    <div className="max-w-full   w-full  relative group  leading-loose">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${slides[currentIndex].url})`,
        }}
        className="w-full md:h-[90vh] h-[50vh]  bg-center bg-cover duration-500 "
      >
        <div className="flex flex-col md:pl-16 p-4 md:p-10  md:pt-20 ">
          <div>
            <h1 className="md:text-5xl text-3xl 2xl:text-7xl  pt-6 md:pt-0 font-medium text-white md:w-1/2 mb-3 md:mb-6 uppercase">
              {slides[currentIndex].title}
            </h1>
            <p className="md:w-3/4 w-full 2xl:w-1/3 2xl:text-2xl  text-white md:text-xl text-sm mb-3 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reprehenderit provident magnam quaerat inventore illum placeat. Illo recusandae magnam expedita?
            </p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute z-[1] hover:bg-gray-300 duration-500 2xl:right-80 md:right-48 right-[15%] md:bottom-[15%] bottom-[0%] flex h-8 w-8 md:h-10 md:w-10 2xl:h-16 2xl:w-16 -translate-y-1/2 items-center justify-center rounded-full bg-red-800 shadow-md"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute z-[1] 2xl:right-56 md:right-36 right-[4%] 2xl:h-16 2xl:w-16  md:bottom-[15%] bottom-[0%] flex h-8 w-8 md:h-10 md:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-red-800 hover:bg-gray-300 duration-500 shadow-md"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex top-4 justify-center ">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
          
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
