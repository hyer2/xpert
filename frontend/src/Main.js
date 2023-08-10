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
import reviewImage1 from "./img/reviewbox1.png";
import reviewImage2 from "./img/reviewbox2.png";
import reviewImage3 from "./img/reviewbox3.png";
import backgroundImage from "./img/background.png";

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
      <Nav />
      <HeaderComp />
      <MainComp />
      <Slider />
      <FooterComp />
    </div>
  );
}

function Slider() {
  return (
    <div className="SliderWrapper">
      <div className="Comment w-100 h-96 relative pb-100 text-center">
          <div className="titleText absolute left-10 top-0 inset-x-0 text-center mt-8">
            <span className="text-white right-2 bottom-1 bg-blue-950 rounded-lg bg-opacity-80 font-bold text-xl p-2">
              실제 이용 후기로 보는 Xpert
            </span>
        </div>
        <div className="Comment w-full h-96 relative pb-100 flex mx-auto max-w-screen-xl">
        <div className="reviewImagesContainer w-full h-96 relative pb-100 flex mx-auto max-w-screen-xl">
        <div className="reviewImage mt-16" style={{ transform: "translate(-20px, 180px)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="51" viewBox="0 0 35 51" fill="none">
              <path d="M0.907828 23.2841L26.0144 0.812589C27.2248 -0.270863 29.1884 -0.270863 30.3988 0.812589L33.3274 3.43392C34.5365 4.51621 34.5378 6.26916 33.3326 7.35377L13.4346 25.2463L33.3313 43.14C34.5378 44.2246 34.5352 45.9776 33.3261 47.0599L30.3975 49.6812C29.1871 50.7647 27.2235 50.7647 26.0131 49.6812L0.907828 27.2086C-0.302609 26.1251 -0.302609 24.3675 0.907828 23.2841Z" fill="#5D75B1"/>
            </svg>
          </div>
          <div className="reviewImage mt-28">
            <img src={reviewImage1} alt="Review 1" />
          </div>
          <div className="reviewImage mt-28">
            <img src={reviewImage2} alt="Review 2" />
          </div>
          <div className="reviewImage mt-28">
            <img src={reviewImage3} alt="Review 3" />
            </div>
            <div className="reviewImage mt-16" style={{ transform: "translate(20px, 180px)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="51" viewBox="0 0 35 51" fill="none">
                  <path d="M33.3274 27.2099L8.22102 49.6822C7.01016 50.7661 5.04707 50.7661 3.83635 49.6822L0.908108 47.0612C-0.300676 45.9792 -0.303001 44.2257 0.902941 43.1411L20.8002 25.2475L0.902941 7.35396C-0.303001 6.26944 -0.300676 4.51588 0.908108 3.43391L3.83635 0.812867C5.0472 -0.270956 7.01029 -0.270956 8.22102 0.812867L33.3272 23.2852C34.5381 24.3689 34.5381 26.1261 33.3274 27.2099Z" fill="#5D75B1"/>
              </svg>
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
      <div class="p-8 flex items-center justify-center">
        <div class="grid grid-cols-1 gap-4 lg:gap-8 flex items-center">
          <Search />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
          <Contents />
        </div>
      </div>
    </div>
  );
}
function Contents() {
  return (
    <div>
    <div className="w-[1016px] h-[139px] relative shadow flex items-center">
          <div class="w-[23px] h-[31.26px] left-[39px] top-[47.87px] absolute text-center text-blue-950 text-opacity-50 text-[40px] font-bold">
            1
          </div>
          <div class="w-[676px] h-[0px] left-[299px] top-[95.44px] absolute border border-zinc-300"></div>
          <div class="left-[480px] top-[35px] absolute text-center text-black text-[25px] font-semibold">
            맥도날드
          </div>
          <div class="left-[309px] top-[40px] absolute text-center">
            <span class="text-neutral-400 text-[15px] font-light">
              매장 키오스크{" "}
            </span>
            <span class="text-neutral-400 text-[10px] font-normal">
              패스트푸드
            </span>
          </div>
          <div class="left-[309px] top-[105px] absolute justify-start items-start gap-[3px] inline-flex">
            <div class="text-center text-black text-[15px] font-medium">
              사용난이도
            </div>
          </div>
          <div class="left-[755px] top-[107.5px] absolute text-center text-stone-500 text-[15px] font-medium">
            <img src={likeImage} />
          </div>

          <div class="left-[781px] top-[106px] absolute text-center text-stone-500 text-[15px] font-medium">
            1,130개
          </div>

          <div class="left-[871px] top-[108.5px] absolute text-center text-stone-500 text-[15px] font-medium">
            <img src={eyeImage} />
          </div>

          <div class="left-[899px] top-[106px] absolute text-center text-stone-500 text-[15px] font-medium">
            30,000회
          </div>
          <div class="w-[187px] h-24 left-[89px] top-[15px] absolute rounded-lg">
            <div class="items-center justify-center">
              <img src={mcImage} alt="mcdonalds" />
            </div>
          </div>
          <button class="w-[101px] h-[74px] left-[737px] top-[11px] absolute bg-blue-300 rounded-lg hover:bg-blue-700">
            <div class="items-center justify-center">
              <img src={videoImage} alt="Video Icon" />
            </div>
          </button>
          <button class="w-[101px] h-[74px] left-[855px] top-[11px] absolute bg-blue-300 rounded-lg hover:bg-blue-700">
            <div class="items-center justify-center">
              <img src={infoImage} alt="Info Icon" />
            </div>
          </button>
          <div class="w-[124px] h-5 left-[395px] top-[105px] absolute">
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
    </div>
  );
}

function HeaderComp() {
  return (
    <div>
      <section
        className="bg-center bg-no-repeat bg-cover bg-blend-multiply mt-12"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: '100% auto',
          width: '100%',
          height: '450px',
        }}
      ></section>
    </div>
  );
}



function Nav() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
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
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-28 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                매장 키오스크 가이드
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                교통앱 가이드
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                모바일뱅킹앱 가이드
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                유틸리티 서비스 가이드
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Search() {
  return (
    <div style={{ marginTop: '30px' }}>
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
    <footer className="footer p-24 bg-gradient-to-b from-blue-950 via-indigo-400 to-indigo-300 text-white" style={{ marginTop: "250px" }}>
      <div className="grid grid-cols-8 lg:grid-cols-3 gap-80">
        <div>
            <span className="footer-title text-2xl font-semibold">About</span>
            <p className="context">
            <br/>
            Xpert는 디지털 기기 조작을 어려워하는 중장년층분들을 위해 디지털 기기 사용법을 알려주는 플랫폼입니다.
            <br />
            Xpert는 매장 키오스크 사용법부터 교통앱, 배달앱, 그리고 모바일 뱅킹 앱과 같은 다양한 디지털 기기 사용법을 
            쉽고 친절하게 안내합니다.
            </p>
        </div>
        <div>
        <span className="footer-title text-2xl font-semibold">Menu</span>
        <a href="/restaurant" className="link link-hover block mt-2">매장 키오스크 가이드</a>
        <a href="/transportation" className="link link-hover block mt-2">교통앱 가이드</a>
        <a href="/mobilebanking" className="link link-hover block mt-2">모바일뱅킹앱 가이드</a>
        <a href="/utility" className="link link-hover block mt-2">유틸리티 서비스 가이드</a>
        </div>
        <div>
        <span className="footer-title text-2xl font-semibold">Information</span>
        <a href="/restaurant" className="link link-hover block mt-2">매장 키오스크 가이드</a>
        <a href="/transportation" className="link link-hover block mt-2">교통앱 가이드</a>
        <a href="/mobilebanking" className="link link-hover block mt-2">모바일뱅킹앱 가이드</a>
        <a href="/utility" className="link link-hover block mt-2">유틸리티 서비스 가이드</a>
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
      <Router>
        <Routes>
          <Route path="/" element={<Init />} />
        </Routes>
      </Router>
    </div>
  );
}


export default Main;
