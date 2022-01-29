import React from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider(props) {
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
     };
    return (
      <Coarosal {...settings}>
        <Wrap>
          <img src="/images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/slider-badging.jpg" />
        </Wrap>
        <Wrap>
          <img src="/images/slider-badging.jpg" />
        </Wrap>
      </Coarosal>
    );
}

export default ImageSlider;

const Coarosal = styled(Slider)`
  margin-top: 25px;
  ul li button {
    &:before {
      color: rgb(150,158,171);
      font-size:10px;
    }
  }
  li.slick-active button:before{
      color:white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index:1;
  }
`;
const Wrap = styled.div`
  img {
    height: 100%;
    width: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    transition-duration: 250ms;
    box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
      rgba(0 0 0 / 73%) 0px 16px 10px -10px;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;