"use client";

import React, { useEffect, useRef } from "react";
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "./index.css";

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

      <Search />
      <Rankings />
      <FooterComp />
    </div>
  );
}

function Test() {
  return (
    <div>
      <div className="w-[1920px] h-[3147px] relative bg-gradient-to-b from-blue-950 via-slate-500 to-zinc-300">
        <img
          className="w-[2047px] h-[986px] left-[283px] top-[191px] absolute blur-[488.14px]"
          src="https://via.placeholder.com/2047x986"
        />
        <div className="w-[1155px] h-[1155px] left-[-360px] top-[-378px] absolute bg-blue-600 bg-opacity-50 rounded-full blur-[300px]" />
        <div className="w-[1476px] h-[62px] left-[222px] top-[17px] absolute">
          <div className="w-[1476px] h-[0px] left-0 top-[62px] absolute border border-white"></div>
          <div className="w-[216px] h-[0px] left-[321px] top-[62px] absolute border border-white"></div>
          <div className="w-[1069px] h-[40.52px] left-[340px] top-[15.08px] absolute">
            <div className="w-[177px] h-[37.15px] left-0 top-0 absolute text-center text-white text-xl font-medium">
              매장 키오스크 가이드
            </div>
            <div className="w-[120px] h-[35.88px] left-[346px] top-[4.64px] absolute text-center text-white text-xl font-medium">
              교통앱 가이드
            </div>
            <div className="w-[116px] h-[37.15px] left-[647px] top-0 absolute text-center text-white text-xl font-medium">
              배달앱 가이드
            </div>
            <div className="w-[171px] h-[37.15px] left-[898px] top-0 absolute text-center text-white text-xl font-medium">
              모바일뱅킹앱 가이드
            </div>
          </div>
          <img
            className="w-[189px] h-[55px] left-[25px] top-0 absolute"
            src="https://via.placeholder.com/189x55"
          />
        </div>
        <div className="w-[1698px] h-[1822px] left-[-483px] top-[1021px] absolute bg-blue-600 bg-opacity-30 rounded-full blur-[300px]" />
        <img
          className="w-[2047px] h-[986px] left-[217px] top-[1990px] absolute blur-[488.14px]"
          src="https://via.placeholder.com/2047x986"
        />
        <div className="w-[1338px] h-[1339px] left-[294px] top-[392px] absolute bg-white bg-opacity-50 rounded-tl-[50px] rounded-tr-[50px] shadow" />
        <div className="w-[1264px] h-[1333px] left-[331px] top-[423px] absolute bg-white bg-opacity-60 rounded-tl-[50px] rounded-tr-[50px]" />
        <div className="w-[960px] h-[118px] left-[480px] top-[162px] absolute text-center text-white text-5xl font-semibold">
          X세대분들이 디지털 전문가가 되는 그날까지
          <br />
          Xpert가 함께합니다.
        </div>
        <div className="w-[70px] h-[65px] left-[1437px] top-[471px] absolute">
          <div className="w-[70px] h-[65px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
          <img
            className="w-[59px] h-[45px] left-[5px] top-[10px] absolute"
            src="https://via.placeholder.com/59x45"
          />
        </div>
        <div className="w-[1016px] h-[139px] left-[452px] top-[774px] absolute shadow">
          <div className="w-[1016px] h-[139px] left-0 top-0 absolute bg-white rounded-[20px]" />
          <div className="w-[23px] h-[31.26px] left-[39px] top-[47.87px] absolute text-center text-blue-950 text-opacity-50 text-[40px] font-bold">
            2
          </div>
          <div className="w-[676px] h-[0px] left-[299px] top-[94.44px] absolute border border-zinc-300"></div>
          <div className="left-[456px] top-[40px] absolute text-center text-black text-[25px] font-semibold">
            배스킨라빈스
          </div>
          <div className="left-[309px] top-[45px] absolute text-center">
            <span class="text-neutral-400 text-[15px] font-light">
              매장 키오스크{" "}
            </span>
            <span class="text-neutral-400 text-[10px] font-normal">
              패스트푸드
            </span>
          </div>
          <div className="left-[309px] top-[104px] absolute justify-start items-start gap-[3px] inline-flex">
            <div className="text-center text-black text-[15px] font-medium">
              사용난이도
            </div>
            <div className="w-[92px] h-4 relative">
              <div className="w-[24.53px] h-4 left-0 top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[16.87px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[33.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[50.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[67.47px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[37.66px] h-[23.58px] left-[-5.13px] top-[-3.79px] absolute bg-red-600" />
              </div>
            </div>
          </div>
          <div className="w-[78px] h-[19px] left-[755px] top-[105px] absolute">
            <div className="left-[26px] top-[1px] absolute text-center text-stone-500 text-[15px] font-medium">
              1,000개
            </div>
          </div>
          <div className="w-[236px] h-[73px] left-[723px] top-[14px] absolute">
            <div className="w-[116.87px] h-[73px] left-0 top-0 absolute">
              <div className="w-[104px] h-[73px] left-[6px] top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[116.87px] h-[60.83px] left-0 top-[6.08px] absolute">
                <img
                  className="w-[116.87px] h-[60.83px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/117x61"
                />
                <div className="w-[116.87px] h-[64.64px] left-[1.31px] top-0 absolute bg-white" />
              </div>
            </div>
            <div className="w-[104px] h-[73px] left-[132px] top-0 absolute">
              <div className="w-[104px] h-[73px] left-0 top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[95.62px] h-[56.87px] left-[8.38px] top-[6.74px] absolute">
                <img
                  className="w-[95.62px] h-[56.87px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/96x57"
                />
                <div className="w-[150.98px] h-[65.23px] left-[-48.65px] top-[5.85px] absolute bg-white" />
              </div>
            </div>
          </div>
          <div className="w-[88px] h-[18px] left-[871px] top-[106px] absolute">
            <div className="left-[28px] top-0 absolute text-center text-stone-500 text-[15px] font-medium">
              27,000회
            </div>
          </div>
          <img
            className="w-[185px] h-[111px] left-[88px] top-[14px] absolute rounded-[20px]"
            src="https://via.placeholder.com/185x111"
          />
        </div>
        <div className="w-[1016px] h-[139px] left-[452px] top-[985px] absolute shadow">
          <div className="w-[1016px] h-[139px] left-0 top-0 absolute bg-white rounded-[20px]" />
          <div className="w-[23px] h-[31.26px] left-[39px] top-[47.87px] absolute text-center text-blue-950 text-opacity-50 text-[40px] font-bold">
            3
          </div>
          <div className="w-[676px] h-[0px] left-[299px] top-[94.44px] absolute border border-zinc-300"></div>
          <div className="left-[458px] top-[40px] absolute text-center text-black text-[25px] font-semibold">
            CGV
          </div>
          <div className="left-[309px] top-[45px] absolute text-center">
            <span class="text-neutral-400 text-[15px] font-light">
              매장 키오스크{" "}
            </span>
            <span class="text-neutral-400 text-[10px] font-light">영화관</span>
          </div>
          <div className="left-[309px] top-[104px] absolute justify-start items-start gap-[3px] inline-flex">
            <div className="text-center text-black text-[15px] font-medium">
              사용난이도
            </div>
            <div className="w-[92px] h-4 relative">
              <div className="w-[24.53px] h-4 left-0 top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[16.87px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[33.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[50.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[67.47px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[37.66px] h-[23.58px] left-[-5.13px] top-[-3.79px] absolute bg-red-600" />
              </div>
            </div>
          </div>
          <div className="w-[72px] h-[19px] left-[755px] top-[105px] absolute">
            <div className="left-[32px] top-[1px] absolute text-center text-stone-500 text-[15px] font-medium">
              995개
            </div>
          </div>
          <div className="w-[236px] h-[73px] left-[723px] top-[14px] absolute">
            <div className="w-[116.87px] h-[73px] left-0 top-0 absolute">
              <div className="w-[104px] h-[73px] left-[6px] top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[116.87px] h-[60.83px] left-0 top-[6.08px] absolute">
                <img
                  className="w-[116.87px] h-[60.83px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/117x61"
                />
                <div className="w-[116.87px] h-[64.64px] left-[1.31px] top-0 absolute bg-white" />
              </div>
            </div>
            <div className="w-[104px] h-[73px] left-[132px] top-0 absolute">
              <div className="w-[104px] h-[73px] left-0 top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[95.62px] h-[56.87px] left-[8.38px] top-[6.74px] absolute">
                <img
                  className="w-[95.62px] h-[56.87px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/96x57"
                />
                <div className="w-[150.98px] h-[65.23px] left-[-48.65px] top-[5.85px] absolute bg-white" />
              </div>
            </div>
          </div>
          <div className="w-[88px] h-[18px] left-[871px] top-[106px] absolute">
            <div className="left-[28px] top-0 absolute text-center text-stone-500 text-[15px] font-medium">
              20,000회
            </div>
          </div>
          <img
            className="w-[185px] h-[111px] left-[88px] top-[14px] absolute rounded-[20px]"
            src="https://via.placeholder.com/185x111"
          />
        </div>
        <div className="w-[1016px] h-[139px] left-[452px] top-[1180px] absolute shadow">
          <div className="w-[1016px] h-[139px] left-0 top-0 absolute bg-white rounded-[20px]" />
          <div className="w-[23px] h-[31.26px] left-[39px] top-[47.87px] absolute text-center text-blue-950 text-opacity-50 text-[40px] font-bold">
            4
          </div>
          <div className="w-[676px] h-[0px] left-[299px] top-[94.44px] absolute border border-zinc-300"></div>
          <div className="left-[457px] top-[41px] absolute text-center text-black text-[25px] font-semibold">
            카카오택시
          </div>
          <div className="left-[313px] top-[46px] absolute text-center">
            <span class="text-neutral-400 text-[15px] font-light">교통앱 </span>
            <span class="text-neutral-400 text-[10px] font-light">택시</span>
          </div>
          <div className="left-[309px] top-[104px] absolute justify-start items-start gap-[3px] inline-flex">
            <div className="text-center text-black text-[15px] font-medium">
              사용난이도
            </div>
            <div className="w-[92px] h-4 relative">
              <div className="w-[24.53px] h-4 left-0 top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[16.87px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[33.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[50.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[67.47px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[37.66px] h-[23.58px] left-[-5.13px] top-[-3.79px] absolute bg-red-600" />
              </div>
            </div>
          </div>
          <div className="w-[72px] h-[19px] left-[755px] top-[105px] absolute">
            <div className="left-[32px] top-[1px] absolute text-center text-stone-500 text-[15px] font-medium">
              900개
            </div>
          </div>
          <div className="w-[236px] h-[73px] left-[723px] top-[14px] absolute">
            <div className="w-[116.87px] h-[73px] left-0 top-0 absolute">
              <div className="w-[104px] h-[73px] left-[6px] top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[116.87px] h-[60.83px] left-0 top-[6.08px] absolute">
                <img
                  className="w-[116.87px] h-[60.83px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/117x61"
                />
                <div className="w-[116.87px] h-[64.64px] left-[1.31px] top-0 absolute bg-white" />
              </div>
            </div>
            <div className="w-[104px] h-[73px] left-[132px] top-0 absolute">
              <div className="w-[104px] h-[73px] left-0 top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[95.62px] h-[56.87px] left-[8.38px] top-[6.74px] absolute">
                <img
                  className="w-[95.62px] h-[56.87px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/96x57"
                />
                <div className="w-[150.98px] h-[65.23px] left-[-48.65px] top-[5.85px] absolute bg-white" />
              </div>
            </div>
          </div>
          <div className="w-[88px] h-[18px] left-[871px] top-[106px] absolute">
            <div className="left-[28px] top-0 absolute text-center text-stone-500 text-[15px] font-medium">
              18,000회
            </div>
          </div>
          <img
            className="w-[185px] h-[111px] left-[88px] top-[14px] absolute rounded-[20px]"
            src="https://via.placeholder.com/185x111"
          />
        </div>
        <div className="w-[1016px] h-[139px] left-[452px] top-[1375px] absolute shadow">
          <div className="w-[1016px] h-[139px] left-0 top-0 absolute bg-white rounded-[20px]" />
          <div className="w-[23px] h-[31.26px] left-[39px] top-[47.87px] absolute text-center text-blue-950 text-opacity-50 text-[40px] font-bold">
            5
          </div>
          <div className="w-[676px] h-[0px] left-[299px] top-[94.44px] absolute border border-zinc-300"></div>
          <div className="left-[457px] top-[40px] absolute text-center text-black text-[25px] font-semibold">
            국민은행
          </div>
          <div className="left-[315px] top-[45px] absolute text-center text-neutral-400 text-[15px] font-light">
            모바일뱅킹앱{" "}
          </div>
          <div className="left-[309px] top-[104px] absolute justify-start items-start gap-[3px] inline-flex">
            <div className="text-center text-black text-[15px] font-medium">
              사용난이도
            </div>
            <div className="w-[92px] h-4 relative">
              <div className="w-[24.53px] h-4 left-0 top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[16.87px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[33.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[50.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[67.47px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[37.66px] h-[23.58px] left-[-5.13px] top-[-3.79px] absolute bg-red-600" />
              </div>
            </div>
          </div>
          <div className="w-[72px] h-[19px] left-[755px] top-[105px] absolute">
            <div className="left-[32px] top-[1px] absolute text-center text-stone-500 text-[15px] font-medium">
              850개
            </div>
          </div>
          <div className="w-[236px] h-[73px] left-[723px] top-[14px] absolute">
            <div className="w-[116.87px] h-[73px] left-0 top-0 absolute">
              <div className="w-[104px] h-[73px] left-[6px] top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[116.87px] h-[60.83px] left-0 top-[6.08px] absolute">
                <img
                  className="w-[116.87px] h-[60.83px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/117x61"
                />
                <div className="w-[116.87px] h-[64.64px] left-[1.31px] top-0 absolute bg-white" />
              </div>
            </div>
            <div className="w-[104px] h-[73px] left-[132px] top-0 absolute">
              <div className="w-[104px] h-[73px] left-0 top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[95.62px] h-[56.87px] left-[8.38px] top-[6.74px] absolute">
                <img
                  className="w-[95.62px] h-[56.87px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/96x57"
                />
                <div className="w-[150.98px] h-[65.23px] left-[-48.65px] top-[5.85px] absolute bg-white" />
              </div>
            </div>
          </div>
          <div className="w-[88px] h-[18px] left-[871px] top-[106px] absolute">
            <div className="left-[28px] top-0 absolute text-center text-stone-500 text-[15px] font-medium">
              15,000회
            </div>
          </div>
          <img
            className="w-[185px] h-[111px] left-[88px] top-[14px] absolute rounded-[20px]"
            src="https://via.placeholder.com/185x111"
          />
        </div>
        <div className="w-[920px] h-[65.10px] left-[500px] top-[471px] absolute">
          <div className="w-[920px] h-[65.10px] left-0 top-0 absolute bg-white rounded-[10px]" />
          <div className="w-[96.27px] h-[50.47px] px-[60px] py-3 left-[815.80px] top-[7.70px] absolute bg-blue-950 rounded-[9.29px] shadow justify-center items-center gap-2 inline-flex">
            <div className="text-white text-base font-medium">Search</div>
          </div>
          <div className="w-[41.68px] h-[41px] left-[22.80px] top-[12px] absolute" />
          <div className="left-[372px] top-[21px] absolute text-center text-neutral-400 text-xl font-medium">
            검색어를 입력하세요.
          </div>
        </div>
        <div className="w-[1920px] h-[789px] left-0 top-[1602px] absolute">
          <div className="w-[1920px] h-[789px] left-0 top-0 absolute bg-white" />
          <div className="w-[1419px] h-[432px] left-[252px] top-[197px] absolute">
            <div className="w-[443px] h-[432px] left-0 top-0 absolute">
              <div className="w-[443px] h-[432px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-[10px] shadow" />
              <div className="w-[388px] h-[97px] left-[38px] top-[17px] absolute">
                <img
                  className="w-[92px] h-[97px] left-0 top-0 absolute rounded-full"
                  src="https://via.placeholder.com/92x97"
                />
                <div className="left-[116px] top-[17px] absolute text-slate-500 text-[25px] font-bold">
                  40대 이XX님
                </div>
                <div className="left-[99px] top-[66px] absolute text-slate-500 text-opacity-80 text-lg font-bold">
                  이제 키오스크 사용 부담스럽지 않아요.
                </div>
              </div>
              <div className="w-[364px] left-[40px] top-[137px] absolute text-stone-500 text-base font-medium leading-[30px]">
                매번 맥도날드나 베스킨라빈스 매장 갈 때마다 키오스크 사용법을 잘
                몰라서 긴장하게 되는데 Xpert로 미리 키오스크 사용법 보고 가면
                이해도 잘 되고 전보다 빨리 주문할 수 있는거 같아요! 매번
                키오스크 주문할 때마다 뒤에 줄 서 있는 사람들 눈치도 보게 돼서
                햄버거 먹고 싶어도 아들딸한테 시켰었는데 이제는 저 혼자 당당하게
                가서 주문도 잘 시킨답니다!~!
                <br />
                항상 우리의 편의를 고려해 동영상으로 상세설명을 해주는 Xpert
                너무 고마워요!
              </div>
            </div>
            <div className="w-[443px] h-[432px] left-[489px] top-0 absolute">
              <div className="w-[443px] h-[432px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-[10px] shadow" />
              <div className="w-[364px] h-[111px] left-[38px] top-[17px] absolute">
                <img
                  className="w-[92px] h-[97px] left-0 top-0 absolute rounded-full"
                  src="https://via.placeholder.com/92x97"
                />
                <div className="left-[116px] top-[17px] absolute text-slate-500 text-[25px] font-bold">
                  50대 임XX님
                </div>
                <div className="left-[119px] top-[59px] absolute text-slate-500 text-opacity-80 text-lg font-bold">
                  Xpert 덕분에 카카오 택시이용도 <br />할 수 있게 됐어요.
                </div>
              </div>
              <div className="w-[364px] left-[50px] top-[142px] absolute text-stone-500 text-base font-medium leading-[30px]">
                Xpert를 통해 카카오 택시 이용을 시작했는데, 정말 간편하고
                편리하네요! 카카오 택시 앱을 사용하는 방법부터 간단한 예약,
                결제까지 모든 과정이 쉽게 안내되어 있어서 처음 사용해도 어렵지
                않았습니다.
                <br />
                <br />
                중장년층으로서는 디지털 기기와 앱을 사용하는 데 어려움을 느낄
                때가 많았는데, Xpert의 도움으로 카카오 택시를 이용할 수 있게
                되어 정말 기쁩니다.{" "}
              </div>
            </div>
            <div className="w-[443px] h-[432px] left-[976px] top-0 absolute">
              <div className="w-[443px] h-[432px] left-0 top-0 absolute bg-indigo-100 bg-opacity-50 rounded-[10px] shadow" />
              <div className="w-[389px] h-[97px] left-[38px] top-[17px] absolute">
                <img
                  className="w-[92px] h-[97px] left-0 top-0 absolute rounded-full"
                  src="https://via.placeholder.com/92x97"
                />
                <div className="left-[116px] top-[17px] absolute text-slate-500 text-[25px] font-bold">
                  60대 장XX님
                </div>
                <div className="left-[108px] top-[63px] absolute text-slate-500 text-opacity-80 text-lg font-bold">
                  이제 모바일 송금도 혼자 할 수 있어요.
                </div>
              </div>
              <div className="w-[364px] left-[38px] top-[137px] absolute text-stone-500 text-base font-medium leading-[30px]">
                모바일 뱅킹 앱을 사용하는 것은 처음이었는데, Xpert의 가이드를
                따라하니까 정말 쉽고 빠르게 송금할 수 있었습니다. 가이드는
                단계별로 친절하게 설명되어 있어서 따라하기가 어렵지 않았습니다.
                <br />
                송금 과정에서의 각 단계와 옵션들을 확실하게 이해할 수
                있었습니다. Xpert의 모바일 뱅킹 앱 사용가이드 덕분에 모바일
                송금이 무서울 게 없어졌고 이제는 언제 어디서나 쉽고 안전하게
                송금을 할 수 있게 되었습니다. Xpert의 도움에 감사드립니다!"
              </div>
            </div>
          </div>
          <div className="px-[30px] py-2.5 left-[790.50px] top-[78px] absolute bg-slate-500 bg-opacity-80 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-[25px] font-bold">
              실제 이용 후기로 보는 Xpert
            </div>
          </div>
        </div>
        <div className="w-[1924px] h-[758px] left-[4px] top-[2389px] absolute">
          <div className="w-[1924px] h-[758px] left-0 top-0 absolute bg-blue-950 bg-opacity-50" />
          <div className="w-[1420.75px] h-[335.20px] left-[255px] top-[213px] absolute">
            <div className="w-[254.75px] h-[326.78px] left-[1166px] top-[8.42px] absolute">
              <div className="w-[250.50px] h-[187.83px] left-[4.25px] top-[138.95px] absolute flex-col justify-start items-start gap-[39px] inline-flex">
                <div className="w-[178px] h-[23.54px] relative">
                  <div className="left-[50px] top-0 absolute text-white text-xl font-medium">
                    02-1234-1234
                  </div>
                </div>
                <div className="w-[216px] h-[31px] relative">
                  <div className="left-[54px] top-[6px] absolute text-white text-xl font-medium">
                    Xpert@gmail.com
                  </div>
                </div>
                <div className="w-[250.50px] h-[55.29px] relative">
                  <div className="w-[57px] h-[55px] left-[193.50px] top-0 absolute">
                    <div className="w-[57px] h-[55px] left-0 top-0 absolute bg-neutral-400 bg-opacity-30 rounded-full" />
                    <img
                      className="w-[42px] h-[38px] left-[7px] top-[12px] absolute"
                      src="https://via.placeholder.com/42x38"
                    />
                  </div>
                  <div className="w-[57px] h-[55px] left-[98px] top-[0.29px] absolute">
                    <div className="w-[57px] h-[55px] left-0 top-0 absolute bg-neutral-400 bg-opacity-30 rounded-full" />
                  </div>
                  <div className="w-[57px] h-[55px] left-0 top-[0.29px] absolute">
                    <div className="w-[57px] h-[55px] left-0 top-0 absolute bg-neutral-400 bg-opacity-30 rounded-full" />
                  </div>
                </div>
              </div>
              <div className="w-[159px] h-[41.63px] left-0 top-0 absolute text-white text-3xl font-bold">
                Information
              </div>
            </div>
            <div className="w-[463px] h-[276.93px] left-0 top-[0.10px] absolute">
              <div className="w-[121px] h-[41.63px] left-[4px] top-0 absolute text-white text-3xl font-bold">
                About us
              </div>
              <div className="w-[463px] h-[154.80px] left-0 top-[122.13px] absolute text-white text-xl font-medium leading-[35px]">
                Xpert는 디지털 기기 조작을 어려워하는 중장년층분들을 위해 디지털
                기기 사용법을 알려주는 플랫폼입니다. <br />
                Xpert는 매장 키오스크 사용법부터 교통앱, 배달앱, 그리고 모바일
                뱅킹 앱과 같은 다양한 디지털 기기 사용법을 쉽고 친절하게
                안내합니다.
              </div>
            </div>
            <div className="w-44 h-[312.48px] left-[682px] top-0 absolute">
              <div className="w-[77px] h-[41.63px] left-0 top-0 absolute text-white text-3xl font-bold">
                Menu
              </div>
              <div className="w-44 h-[190px] left-0 top-[122.48px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="text-white text-xl font-medium leading-[25px]">
                  매장 키오스크 가이드
                </div>
                <div className="text-white text-xl font-medium leading-[25px]">
                  교통앱 가이드
                </div>
                <div className="text-white text-xl font-medium leading-[25px]">
                  배달앱 가이드
                </div>
                <div className="text-white text-xl font-medium leading-[25px]">
                  모바일뱅킹앱 가이드
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1016px] h-[139px] left-[452px] top-[581px] absolute shadow">
          <div className="w-[1016px] h-[139px] left-0 top-0 absolute bg-white rounded-[20px]" />
          <div className="w-[23px] h-[31.26px] left-[39px] top-[47.87px] absolute text-center text-blue-950 text-opacity-50 text-[40px] font-bold">
            1
          </div>
          <div className="w-[676px] h-[0px] left-[299px] top-[94.44px] absolute border border-zinc-300"></div>
          <div className="left-[455px] top-[40px] absolute text-center text-black text-[25px] font-semibold">
            맥도날드
          </div>
          <div className="left-[309px] top-[45px] absolute text-center">
            <span class="text-neutral-400 text-[15px] font-light">
              매장 키오스크{" "}
            </span>
            <span class="text-neutral-400 text-[10px] font-normal">
              패스트푸드
            </span>
          </div>
          <div className="left-[308.87px] top-[104px] absolute justify-start items-start gap-[3px] inline-flex">
            <div className="text-center text-black text-[15px] font-medium">
              사용난이도
            </div>
            <div className="w-[92.27px] h-4 relative">
              <div className="w-[24.53px] h-4 left-0 top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[16.87px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[33.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[50.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
              <div className="w-[24.53px] h-4 left-[67.73px] top-0 absolute">
                <img
                  className="w-[24.53px] h-4 left-0 top-0 absolute"
                  src="https://via.placeholder.com/25x16"
                />
                <div className="w-[58.88px] h-[36.57px] left-[4.91px] top-[-18.29px] absolute bg-red-600" />
              </div>
            </div>
          </div>
          <div className="w-[78px] h-[19px] left-[755px] top-[105px] absolute">
            <div className="left-[26px] top-[1px] absolute text-center text-stone-500 text-[15px] font-medium">
              1,130개
            </div>
          </div>
          <div className="w-[236px] h-[73px] left-[723px] top-[14px] absolute">
            <div className="w-[116.87px] h-[73px] left-0 top-0 absolute">
              <div className="w-[104px] h-[73px] left-[6px] top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[116.87px] h-[60.83px] left-0 top-[6.08px] absolute">
                <img
                  className="w-[116.87px] h-[60.83px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/117x61"
                />
                <div className="w-[116.87px] h-[64.64px] left-[1.31px] top-0 absolute bg-white" />
              </div>
            </div>
            <div className="w-[104px] h-[73px] left-[132px] top-0 absolute">
              <div className="w-[104px] h-[73px] left-0 top-0 absolute bg-blue-950 bg-opacity-50 rounded-[10px]" />
              <div className="w-[95.62px] h-[56.87px] left-[8.38px] top-[6.74px] absolute">
                <img
                  className="w-[95.62px] h-[56.87px] left-0 top-0 absolute"
                  src="https://via.placeholder.com/96x57"
                />
                <div className="w-[150.98px] h-[65.23px] left-[-48.65px] top-[5.85px] absolute bg-white" />
              </div>
            </div>
          </div>
          <div className="w-[88px] h-[18px] left-[871px] top-[106px] absolute">
            <div className="left-[28px] top-0 absolute text-center text-stone-500 text-[15px] font-medium">
              30,000회
            </div>
          </div>
          <img
            className="w-[185px] h-[111px] left-[88px] top-[14px] absolute rounded-[20px]"
            src="https://via.placeholder.com/185x111"
          />
        </div>
      </div>
    </div>
  );
}
function HeaderComp() {
  return (
    <div>
      <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function Nav() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
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
    <div>
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

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

function FooterComp() {
  return (
    <div>
      <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
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
