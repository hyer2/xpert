import mcImage from "./icons/mcdonalds.png";

function Detail() {
  return (
    <div>
      <div class="h-[100px]"></div>

      <div class=" flex justify-center items-center">
        <div class="h-[1500px] w-[1200px] md:h-[1200px] md:w-[900px] rounded-3xl  shadow-xl p-10">
          <div class="h-[7%] flex justify-between items-center">
            <div class="flex items-center">
              <img src={mcImage} class="p-5 h-[100px] w-[160px]"></img>
              <h2 class="font-bold text-black text-2xl">맥도날드</h2>
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

                <p class="whitespace-nowrap text-sm">패스트푸드</p>
              </span>
            </div>

            <div class="flex items-center">
              <p class="mr-2 text-sm font-medium text-black dark:text-gray-400">
                사용난이도
              </p>
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
                class="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
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
              <video class="w-[80%]" controls>
                <source src="https://youtu.be/yHI8zRBKmVY" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
                class="h-[70%] mx-auto rounded-lg flex justify-center"
                style={{ backgroundColor: "rgba(219, 234, 254, 0.3)" }}
              >
                <div class="p-5">
                  <p class="text-gray-500 whitespace-normal dark:text-gray-400">
                    1. 화면을 터치하고 [매장에서 식사] 또는 [테이크 아웃]을
                    선택합니다. <br />
                    2. 원하는 버거를 선택합니다. <br />
                    원하는 구성을 선택합니다. <br />
                    ex) 케이준 맥치킨 단품/ 케이준 맥치킨 세트/ 케이준
                    맥치킨+라지세트 재료 추가/변경을 원하시는 분은 [재료
                    추가/변경]을 터치합니다. <br />
                    음료를 선택합니다. <br />
                    주문을 확인하고 하단에 있는 [장바구니 추가]를 터치합니다.{" "}
                    <br />
                    [주문완료] 터치, [결재하기] 터치 후, 신용카드 결재하면 주문
                    완료입니다. <br />
                  </p>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="text-white bg-blue-900 hover:bg-white hover:text-blue-900 font-bold focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:border border-blue-900"
            >
              <a href="guide">Back</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
