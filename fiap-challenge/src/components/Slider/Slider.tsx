import { useState } from 'react';
import { SliderContainer, Slide, Next, Prev } from './Slider.styled';

const images = [
  'https://via.placeholder.com/800x300?text=Slide+1',
  'https://via.placeholder.com/800x300?text=Slide+2',
  'https://via.placeholder.com/800x300?text=Slide+3',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <SliderContainer>
      <Prev onClick={prevSlide}>&#10094;</Prev>
      {images.map((image, index) => (
        <Slide key={index} active={index === current}>
          <img src={image} alt="Slider Image" />
        </Slide>
      ))}
      <Next onClick={nextSlide}>&#10095;</Next>
    </SliderContainer>
  );
};

export default Slider;
