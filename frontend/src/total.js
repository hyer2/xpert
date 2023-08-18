import "./index.css";
import "./style.css";
import mcImage from "./icons/mcdonalds.png";
import likeImage from "./icons/like.png";
import eyeImage from "./icons/eye.png";
import bgImage from "./icons/sub-bg.jpg";
import React, { useState } from "react";
import imageVariables from "./imagevariables";

const dataModule = require("./data");
const allData = dataModule.allData;

function Total() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (itemText) => {
    setSelectedCategory(itemText);
    setSearchTerm(itemText);
    setDropdownOpen(false);
  };

  //   const [inputValue, setInputValue] = useState("");

  // 버튼 클릭 핸들러
  const handleButtonClick = (e) => {
    const value = e.target.getAttribute("data-value");
    setSearchTerm(value);
  };

  //Input
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 검색어 사용 또는 상태 업데이트 등의 작업 수행
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
      <div class="flex items-center mt-2.5 mb-5 hidden lg:flex">
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

  // 검색 기능을 위한 상태와 함수
  const [searchTerm, setSearchTerm] = useState("");

  // 카드 아이템의 이름을 검색어와 비교하여 필터링
  const filteredKioskItems = allData.filter((item) =>
    item.name.includes(searchTerm)
  );

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // 예: 페이지당 8개의 아이템을 표시

  const totalPages = Math.ceil(filteredKioskItems.length / itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = filteredKioskItems.slice(startIndex, endIndex);

  return (
    <div class="w-full h-full">
      {/* <div>
        <Component allData={allData} imageVariables={imageVariables} />
      </div> */}
      <div class="items-center justify-center">
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
            <div class="items-center justify-center">
              <div>
                <div className="flex mt-8">
                  <label
                    htmlFor="search-dropdown"
                    className="mb-8 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Your Email
                  </label>
                  <div className="flex mr-8"></div>
                  <div className="relative w-full">
                    <form onSubmit={handleSubmit}>
                      <input
                        // type="search"
                        // id="search-dropdown"
                        // className="text-[15px] p-2.5 w-[500px] lg:w-full z-20 text-center text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring--500 focus:border-blue-500"
                        // placeholder="검색어를 입력하세요."
                        // required
                        // value={inputValue}
                        // onChange={handleInputChange}
                        type="text"
                        placeholder="검색어를 입력하세요."
                        // className="py-2 px-4 border rounded-md"
                        className="text-[15px] p-2.5 w-[500px] lg:w-full z-20 text-center text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring--500 focus:border-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                    data-value="네이버지도"
                    onClick={handleButtonClick}
                    class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-2 text-center mb-2 w-32"
                  >
                    네이버지도
                  </button>
                  <button
                    type="button"
                    data-value="토스"
                    onClick={handleButtonClick}
                    class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-2 text-center mb-2 w-32"
                  >
                    토스
                  </button>
                  <button
                    type="button"
                    data-value="쿠팡"
                    onClick={handleButtonClick}
                    class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-3 text-center mb-2 w-32"
                  >
                    쿠팡
                  </button>
                  <button
                    type="button"
                    data-value="넷플릭스"
                    onClick={handleButtonClick}
                    class="text-[16px] text-gray-500 hover:text-white bg-white hover:bg-indigo-300 focus:ring-1 focus:outline-none focus:ring-indigo-300 font-bold rounded-full px-2 py-2 text-center mb-2 w-32"
                  >
                    넷플릭스
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <div className="grid gird-cols-2 md:grid-cols-4 p-20 gap-10">
          {displayedData.map((data, index) => (
            <div key={index}>
              <div className="sw-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="flex justify-center p-5">
                  <img
                    src={imageVariables[data.image]}
                    alt={data.name}
                    class="h-[100px] lg:h-[150px] rounded-lg"
                  />
                </div>

                <div class="px-5 pb-5">
                  <a href="#">
                    <h5 class="text-lg lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-5 lg:mb-0 line-clamp-1">
                      {data.name}
                    </h5>
                  </a>

                  <RatingComponent level={data.level} />
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
                      {data.view}
                    </div>
                    <a
                      href={`/detail?&name=${data.name}&category=${data.category}&subcategory=${data.subcategory}&level=${data.level}&image=${data.image}`}
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          className="mx-2 p-2 border rounded hover:bg-blue-100 hover:font-extrabold hover:text-blue-600"
          onClick={() => handleChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        <span class="items-center justify-center mx-5 text-gray-700 text-md">
          {currentPage}/{totalPages}
        </span>
        <button
          className="mx-2 p-2 border rounded hover:bg-blue-100 hover:font-extrabold hover:text-blue-600"
          onClick={() => handleChangePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default Total;
