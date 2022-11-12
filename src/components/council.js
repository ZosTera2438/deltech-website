import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Carousel} from '3d-react-carousal';
export default class Council extends Component {
  render() {
    var councilList=[
        {name:"Ishpreet.png",desi:'External affairs'},{name:"Kushi.png",desi:'Internal Affairs'},{name:"Lakshay.jpg",desi:'Public Relations'},{name:"Nilesh.jpg",desi:'Operations'},{name:"RahulSingh.jpg",desi:'Corporate Affairs'},{name:"RitikaRai.jpg",desi:'Publicity'},{name:"Saksham.jpg",desi:'Finance'},{name:"Sankalp.jpg",desi:'MUN'},{name:"Shruti.jpg",desi:'Social & Outreach'},{name:"Siddharth.jpg",desi:'Debating'},{name:"Tushar.jpg"
,desi:'Research & Policy'},{name:"Rtanjay.jpg",desi:'Administrative Affairs'}];
    
    var councilcc= councilList.map(item => <div class="flex justify-center text-center py-10 px-5">
    <div class="rounded-2xl shadow-lg bg-white outline outline-2 outline-black shadow-black py-5 max-w-sm px-3" >
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-t-lg h-60 object-cover w-96" src={`/images/Council/${item.name}`} alt=""/>
      </a>
      <div class="p-6">
        <h5 class="text-black text-xl font-bold mb-2">{item.name.slice(0,-4)}</h5>
        <p class="text-grey-700 text-base mb-4">
          {`Director, ${item.desi}`}
        </p>
      
      </div>
    </div>
  </div>)
    var settings = {
      infinite: true,
      slidesToShow: 3,
      focusOnSelect: true,
      autoplay: true,
      slidesToScroll: 1,
      speed: 5000,
      swipeToSlide: true,
      centerMode: true,
      pauseOnHover: true,
      autoplaySpeed: 3000,
      initialSlide:1,
      arrows:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            centerMode:false,
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            initialSlide:5,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerMode:false,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 5,
          }
        }
      ]
    };
    return (
      <div className="bg-cyan-800">
      <h1 className="xl:text-5xl text-3xl text-white font-extrabold text-center py-6 mx-auto">
            Senior Council
          </h1>
          <Carousel slides={councilcc} autoplay={true} interval={3000} arrows={true}/>
      </div>
    );
  }
}