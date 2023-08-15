import "./index.css";
import "./style.css";
import mcImage from "./icons/mcdonalds.png";
import likeImage from "./icons/like.png";
import eyeImage from "./icons/eye.png";
import bgImage from "./icons/sub-bg.jpg";
import React, { useState } from "react";

function GuideSearch() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (itemText) => {
    setSelectedCategory(itemText);
    setSearchTerm(itemText);
    setDropdownOpen(false);
  };

  const [inputValue, setInputValue] = useState("");

  // 버튼 클릭 핸들러
  const handleButtonClick = (e) => {
    const value = e.target.getAttribute("data-value");
    setInputValue(value);
  };

  return (
    <div class="items-center justify-center">
      <div>
        <div className="flex mt-8">
          <label
            htmlFor="search-dropdown"
            className="mb-8 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your Email
          </label>
          <div className="flex mr-8">
            <button
              id="dropdown-button"
              className={`flex-shrink-0 z-10 inline-flex items-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600 ${
                isDropdownOpen ? "rounded-lg" : "rounded-lg"
              }`}
              style={{ width: "130px", justifyContent: "space-between" }} // 버튼 넓이 고정 및 내용 가로 정렬
              onClick={toggleDropdown}
              type="button"
            >
              <span className="flex items-center">
                {selectedCategory === "true" ? "전체" : selectedCategory}
              </span>
              <svg
                className={`w-2.5 h-2.5 transform ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 2 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute  mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleDropdownItemClick("전체")}
                    >
                      전체
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleDropdownItemClick("음식점")}
                    >
                      음식점
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleDropdownItemClick("카페")}
                    >
                      카페
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleDropdownItemClick("영화관")}
                    >
                      영화관
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => handleDropdownItemClick("주차시스템")}
                    >
                      주차시스템
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-full">
            <form>
              <input
                type="search"
                id="search-dropdown"
                className="text-[15px] p-2.5 w-[500px] lg:w-[750px] z-20 text-center text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring--500 focus:border-blue-500"
                placeholder="검색어를 입력하세요."
                required
                value={inputValue}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 px-5 py-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                검색
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-1 mt-8 md:grid-cols-5 gap-16 hidden lg:flex">
          <button
            type="button"
            data-value="맥도날드"
            onClick={handleButtonClick}
            class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-2 text-center mb-2 w-32"
          >
            맥도날드
          </button>
          <button
            type="button"
            data-value="베스킨라빈스"
            onClick={handleButtonClick}
            class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-2 text-center mb-2 w-32"
          >
            베스킨라빈스
          </button>
          <button
            type="button"
            data-value="공차"
            onClick={handleButtonClick}
            class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-2 text-center mb-2 w-32"
          >
            공차
          </button>
          <button
            type="button"
            data-value="버거킹"
            onClick={handleButtonClick}
            class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-3 text-center mb-2 w-32"
          >
            버거킹
          </button>
          <button
            type="button"
            data-value="서브웨이"
            onClick={handleButtonClick}
            class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-2 text-center mb-2 w-32"
          >
            서브웨이
          </button>
        </div>
      </div>
    </div>
  );
}

function GuideHeader() {
  return (
    <div>
      {/* bg-center bg-no-repeat bg-cover bg-blend-multiply bg-indigo-900 */}
      <section
        class="flex items-center justify-center"
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
      >
        <GuideSearch />
      </section>
    </div>
  );
}

function Card() {
  return (
    <div>
      <div class="sw-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-center p-5">
          <img src={mcImage} alt="product image" />
        </div>

        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5 lg:mb-0">
              맥도날드
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5 hidden lg:flex ">
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              class="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-center text-stone-500 font-medium hidden xl:flex">
              <img src={likeImage} />
            </div>

            <div class="text-center text-stone-500 font-medium hidden xl:flex">
              1,130개
            </div>

            <div class="text-center text-stone-500 font-medium hidden 2xl:flex">
              <img src={eyeImage} />
            </div>

            <div class="text-center text-stone-500 font-medium hidden 2xl:flex">
              30,000회
            </div>
            <a
              href="/detail"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Cards() {
  return (
    <div class="grid gird-cols-2 md:grid-cols-4 p-20 gap-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Pagination() {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-8 text-sm">
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
              <svg
                class="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
              <svg
                class="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
function Shop() {
  return (
    <div class="w-full h-full">
      <div class="items-center justify-center">
        <GuideHeader />
      </div>
      <div>
        <Cards />
      </div>
      <div class="flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
}
export default Shop;
