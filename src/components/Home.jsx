import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/img1.jpg';
import image2 from './images/img2.jpg';
import image3 from './images/img3.jpg';
import image4 from './images/img4.jpg';
import image5 from './images/img5.jpg';



const CustomNextButton = ({ onClick }) => (
    <button onClick={onClick} className="custom-next-button" >
      &gt;
    </button>
  );
  
  const CustomPrevButton = ({ onClick}) => (
    <button onClick={onClick} className="custom-prev-button" >
      &lt;
    </button>
  );
export default function Home() {
    return (
        <div className= "Image-carousel">
            <AliceCarousel 
                autoPlay 
                autoPlayInterval={3000}
                disableButtonsControls={false}
                infinite={true}
                renderPrevButton={({ onClick }) => <CustomPrevButton onClick={onClick} />}
                renderNextButton={({ onClick }) => <CustomNextButton onClick={onClick} />}
            >
                <img src={image1} className="sliderimg" alt=""/>
                <img src={image2} className="sliderimg" alt=""/>
                <img src={image3} className="sliderimg" alt=""/>
                <img src={image4} className="sliderimg" alt=""/>
                <img src={image5} className="sliderimg" alt=""/>
            </AliceCarousel>
        </div>
    );
}