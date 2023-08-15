import mcdonaldsLogo from './icons/mcdonalds.png';
import br from  './icons/베스킨라빈스.jpg';
import burgerking from  './icons/버거킹.jpg';
import kfc from  './icons/kfc.jpg';
import 샐러디 from  './icons/샐러디.jpeg';
import cgv from  './icons/cgv.jpg';
import 롯데시네마 from  './icons/롯데시네마.jpg';
import 공차 from  './icons/공차.jpg';
import 이디야 from  './icons/이디야.jpg';
import 투썸 from  './icons/투썸.jpg';
import 카카오택시 from  './icons/카카오택시.jpg';
import 쏘카 from  './icons/socar.jpg';
import 버스타고 from  './icons/버스타고.jpg';
import 네이버지도 from  './icons/네이버지도.jpg';
import 카카오맵 from  './icons/카카오맵.jpg';
import 구글맵 from  './icons/구글맵.jpg';
import 쿠팡 from  './icons/쿠팡.jpg';
import 배달의민족 from  './icons/배달의민족.jpg';
import 요기오 from  './icons/요기오.jpg';
import 테이블링 from  './icons/테이블링.jpg';
import catchtable from  './icons/catchtable.jpg';
import 트립닷컴 from  './icons/트립닷컴.jpg';
import 여기어때 from  './icons/여기어때.jpg';
import 야놀자 from  './icons/야놀자.jpg';
import 아고다 from  './icons/아고다.jpg';
import 티빙 from  './icons/티빙.jpg';
import 넷플릭스 from  './icons/넷플릭스.jpg';
import 국민은행 from  './icons/국민은행.jpeg';
import 우리은행 from  './icons/우리은행.jpeg';
import 신한은행 from  './icons/신한은행.jpeg';
import 농협은행 from  './icons/농협은행.jpeg';
import 카카오페이 from  './icons/카카오페이.jpeg';
import 네이버페이 from  './icons/네이버페이.jpeg';
import 토스 from  './icons/토스.jpeg';

class GuideItem {
    constructor(category, subcategory, name, level, image,view, like) {
      this.category = category;
      this.subcategory = subcategory;
      this.name = name;
      this.level = level;
      this.image = image;
      this.view = view;
      this.like = like;
    }
  }
  
class DataStorage {
    constructor() {
        this.data = [];
    }
  
    addData(item) {
        this.data.push(item);
    }
    searchData(query) {
        return this.data.filter(item => {
            return (
                item.category.includes(query) ||
                item.subcategory.includes(query) ||
                item.name.includes(query) ||
                item.level.toString().includes(query)
                
                );
            });
    }
  
    getAllData() {
        return this.data;
    }

    searchByCategory(category) {
        return this.data.filter(item => item.category === category);
      }
  }
  

// GuideItem 클래스 인스턴스 생성

//매장 키오스크
const kf1 = new GuideItem("매장 키오스크", "패스트푸드", "맥도날드", 5,mcdonaldsLogo,30000,1300);
const kf2 = new GuideItem("매장 키오스크", "패스트푸드", "배스킨라빈스", 4,br,30000,1300);
const kf3 = new GuideItem("매장 키오스크", "패스트푸드", "버거킹", 4,burgerking,30000,1300);
const kf4 = new GuideItem("매장 키오스크", "패스트푸드", "KFC", 4,kfc,30000,1300);
const kf5 = new GuideItem("매장 키오스크", "패스트푸드", "샐러디", 4,샐러디,30000,1300);

const km1 = new GuideItem("매장 키오스크", "영화관", "CGV", 4,cgv,30000,1300);
const km2 = new GuideItem("매장 키오스크", "영화관", "롯데시네마", 4,롯데시네마,30000,1300);

const kc1 = new GuideItem("매장 키오스크", "카페", "공차", 4,공차,30000,1300);
const kc2 = new GuideItem("매장 키오스크", "카페", "이디야", 3, 이디야,30000,1300);
const kc3 = new GuideItem("매장 키오스크", "카페", "투썸플레이스", 4,투썸,30000,1300);

//교통
const tv1 = new GuideItem("교통", "차량", "카카오택시", 5,카카오택시,30000,1300);
const tv2 = new GuideItem("교통", "차량", "쏘카", 5, 쏘카,30000,1300);
const tv3 = new GuideItem("교통", "차량", "버스타고", 5,버스타고,30000,1300);

