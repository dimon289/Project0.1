import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './logo.png'; 
import Slider from 'react-slick';
import './HomePage.css';
import TeamMember from './TeamMember';
import Illa_V from "../HISOKA/hisoka_illa1.jpg"
import jullia from "../HISOKA/juliannnnnnnnnnnnnnnnna.jpg"
import Illa_T from "../HISOKA/hisoka_illa2.jpg"
import da from "../HISOKA/da.jpg"
import team from "../HISOKA/dream_team.jpg"


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
          <img src={team} alt="Slide 2" />
        </div>
        <div>
          <img src={logo} alt="Slide 3" />
        </div>
      </Slider>

      <div style={{ marginTop: '80px' }}>
        <h2 style={{color: '#f2f2f2', lineHeight: '50px', fontSize: '40px', display: 'flex', justifyContent: 'center'}}>Наша Команда</h2>
        <TeamMember image={Illa_V} text="Ілля Вакуленко" />
        <TeamMember image={Illa_T} text="Ілля Ткаченко" reverse />
        <TeamMember image={jullia} text="Компанієць Юліанна" />
        <TeamMember image={da} text="Дмитро Ткаченко" reverse />
      </div>
    </div>
    </main>
  );
};

export default HomePage;
