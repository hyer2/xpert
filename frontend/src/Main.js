"use client";

import React, { useEffect, useState, useRef } from "react";
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "./index.css";
import "./style.css";
import infoImage from "./icons/info.png";
import videoImage from "./icons/video.png";
import mcImage from "./icons/mcdonalds.png";
import likeImage from "./icons/like.png";
import eyeImage from "./icons/eye.png";
import logoImage from "./img/logo.png";
import bannerImage from "./img/banner.png";
import reviewImage1 from "./img/usercomment1.png";
import reviewImage2 from "./img/usercomment2.png";
import blogImage from "./img/blog.png";
import bgImage from "./icons/sub-bg.jpg";
import Shop from "./shop";
import Traffic from "./traffic";
import Banking from "./banking";
import Utility from "./utility";
import imageVariables from "./imagevariables";
import Detail from "./detail";
import Contact from "./contact";
import Total from "./total";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const dataModule = require("./data");
const allData = dataModule.allData;
const mainItems = dataModule.mainItems;

function Init() {
  return (
    <div>
      <HeaderComp />
      <MainComp />
      <Slider />
    </div>
  );
}

function Slider() {
  const images = [reviewImage1, reviewImage2, reviewImage1];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="SliderWrapper">
      <div className="Comment w-100 h-96 relative pb-100 text-center mt-12">
        <div className="titleText absolute left-10 top-0 inset-x-0 text-center">
          <span
            className="text-white right-2 bottom-1 bg-blue-500 rounded-lg bg-opacity-80 font-bold text-xl p-2"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              borderRadius: "10px",
            }}
          >
            실제 이용 후기로 보는 Xpert
          </span>
        </div>
        <div className="reviewImagesContainer w-full h-96 relative pb-100 flex mx-auto max-w-screen-xl">
          <div className="reviewImages w-full h-96 relative pb-100 flex mx-auto max-w-screen-xl mt-20">
            <Carousel
              selectedItem={currentIndex}
              interval={10000}
              autoPlay
              infiniteLoop
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              swipeable
              emulateTouch
              stopOnHover={false}
              transitionTime={1000}
              swipeScrollTolerance={5}
              swipeableProps={{ delta: 40 }}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Review ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            <div className="carouselButtons">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`carouselButton ${
                    currentIndex === index ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainComp() {
  return (
    <div>
      <div class="p-8 flex flex-col items-center justify-center">
        <div class="mb-10"></div>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          TOP5 Rankings
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          최근 일주일간 검색이 가장 많이 된 매장 목록입니다.
        </p>
        <div
          class="p-10 rounded-xl"
          style={{ backgroundColor: "rgba(219, 234, 254, 0.3)" }}
        >
          <div class="grid grid-cols-1 gap-4 lg:gap-8 flex items-center">
            <Contents />
          </div>
        </div>
      </div>
    </div>
  );
}
function Contents() {
  const [likeCount, setLikeCount] = useState(0);
  const ranking = 0;

  const increaseLikes = () => {
    setLikeCount(likeCount + 1);
  };

  const StarIcon = ({ colorClass }) => (
    <svg
      className={`w-4 h-4 ${colorClass}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"></path>
    </svg>
  );

  const RatingComponent = ({ level }) => {
    return (
      <div class="flex items-center justify-center">
        <div className="flex items-center space-x-1">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <StarIcon
                key={index}
                colorClass={index < level ? "text-yellow-300" : "text-gray-300"}
              />
            ))}
        </div>
        <div className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {level}
        </div>
      </div>
    );
  };

  return (
    <div>
      {mainItems.map((data, index) => (
        <div key={index} class="bg-white rounded-lg m-5">
          <div className="w-full h-auto lg:w-[1016px] lg:h-[139px] relative shadow flex items-center">
            <h1 class="w-[10%] justify-center items-center text-center text-gray-500 text-2xl lg:text-5xl font-bold">
              {index + 1}
            </h1>
            <div class="w-[20%] justify-center items-center rounded-lg">
              <img src={imageVariables[data.image]} alt={data.name} />
            </div>

            <div class="w-[70%] h-full">
              <div class="h-[70%] flex justify-between items-center mr-10">
                <div class="flex items-center">
                  <div class="ml-5 justify-center items-center text-center text-blue-800 font-extrabold text-[10px] lg:text-sm">
                    {data.category}
                  </div>
                  <div class="ml-2 lg:ml-5 text-center text-black text-sm lg:text-xl font-semibold">
                    {data.name}
                    <div class="flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700 ml-5 hidden lg:inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="-ms-1 me-1.5 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <p class="whitespace-nowrap text-sm">
                        {data.subcategory}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="flex items-center">
                  <button class="m-3 lg:m-0 w-full h-full bg-blue-300 rounded-lg hover:bg-blue-700">
                    <a
                      href={`/detail?&name=${data.name}&category=${data.category}&subcategory=${data.subcategory}&level=${data.level}&image=${data.image}`}
                    >
                      <div class="items-center justify-center">
                        <img src={infoImage} alt="Info Icon" />
                      </div>
                    </a>
                  </button>
                </div>
              </div>

              <div class="w-[95%] border border-zinc-300 hidden lg:flex"></div>

              <div class="h-[20%] flex justify-between items-center mr-10 mt-1 hidden lg:flex">
                <div class="flex items-center">
                  {/* <div class="items-center text-center text-blue-800 font-semibold text-[10px] lg:text-sm mr-2">
                    {data.level}
                  </div> */}

                  <RatingComponent level={data.level} />
                </div>

                <div class="flex items-center">
                  <div className="text-center text-stone-500 text-[15px] font-medium mr-2">
                    <img
                      src={likeImage}
                      onClick={increaseLikes}
                      style={{ cursor: "pointer" }}
                      alt="Like"
                    />
                  </div>

                  <div className="text-center text-stone-500 text-[15px] font-medium mr-5">
                    {likeCount}개
                  </div>

                  <div class="text-center text-stone-500 text-[15px] font-medium mr-2">
                    <img src={eyeImage} />
                  </div>

                  <div class="text-center text-stone-500 text-[15px] font-medium">
                    {data.view}회
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function HeaderComp() {
  return (
    <div>
      <section
        style={{
          background: `linear-gradient(
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.6) 75%,
            rgba(255, 255, 255, 1) 100%
          ), url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // backgroundImage: `url(${bgImage})`,
          // backgroundSize: "100% auto",
          // width: "100%",
          // height: "450px",
        }}
        className="mt-10 w-full h-[550px]"
        // bg-center bg-no-repeat bg-cover bg-blend-multiply
      >
        <div class="h-[20px]"></div>
        <div class="text-center px-3 lg:px-10 p-20">
          <h1 class="my-4 text-3xl md:text-4xl lg:text-6xl text-white font-extrabold leading-tight pb-5">
            Xpert
          </h1>
          <p class="leading-normal text-white opacity-80% text-base md:text-2xl lg:text-4xl mb-8 font-extrabold">
            Guide for X-Generation
          </p>
          <p class="custom-paragraph text-white opacity-80% text-base md:text-[15px] lg:text-[15px] font-medium">
            Xpert는 디지털 기기 조작을 어려워하는 중장년층분들을 위해 디지털
            기기 사용법을 알려주는 플랫폼, Xpert입니다.
            <br />
            Xpert는 매장 키오스크 사용법부터 교통앱, 모바일 뱅킹 앱, 유틸리티
            앱과 같은 다양한 디지털 서비스 사용법을 쉽고 친절하게 안내합니다.
          </p>
        </div>
      </section>
    </div>
  );
}

function Nav() {
  const [isShowNav, setNavOpen] = useState(false);

  const showNav = () => {
    setNavOpen(!isShowNav);
  };
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src={logoImage} className="h-8 mr-3" alt="Flowbite Logo" />
          </a>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={showNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-28 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/total"
                >
                  <span class="relative flex items-center justify-center">
                    전체
                  </span>
                </a>
              </li>

              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/shop"
                >
                  <span class="relative flex items-center justify-center">
                    매장 키오스크
                  </span>
                </a>
              </li>

              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/traffic"
                >
                  <span class="relative flex items-center justify-center">
                    교통 앱
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/banking"
                >
                  <span class="relative flex items-center justify-center">
                    모바일뱅킹 앱
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/utility"
                >
                  <span class="relative flex items-center justify-center">
                    유틸리티 앱
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/contact"
                >
                  <span class="relative flex items-center justify-center">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isShowNav && (
        <div
          id="NAV"
          className="fixed right-[0] top-[65px] bg-white divide-y divide-gray-100 shadow w-44 md:hidden"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="NAV-button"
          >
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a href="/shop">매장 키오스크</a>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a href="/traffic">교통 앱</a>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a href="/banking">모바일뱅킹 앱</a>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a href="/utility">유틸리티 앱</a>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <a href="/contact">Contact</a>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

function Search() {
  return (
    <div class="flex justify-center w-full">
      <div class="w-[300px] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[1000px]">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              placeholder="검색어를 입력하세요."
              required
            />

            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              검색
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/*
// https://wickedblocks.dev/groups/card/
// https://mambaui.com/components/weather
function Rankings() {
  return (
    <div>
      <div class="w-[1400px] h-[139px] relative">
        <div class="w-[1400px] h-[139px] left-0 top-0 absolute">
          <div class="w-[1400px] h-[139px] left-0 top-0 absolute bg-white shadow"></div>
          <div class="w-[1400px] h-[139px] left-0 top-0 absolute bg-white shadow"></div>
          <div class="w-[23px] h-[31.26px] left-[47px] top-[53.87px] absolute text-center text-violet-300 text-[40px] font-bold">
            1
          </div>
          <div class="w-[380px] h-[0px] left-[935px] top-[64.51px] absolute border border-zinc-300"></div>
          <div class="left-[1315px] top-[104px] absolute text-center text-black text-xl font-light">
            조회수
          </div>
        </div>
        <div class="w-[140px] h-[68px] left-[135px] top-[54px] absolute text-center text-black text-[40px] font-bold">
          사진
        </div>
        <div class="left-[132px] top-[10px] absolute text-center text-black text-xl font-light">
          매장별 키오스크
        </div>
        <div class="left-[913px] top-[100px] absolute text-center text-black text-xl font-light">
          도움 됐어요
        </div>
        <div class="left-[570px] top-[62px] absolute text-center text-black text-xl font-light">
          카드뉴스 미리보기
        </div>
        <div class="left-[351px] top-[61px] absolute text-center text-black text-xl font-light">
          앱 이름
        </div>
        <div class="left-[1067px] top-[100px] absolute text-center text-black text-xl font-light">
          도움 안됐어요
        </div>
      </div>
    </div>
  );
}
*/

function FooterComp() {
  return (
    <footer
      style={{
        marginTop: "200px",
        background: `linear-gradient(
        rgba(255, 255, 255, 1) 0%,
        
        rgba(255, 255, 255, 0) 100%
        ), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundImage: `url(${bgImage})`,
        // backgroundSize: "100% auto",
        // width: "100%",
        // height: "450px",
      }}
      className="mt-10 w-full"
    >
      <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <span className="flex justify-center text-white mt-20 footer-title text-2xl font-extrabold">
          Menu
        </span>
        <ul class="mt-4 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <a
              class="font-bold text-sm text-white transition link link-hover block mt-2"
              href="/total"
            >
              전체
            </a>
          </li>
          <li>
            <a
              class="font-bold text-sm text-white transition link link-hover block mt-2"
              href="/shop"
            >
              매장 키오스크
            </a>
          </li>

          <li>
            <a
              class="font-bold text-sm text-white transition link link-hover block mt-2"
              href="/traffic"
            >
              교통 앱
            </a>
          </li>

          <li>
            <a
              class="font-bold text-sm text-white transition link link-hover block mt-2"
              href="/banking"
            >
              모바일뱅킹 앱
            </a>
          </li>

          <li>
            <a
              class="font-bold text-sm text-white transition link link-hover block mt-2"
              href="/utility"
            >
              유틸리티 앱
            </a>
          </li>
          <li>
            <a
              class="font-bold text-sm text-white transition link link-hover block mt-2"
              href="/contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="flex justify-center text-white mt-8  footer-title text-2xl font-extrabold">
            Information
          </span>
          <div className="flex justify-center text-white mt-4 footer-title text-sm font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 23.5"
              width="17"
              height="17"
              style={{ transform: "translateY(0px)" }}
            >
              <path
                d="M24.537 17.0082L19.0682 14.8015C18.8346 14.7078 18.5749 14.688 18.3283 14.7452C18.0818 14.8024 17.8616 14.9335 17.701 15.1187L15.2791 17.9047C11.4781 16.2174 8.41919 13.3374 6.62706 9.75868L9.5861 7.47841C9.78321 7.32747 9.92272 7.12017 9.98352 6.8879C10.0443 6.65564 10.0231 6.41104 9.92302 6.19115L7.57923 1.04214C7.46942 0.80511 7.2752 0.611579 7.03007 0.494923C6.78494 0.378267 6.50426 0.345798 6.23643 0.403115L1.15822 1.50647C0.899996 1.56262 0.669609 1.69951 0.50466 1.8948C0.339711 2.0901 0.249941 2.33227 0.25 2.58179C0.25 14.3739 10.4015 23.9134 22.9066 23.9134C23.1717 23.9136 23.4291 23.8291 23.6366 23.6738C23.8441 23.5185 23.9896 23.3015 24.0492 23.0583L25.2211 18.2771C25.2816 18.0237 25.2464 17.7584 25.1215 17.5268C24.9967 17.2952 24.79 17.1118 24.537 17.0082Z"
                fill="white"
              />
            </svg>
            <div className="phonenum ml-2 relative text-white font-semibold">
              02-1234-1234
            </div>
          </div>
          <div className="flex justify-center mt-4 text-white footer-title text-sm font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 32"
              width="20"
              height="16"
            >
              <path
                d="M35.5938 0.913452H3.90625C1.88693 0.913452 0.25 2.64832 0.25 4.78845V28.0385C0.25 30.1786 1.88693 31.9135 3.90625 31.9135H35.5938C37.6131 31.9135 39.25 30.1786 39.25 28.0385V4.78845C39.25 2.64832 37.6131 0.913452 35.5938 0.913452ZM35.5938 4.78845V8.0826C33.8858 9.55664 31.163 11.8487 25.342 16.6795C24.0592 17.7489 21.5181 20.3181 19.75 20.2881C17.9822 20.3184 15.4403 17.7485 14.158 16.6795C8.33793 11.8494 5.6144 9.55688 3.90625 8.0826V4.78845H35.5938ZM3.90625 28.0385V13.055C5.65165 14.5283 8.12686 16.5959 11.8996 19.7269C13.5645 21.1158 16.4801 24.182 19.75 24.1634C23.0038 24.182 25.8825 21.1603 27.5997 19.7275C31.3724 16.5966 33.8483 14.5285 35.5938 13.055V28.0385H3.90625Z"
                fill="white"
              />
            </svg>
            <div className="phonenum ml-2 relative text-white font-semibold">
              xpert@gmail.com
            </div>
          </div>
          <ul class="mt-8 mb-8 flex justify-center gap-6 md:gap-8">
            <li>
              <a href="/" rel="noreferrer" target="_blank" class="text-white">
                <span class="sr-only">Facebook</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>

            <li>
              <a href="/" rel="noreferrer" target="_blank" class="text-white">
                <span class="sr-only">Instagram</span>
                <svg
                  class="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/">
                <img
                  src={blogImage}
                  alt="blog"
                  width="30"
                  height="50"
                  viewBox="0 0 58 56"
                  style={{ transform: "translateY(-2px)" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

/*function FooterComp() {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4" style={{ marginTop: "300px" }}>
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-12">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
*/

function Main() {
  return (
    <div>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/total" element={<Total />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/utility" element={<Utility />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <FooterComp />
    </div>
  );
}

export default Main;