const tm1 = new GuideItem("교통", "지도", "네이버지도", 5,네이버지도,30000,1300);
const tm2 = new GuideItem("교통", "지도", "카카오맵", 5,카카오맵,30000,1300);
const tm3 = new GuideItem("교통", "지도", "구글맵", 5,구글맵,30000,1300);

//유틸리티
const us1 = new GuideItem("유틸리티", "쇼핑", "쿠팡", 5,쿠팡,30000,1300);

const ud1 = new GuideItem("유틸리티", "배달", "배달의민족", 5,배달의민족,30000,1300);
const ud2 = new GuideItem("유틸리티", "배달", "요기요", 5,요기오,30000,1300);

const ur1 = new GuideItem("유틸리티", "예약", "테이블링", 5,테이블링,30000,1300);
const ur2 = new GuideItem("유틸리티", "예약", "캐치테이블", 5,catchtable,30000,1300);
const ur3 = new GuideItem("유틸리티", "예약", "트립닷컴", 5,트립닷컴,30000,1300);
const ur4 = new GuideItem("유틸리티", "예약", "여기어때", 5,여기어때,30000,1300);
const ur5 = new GuideItem("유틸리티", "예약", "야놀자", 5,야놀자,30000,1300);
const ur6 = new GuideItem("유틸리티", "예약", "아고다", 5,아고다,30000,1300);

const ue1 = new GuideItem("유틸리티", "엔터테인먼트", "티빙", 5,티빙,30000,1300);
const ue2 = new GuideItem("유틸리티", "엔터테인먼트", "넷플릭스", 4,넷플릭스,30000,1300);

//금융
const fm1 = new GuideItem("금융", "모바일뱅킹", "국민은행", 4,국민은행,30000,1300);
const fm2 = new GuideItem("금융", "모바일뱅킹", "우리은행", 4,우리은행,30000,1300);
const fm3 = new GuideItem("금융", "모바일뱅킹", "신한은행", 4,신한은행,30000,1300);
const fm4 = new GuideItem("금융", "모바일뱅킹", "농협은행", 4,농협은행,30000,1300);
const fm5 = new GuideItem("금융", "모바일뱅킹", "카카오뱅크", 4,카카오페이,30000,1300);
const fm6 = new GuideItem("금융", "모바일뱅킹", "네이버페이", 4,네이버페이,30000,1300);
const fm7 = new GuideItem("금융", "모바일뱅킹", "토스", 4,토스,30000,1300);







// 데이터 저장을 위한 DataStorage 클래스 인스턴스 생성
const storage = new DataStorage();
  
// 데이터 추가
//매장 키오스크 데이터 추가
storage.addData(kf1);
storage.addData(kf2);
storage.addData(kf3);
storage.addData(kf4);
storage.addData(kf5);
storage.addData(km1);
storage.addData(km2);
storage.addData(kc1);
storage.addData(kc2);
storage.addData(kc3);

//교통 데이터 추가
storage.addData(tv1);
storage.addData(tv2);
storage.addData(tv3);
storage.addData(tm1);
storage.addData(tm2);
storage.addData(tm3);

//유틸리티 데이터 추가
storage.addData(us1);
storage.addData(ud1);
storage.addData(ud2);
storage.addData(ur1);
storage.addData(ur2);
storage.addData(ur3);
storage.addData(ur4);
storage.addData(ur5);
storage.addData(ur6);
storage.addData(ue1);
storage.addData(ue2);

//금융 데이터 추가
storage.addData(fm1);
storage.addData(fm2);
storage.addData(fm3);
storage.addData(fm4);
storage.addData(fm5);
storage.addData(fm6);
storage.addData(fm7);


// 모든 데이터 불러오기
const allData = storage.getAllData();
console.log("All data:", allData);
 

//특정 카테고리 검색 -> 데이터 카테고리로 불러올 때 하면 좋을 듯
const financeItems = storage.searchByCategory("금융");
console.log("금융:", financeItems);

// //검색 근데 이건 다 나오는 거
const query = "맥도";
const searchResult = storage.searchData(query);
console.log("Search result for '" + query + "':", searchResult);

