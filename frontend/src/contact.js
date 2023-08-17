import React from "react"; // Make sure to import React
import { useState } from "react";
import bgImage from "./icons/sub-bg.jpg";
import reviewImage1 from "./img/usercomment1.png";
import reviewImage2 from "./img/usercomment2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ContactHead() {
  return (
    <div>
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
        <div className="h-[10px]"></div>
        <div className="w-full h-full flex items-center justify-center">
  {/* 부모 요소의 스타일을 변경하여 내용을 가운데 정렬로 고정 */}
  <div className="md: max-w-2xl lg:max-w-4xl mx-auto md: px-3 lg:px-10 ">
    <h1 className="mt-4 text-3xl md:text-4xl lg:text-6xl text-white font-extrabold leading-tight pb-5 text-center">
      Contact
    </h1>
    <p className="mt-8 custom-paragraph text-white opacity-100% text-base md:text-[15px] lg:text-[15px] font-medium">
            Xpert를 방문해주셔서 감사합니다. <br />
            Xpert 이용 중 불편했던 점이 있으셨거나 요청하고 싶은 가이드가 있으시면 자유롭게 말씀해주세요! <br />
            구체적인 문의 내용과 문의와 관련된 화면 스크린샷을 보내주시면 문제를 보다 빠르게 확인할 수 있습니다. <br />
            가이드 요청의 경우 해당 매장 키오스크 혹은 앱 화면 스크린샷을 보내주시면 CS 담당자가 더 빠르게 파악할 수 있습니다.
          </p>
        </div>
        </div>
      </section>
    </div>
  );
}



function Text() {

/*파일업로드 및 삭제*/
const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleFileDelete = () => {
    setUploadedFile(null);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setUploadedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

/*체크박스 js*/
const [showInfo, setShowInfo] = useState(false);
const [isMouseOver, setIsMouseOver] = useState(false);

const toggleInfo = () => {
  setShowInfo(!showInfo);
};

const toggleMouseOver = () => {
  setIsMouseOver(!isMouseOver);
};


/*버튼 js*/
 const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [email, setEmail] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // 체크박스 상태 추가

const handleCheckboxChange = () => {
  setIsCheckboxChecked(!isCheckboxChecked); // 체크박스 상태 토글
};

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
};

const isButtonDisabled = !title || !content || !email ;

    return (
      <div className="flex justify-center">
        <div className="contact-form  justify-center">
          <div className="title justify-center w-full">
            <label
          htmlFor="title"
          className="block mb-2 text-blue-900 text-[15px] font-bold p-1"
        >
          제목
        </label>
        <form>
            <input
              type="text"
              id="title"
              className="relative w-full md:w-[300px] lg:w-[800px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                focus:ring-blue-900 ring-opacity-50 focus:border-blue-500 block p-2.5 dark:bg-gray-700 
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="제목을 입력해주세요."
              required
              style={{
                textAlign: 'center', // 가운데 정렬
              }}
              value={title}
              onChange={handleTitleChange}
            />
          </form>
    </div>
    
        
<div class="mb-4 mt-8">
          <label
            htmlFor="title"
            className="mb-2 text-blue-900 text-[15px] font-bold p-1"
          >
            문의 내용
          </label>
          <textarea
            type="context"
            id="large-input"
            class="block w-full h-52 p-4 mt-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm sm:text-md focus:ring-blue-900 ring-opactiy-50 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="문의 내용을 자유롭게 작성해주세요."
            value={content}
            onChange={handleContentChange}
          />
        </div>
    <div className="flex items-center justify-center w-full my-4 ">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-30 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {uploadedFile ? (
            <div>
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">
                File Uploaded
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {uploadedFile.name}
              </p>
              <button
                onClick={handleFileDelete}
                className="mt-2 text-xs text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                삭제하기
              </button>
            </div>
          ) : (
            <>
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">
                Click to upload
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </>
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
    
    <label
  htmlFor="input-group-1"
  className="block mb-2 text-blue-900 text-[15px] dark:text-white"
>
  <span className="font-bold">이메일</span>
  <br />
  <span className="text-[12px] font-medium">(적어주신 이메일로 추후 연락드리고자 합니다.)</span>
</label>

<div class="relative mb-6">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
    </svg>
  </div>
  <input
            type="email"
            id="input-group-1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-800 focus:border-blue-800 border-opacity-50 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username@naver.com"
            value={email}
            onChange={handleEmailChange}
          />
</div>
<div className="flex flex-col mb-4">
      <div className="flex items-center mt-4 ">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className={`ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer ${
            (showInfo || isMouseOver) ? 'underline' : ''
          }`}
          onClick={toggleInfo}
          onMouseEnter={toggleMouseOver}
          onMouseLeave={toggleMouseOver}
        >
          개인정보 이용동의 (필수)
        </label>
      </div>
      {showInfo && (
        <div className="mt-2 text-gray-700 dark:text-gray-400">
          <p className="text-sm">
          수집된 정보는 고객님의 문의 사항을 신속하게 처리하고 해결하기 위한 목적으로만 사용됩니다. 
          <br/>문의 사항이 해결된 후, 수집된 정보는 즉시 폐기됨을 약속드립니다.
          <br/>
          개인정보의 보호와 관리는 저희 회사의 중요한 가치이며, 고객님의 개인정보를 안전하게 보호하기 위해 최선을 다하고 있습니다. 
          <br/>
          <b>* 위의 내용을 확인하였으며, 개인정보 이용약관에 동의합니다.</b>
          </p>
        </div>
      )}
    </div>
    <button
  type="submit"
  className={`w-full py-2 text-white bg-blue-500 rounded-lg transition-colors ${
    !isButtonDisabled ? 'hover:bg-blue-800 focus:ring-2 focus:ring-blue-800' : 'cursor-not-allowed opacity-50'
  }`}
  disabled={isButtonDisabled}
  onKeyDown={(event) => {
    if (event.key === 'Enter' && !isButtonDisabled) {
      // Enter 키를 눌렀을 때 버튼이 활성화된 경우 클릭 이벤트 실행
      event.preventDefault(); // 폼 전송 방지
      event.target.click(); // 버튼 클릭
    }
  }}
>
  의견 보내기
</button>
        </div>
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
        <div className="Comment w-100 h-96 relative pb-100 text-center mt-24">
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


function Contact() {
    return (
      <div class="w-full h-full">
        <div class="items-center justify-center">
          <ContactHead/>
        </div>
        <div >
          <Text/>
        </div>
        <div>
          <Slider/>
        </div>
      </div>
    );
  }
  export default Contact;