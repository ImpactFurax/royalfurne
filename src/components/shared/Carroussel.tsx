import React, { useEffect, useState } from 'react'

interface CarrousselProps {
  slides: {
    url: string
    title?: string
  }[];
}

const Carroussel: React.FC<CarrousselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, slides]);

  return (
    <div className="w-full h-screen m-auto relative group flex items-center justify-center">
      <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className={`w-full h-full bg-cover bg-center duration-500 absolute`} />
      {slides[currentIndex].title &&
        <div className='bg-color2/75 w-full py-10 z-[5] flex items-center justify-center'>
          <h2 className='font-cinzel text-3xl font-bold duration-500'>{slides[currentIndex].title}</h2>
        </div>}
    </div>
  );
}

export default Carroussel