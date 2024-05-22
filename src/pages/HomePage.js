import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './logo.png'; 
import Slider from 'react-slick';
import './HomePage.css';
import TeamMember from './TeamMember';


const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <main>
    <div style={{ width: '1200px', height: '400px', margin: '0 auto' }}>
      <h2>Це головна сторінка</h2>
      <Slider {...settings}>
        <div>
          <img src={logo} alt="Slide 1" />
        </div>
        <div>
          <img src={logo} alt="Slide 2" />
        </div>
        <div>
          <img src={logo} alt="Slide 3" />
        </div>
      </Slider>

      <div style={{ marginTop: '80px' }}>
        <h2 style={{color: '#f2f2f2', lineHeight: '50px', fontSize: '40px', display: 'flex', justifyContent: 'center'}}>Наша Команда</h2>
        <TeamMember image="https://via.placeholder.com/150" text="Текст для первого члена команды" />
        <TeamMember image="https://via.placeholder.com/150" text="Текст для второго члена команды" reverse />
        <TeamMember image="https://via.placeholder.com/150" text="Текст для третьего члена команды" />
        <TeamMember image="https://via.placeholder.com/150" text="Текст для четвертого члена команды" reverse />
      </div>
    </div>
    </main>
  );
};

export default HomePage;
