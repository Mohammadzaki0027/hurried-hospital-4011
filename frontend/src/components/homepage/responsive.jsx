import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import { NearByData } from "./nearby";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Box className={className} right='0' onClick={onClick}>
      {/* <Button color="black"> {" > "} </Button> */}
    </Box>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Box className={className} zIndex='7' left='0' onClick={onClick}>
      {/* <Button color="black">{" < "}</Button> */}
    </Box>
  );
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint:768,
          settings: {
            slidesToShow: 3.5,
            slidesToScroll: 2          
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          {NearByData.map((i)=>(
          <Box key={i.city} border="1px solid #c5c7ce" borderRadius=".7rem" >
            <Stack>
              <Image borderTopRadius='.6rem' src={i.img}/>
              <Text pl='.4rem' fontSize=".9rem" fontWeight="600" lineHeight="3">{i.city}</Text>
              <Text pl='.4rem' pb='.3rem' fontSize=".65rem" lineHeight="3" >{i.km}</Text>
            </Stack>
          </Box>
          ))}
        </Slider>
      </div>
    );
  }
}
