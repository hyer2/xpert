import React, { useState, useEffect } from "react";
import mcImage from "./icons/mcdonalds.png";
import imageVariables from "./imagevariables";
import likeImage from "./icons/like.png";
import eyeImage from "./icons/eye.png";
import videoVariables from "./videoVariables";
import textVariables from "./textVariables";
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function RenderTextWithBreaks({ text }) {
  const processedText = text
    .split("\n")
    .map((str) => str.trim())
    .filter((str) => str) // 빈 문자열 제거
    .join("\n");

  return (
    <>
      {processedText.split("\n").map((str, index) => (
        <React.Fragment key={index}>
          <span style={{ lineHeight: "3" }}>
            {str}
            <br />
          </span>
        </React.Fragment>
      ))}
    </>
  );
}

// URL에서 데이터 가져오기
const category = getParameterByName("category");
const name = getParameterByName("name");
const subcategory = getParameterByName("subcategory");
const image = getParameterByName("image");
const level = getParameterByName("level");
const view = getParameterByName("view");
const like = getParameterByName("like");

// 데이터 출력

function Detail() {
  const [likeCount, setLikeCount] = useState(0);
  const [watchcount, setWatchcount] = useState(0);
  const [isLikeImageHovered, setIsLikeImageHovered] = useState(false);

  const increaseLikes = () => {
    setLikeCount(likeCount + 1);
  };

  useEffect(() => {
    setWatchcount(watchcount + 1);
  }, []);

  let categoryLink;

  if (category == "매장 키오스크") {
    categoryLink = "/shop";
  } else if (category == "교통") {
    categoryLink = "/traffic";
  } else if (category == "금융") {
    categoryLink = "/banking";
  } else if (category == "유틸리티") {
    categoryLink = "/utility";
  }

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
      <div class="flex items-center justify-center hidden lg:flex">
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
      <div class="h-[100px]"></div>
      <div class=" flex justify-center items-center">
        <div class="h-[1500px] w-[1200px] md:h-[1300px] md:w-[900px] rounded-3xl  shadow-xl p-10">
          <div class="h-[7%] flex justify-between items-center">
            <div class="flex items-center ">
              <img
                src={imageVariables[image]}
                class="p-5 h-[100px] w-[160px] rounded-lg"
              ></img>
              <h2 class="font-bold text-black text-2xl">{name}</h2>
              <span class="inline-flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 text-purple-700 ml-5">
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

                <p class="whitespace-nowrap text-sm">{subcategory}</p>
              </span>
            </div>

            <div class="flex items-center">
              <p class="mr-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                사용난이도
              </p>
              <RatingComponent level={level} />
            </div>
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <div class="flex flex-col items-center">
            <div class="flex items-center w-full p-4">
              <span>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.52002 7.11011H21.48"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.52002 2.11011V6.97011"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.48 2.11011V6.52011"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.75 14.4501V13.2501C9.75 11.7101 10.84 11.0801 12.17 11.8501L13.21 12.4501L14.25 13.0501C15.58 13.8201 15.58 15.0801 14.25 15.8501L13.21 16.4501L12.17 17.0501C10.84 17.8201 9.75 17.1901 9.75 15.6501V14.4501V14.4501Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h1 class="text-blue-800 font-extrabold text-2xl ml-4">
                동영상 가이드
              </h1>
            </div>

            <div class="flex justify-center w-full m-10">
              <iframe
                width="80%"
                height="400"
                src={videoVariables[image]}
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

          <div class="h-1/2 w-full shadow-sm flex flex-col items-center">
            <div class="flex items-center w-full p-4">
              <span>
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V21M9 21H15M19 6V3H5V6"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h1 class="ml-4 text-blue-800 font-extrabold text-2xl">
                텍스트 가이드
              </h1>
            </div>

            <div class="w-full h-full">
              <div
                class="h-485px mx-auto rounded-lg flex justify-center"
                style={{ backgroundColor: "rgba(219, 234, 254, 0.3)" }}
              >
                <div class="p-5">
                  <p class="text-[15px] text-gray-500 whitespace-normal dark:text-gray-400 ">
                    <RenderTextWithBreaks text={textVariables[image]} />
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full h-full">
              <div class="flex justify-start mt-8">
                <div
                  className="text-center text-stone-500 text-[15px] font-medium mr-2"
                  onClick={increaseLikes}
                  onMouseEnter={() => setIsLikeImageHovered(true)}
                  onMouseLeave={() => setIsLikeImageHovered(false)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={likeImage}
                    alt="Like"
                    style={{
                      verticalAlign: "middle",
                      marginTop: "2px", // Adjust this value as needed
                    }}
                  />
                </div>

                <div className="text-center text-stone-500 text-[15px] font-medium mr-5">
                  <span
                    style={{
                      textDecoration: isLikeImageHovered ? "underline" : "none",
                    }}
                    onClick={increaseLikes}
                  >
                    {parseInt(like,10)+ likeCount}개
                  </span>
                </div>
                <div
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={eyeImage}
                    alt="Watch"
                    style={{
                      verticalAlign: "middle",
                      marginTop: "3px", // Adjust this value as needed
                    }}
                  />
                </div>

                <div className="text-center text-stone-500 text-[15px] font-medium ml-2">
                  <span>{view}회</span>
                </div>
              </div>
            </div>
            <a href={categoryLink}>
              <button
                type="button"
                class="text-white bg-blue-900 hover:bg-white hover:text-blue-900 font-bold focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:border border-blue-900"
              >
                Back
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
