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
import Guide from "./guide.js";
import Detail from "./detail";

//import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [reviewImage1, reviewImage2, reviewImage1]; // 필요한 이미지 추가

  const transitionDuration = 5000; // 이미지가 머무는 시간 (밀리초), 10초로 설정

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, transitionDuration * 2);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="SliderWrapper">
      <div className="Comment w-100 h-96 relative pb-100 text-center mt-12">
        <div className="titleText absolute left-10 top-0 inset-x-0 text-center">
          <span
            className="text-white right-2 bottom-1 bg-blue-900 rounded-lg bg-opacity-80 font-bold text-xl p-2"
            style={{
              paddingLeft: "20px",
              paddingRight: "20px",
              borderRadius: "50px",
            }}
          >
            실제 이용 후기로 보는 Xpert
          </span>
        </div>
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
          style={{ position: "relative" }}
        >
          <div
            className="reviewImagesContainer w-full h-96 relative pb-100 flex mx-auto max-w-screen-xl gap-20"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: `transform ${
                currentIndex === 0 ? 0 : transitionDuration / 1000
              }s ease`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={`mx-auto object-contain h-full mt-20 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                alt={`Review ${index + 1}`}
                style={{
                  transition: `opacity ${
                    currentIndex === 0 ? 0 : transitionDuration / 1000
                  }s ease`,
                }}
              />
            ))}
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
        <div class="mb-10">
          <Search />
        </div>

        <div
          class="p-10 rounded-xl"
          style={{ backgroundColor: "rgba(219, 234, 254, 0.3)" }}
        >
          <div class="grid grid-cols-1 gap-4 lg:gap-8 flex items-center">
            <Contents />
            <Contents />
            <Contents />
            <Contents />
            <Contents />
          </div>
        </div>
      </div>
    </div>
  );
}
function Contents() {
  return (
    <div class="bg-white rounded-lg ">
      <div className="w-full h-auto lg:w-[1016px] lg:h-[139px] relative shadow flex items-center">
        <h1 class="w-[10%] justify-center items-center text-center text-gray-500 text-2xl lg:text-5xl font-bold">
          1
        </h1>
        <div class="w-[20%] justify-center items-center rounded-lg">
          <img src={mcImage} alt="mcdonalds" />
        </div>

        <div class="w-[70%] h-full">
          <div class="h-[70%] flex justify-between items-center mr-10">
            <div class="flex items-center">
              <div class="ml-5 justify-center items-center text-center text-blue-800 font-extrabold text-[10px] lg:text-sm">
                매장 키오스크
              </div>
              <div class="ml-2 lg:ml-5 text-center text-black text-sm lg:text-xl font-semibold">
                맥도날드
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

                  <p class="whitespace-nowrap text-sm">패스트푸드</p>
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <button class="m-3 lg:m-0 w-full h-full bg-blue-300 rounded-lg hover:bg-blue-700">
                <div class="items-center justify-center">
                  <img src={infoImage} alt="Info Icon" />
                </div>
              </button>
            </div>
          </div>

          <div class="w-[95%] border border-zinc-300 hidden lg:flex"></div>

          <div class="h-[20%] flex justify-between items-center mr-10 mt-1 hidden lg:flex">
            <div class="flex items-center">
              <div class="items-center text-center text-blue-800 font-semibold text-[10px] lg:text-sm mr-2">
                사용난이도
              </div>
              <div>
                <div class="flex items-center space-x-1">
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 text-gray-300 dark:text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="flex items-center">
              <div class="text-center text-stone-500 text-[15px] font-medium mr-2">
                <img src={likeImage} />
              </div>

              <div class="text-center text-stone-500 text-[15px] font-medium mr-5">
                1,130개
              </div>

              <div class="text-center text-stone-500 text-[15px] font-medium mr-2">
                <img src={eyeImage} />
              </div>

              <div class="text-center text-stone-500 text-[15px] font-medium">
                30,000회
              </div>
            </div>
          </div>
        </div>
      </div>
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
          width: "100%",
          height: "450px",
        }}
        className="mt-10"
        // bg-center bg-no-repeat bg-cover bg-blend-multiply
      >
        <div class="h-[50px]"></div>
        <div class="text-center px-3 lg:px-10 p-20">
          <h1 class="my-4 text-3xl md:text-4xl lg:text-6xl text-white font-extrabold leading-tight pb-5">
            X-pert
          </h1>
          <p class="leading-normal text-white opacity-80% text-base md:text-2xl lg:text-4xl mb-8 font-extrabold">
            Guide for X-Generation
          </p>
        </div>
      </section>
    </div>
  );
}

function Nav() {
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
                  href="/guide"
                >
                  <span class="relative flex items-center justify-center">
                    매장 키오스크 가이드
                  </span>
                </a>
              </li>

              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/guide"
                >
                  <span class="relative flex items-center justify-center">
                    교통 앱 가이드
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/guide"
                >
                  <span class="relative flex items-center justify-center">
                    모바일뱅킹 앱 가이드
                  </span>
                </a>
              </li>
              <li>
                <a
                  class="relative font-bold text-regular text-indigo-900 before:absolute before:-bottom-4 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-slate-500 before:transition hover:before:scale-100 pb-2 hover:text-indigo-500 hover:before:bg-indigo-500"
                  href="/guide"
                >
                  <span class="relative flex items-center justify-center">
                    유틸리티 앱 가이드
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

function Search() {
  return (
    <div class="flex justify-center w-screen">
      <div class="w-[50%]">
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
    // bg-gradient-to-b from-blue-950 via-indigo-400 to-indigo-300
    <footer
      className="footer p-24 text-white"
      style={{
        marginTop: "250px",

        background: `linear-gradient(
               rgba(255, 255, 255, 1) 0%,

				rgba(255, 255, 255, 0) 100%
        ), url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundImage: `url(${bgImage})`,
        // backgroundSize: "100% auto",
        width: "100%",
        height: "450px",
      }}
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-20 lg:grid-cols-3">
          <div className="mb-10">
            <span className="footer-title text-2xl font-extrabold text-black">
              About
            </span>
            <p className="context text-black  mt-5" style={{ lineHeight: "2" }}>
              Xpert는 디지털 기기 조작을 어려워하는 중장년층분들을 위해 디지털
              기기 사용법을 알려주는 플랫폼입니다.
              <br />
              Xpert는 매장 키오스크 사용법부터 교통앱, 모바일 뱅킹 앱, 유틸리티
              서비스와 같은 다양한 디지털 서비스 사용법을 쉽고 친절하게
              안내합니다.
            </p>
          </div>
          <div className="mx-12 text-black">
            <span className="footer-title text-2xl font-extrabold">Menu</span>
            <div class="mt-5">
              <a href="/restaurant" className="link link-hover block mt-2">
                매장 키오스크 가이드
              </a>
              <a href="/transportation" className="link link-hover block mt-2">
                교통앱 가이드
              </a>
              <a href="/mobilebanking" className="link link-hover block mt-2">
                모바일뱅킹앱 가이드
              </a>
              <a href="/utility" className="link link-hover block mt-2">
                유틸리티 서비스 가이드
              </a>
            </div>
          </div>
          <div className="mx-12 text-black">
            <span className="footer-title text-2xl font-extrabold ">
              Information
            </span>
            <div className="Phone h-6 relative mt-5 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 23.5"
                width="17"
                height="17"
                style={{ transform: "translateY(10px)" }}
              >
                <path
                  d="M24.537 17.0082L19.0682 14.8015C18.8346 14.7078 18.5749 14.688 18.3283 14.7452C18.0818 14.8024 17.8616 14.9335 17.701 15.1187L15.2791 17.9047C11.4781 16.2174 8.41919 13.3374 6.62706 9.75868L9.5861 7.47841C9.78321 7.32747 9.92272 7.12017 9.98352 6.8879C10.0443 6.65564 10.0231 6.41104 9.92302 6.19115L7.57923 1.04214C7.46942 0.80511 7.2752 0.611579 7.03007 0.494923C6.78494 0.378267 6.50426 0.345798 6.23643 0.403115L1.15822 1.50647C0.899996 1.56262 0.669609 1.69951 0.50466 1.8948C0.339711 2.0901 0.249941 2.33227 0.25 2.58179C0.25 14.3739 10.4015 23.9134 22.9066 23.9134C23.1717 23.9136 23.4291 23.8291 23.6366 23.6738C23.8441 23.5185 23.9896 23.3015 24.0492 23.0583L25.2211 18.2771C25.2816 18.0237 25.2464 17.7584 25.1215 17.5268C24.9967 17.2952 24.79 17.1118 24.537 17.0082Z"
                  fill="white"
                />
              </svg>
              <div className="phonenum left-[30px] top-0 mt-2 absolute text-black font-semibold">
                02-1234-1234
              </div>
            </div>
            <div className="Phone h-6 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 32"
                width="20"
                height="16"
                style={{ transform: "translateY(20px)" }}
              >
                <path
                  d="M35.5938 0.913452H3.90625C1.88693 0.913452 0.25 2.64832 0.25 4.78845V28.0385C0.25 30.1786 1.88693 31.9135 3.90625 31.9135H35.5938C37.6131 31.9135 39.25 30.1786 39.25 28.0385V4.78845C39.25 2.64832 37.6131 0.913452 35.5938 0.913452ZM35.5938 4.78845V8.0826C33.8858 9.55664 31.163 11.8487 25.342 16.6795C24.0592 17.7489 21.5181 20.3181 19.75 20.2881C17.9822 20.3184 15.4403 17.7485 14.158 16.6795C8.33793 11.8494 5.6144 9.55688 3.90625 8.0826V4.78845H35.5938ZM3.90625 28.0385V13.055C5.65165 14.5283 8.12686 16.5959 11.8996 19.7269C13.5645 21.1158 16.4801 24.182 19.75 24.1634C23.0038 24.182 25.8825 21.1603 27.5997 19.7275C31.3724 16.5966 33.8483 14.5285 35.5938 13.055V28.0385H3.90625Z"
                  fill="white"
                />
              </svg>
              <div className="phonenum left-[30px] top-0 mt-4 absolute text-black font-semibold">
                xpert@gmail.com
              </div>
            </div>
            <ul className="icon-list" style={{ display: "flex" }}>
              <li>
                <a href="https://www.instagram.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="56"
                    viewBox="0 0 58 56"
                    style={{ transform: "translate(-5px,25px)" }}
                  >
                    <ellipse
                      cx="28.75"
                      cy="27.7047"
                      rx="28.5"
                      ry="27.5"
                      fill="#A7A7A7"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M28.7541 17.9748C23.5044 17.9748 19.2699 22.0957 19.2699 27.2047C19.2699 32.3137 23.5044 36.4347 28.7541 36.4347C34.0039 36.4347 38.2383 32.3137 38.2383 27.2047C38.2383 22.0957 34.0039 17.9748 28.7541 17.9748ZM28.7541 33.2054C25.3616 33.2054 22.5881 30.5143 22.5881 27.2047C22.5881 23.8951 25.3533 21.204 28.7541 21.204C32.1549 21.204 34.9201 23.8951 34.9201 27.2047C34.9201 30.5143 32.1467 33.2054 28.7541 33.2054ZM40.8385 17.5972C40.8385 18.7941 39.8479 19.7501 38.6263 19.7501C37.3964 19.7501 36.4141 18.7861 36.4141 17.5972C36.4141 16.4083 37.4047 15.4444 38.6263 15.4444C39.8479 15.4444 40.8385 16.4083 40.8385 17.5972ZM47.12 19.7822C46.9797 16.8983 46.3028 14.3438 44.1319 12.2392C41.9693 10.1345 39.3444 9.47583 36.3811 9.33123C33.327 9.16254 24.173 9.16254 21.1189 9.33123C18.1638 9.46779 15.539 10.1265 13.3681 12.2312C11.1972 14.3358 10.5286 16.8903 10.38 19.7742C10.2067 22.7464 10.2067 31.655 10.38 34.6272C10.5203 37.5111 11.1972 40.0656 13.3681 42.1702C15.539 44.2749 18.1556 44.9336 21.1189 45.0782C24.173 45.2469 33.327 45.2469 36.3811 45.0782C39.3444 44.9416 41.9693 44.2829 44.1319 42.1702C46.2946 40.0656 46.9714 37.5111 47.12 34.6272C47.2933 31.655 47.2933 22.7544 47.12 19.7822ZM43.1744 37.8163C42.5306 39.3908 41.2842 40.6038 39.6581 41.2384C37.2231 42.1783 31.445 41.9614 28.7541 41.9614C26.0632 41.9614 20.2769 42.1702 17.8502 41.2384C16.2323 40.6118 14.9859 39.3988 14.3338 37.8163C13.3681 35.4466 13.5909 29.8235 13.5909 27.2047C13.5909 24.5859 13.3763 18.9548 14.3338 16.5931C14.9777 15.0186 16.2241 13.8056 17.8502 13.171C20.2852 12.2312 26.0632 12.448 28.7541 12.448C31.445 12.448 37.2313 12.2392 39.6581 13.171C41.2759 13.7976 42.5223 15.0106 43.1744 16.5931C44.1402 18.9628 43.9173 24.5859 43.9173 27.2047C43.9173 29.8235 44.1402 35.4546 43.1744 37.8163Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="56"
                    viewBox="0 0 58 56"
                    style={{ transform: "translateY(25px)" }}
                  >
                    <ellipse
                      cx="28.75"
                      cy="27.7047"
                      rx="28.5"
                      ry="27.5"
                      fill="#A7A7A7"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M48.3933 17.0552C47.9217 15.1459 46.5324 13.6423 44.7684 13.132C41.5711 12.2047 28.75 12.2047 28.75 12.2047C28.75 12.2047 15.929 12.2047 12.7316 13.132C10.9676 13.6423 9.57827 15.1459 9.10673 17.0552C8.25 20.5158 8.25 27.736 8.25 27.736C8.25 27.736 8.25 34.9563 9.10673 38.4169C9.57827 40.3262 10.9676 41.7672 12.7316 42.2775C15.929 43.2047 28.75 43.2047 28.75 43.2047C28.75 43.2047 41.571 43.2047 44.7684 42.2775C46.5324 41.7672 47.9217 40.3262 48.3933 38.4169C49.25 34.9563 49.25 27.736 49.25 27.736C49.25 27.736 49.25 20.5158 48.3933 17.0552ZM24.5568 34.2915V21.1806L35.2727 27.7362L24.5568 34.2915Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <img
                    src={blogImage}
                    alt="blog"
                    width="32"
                    height="56"
                    viewBox="0 0 58 56"
                    style={{ transform: "translate(5px,35px)" }}
                  />
                </a>
              </li>
            </ul>
          </div>
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
          <Route path="/guide" element={<Guide />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Router>
      <FooterComp />
    </div>
  );
}

export default Main;
