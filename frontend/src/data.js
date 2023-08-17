const mcdonaldsLogo = './icons/mcdonalds.png';
const br =  './icons/베스킨라빈스.jpg';
const burgerking =  './icons/버거킹.jpg';
const kfc =  './icons/kfc.jpg';
const 샐러디 =  './icons/샐러디.jpeg';
const cgv =  './icons/cgv.jpg';
const 롯데시네마 =  './icons/롯데시네마.jpg';
const 공차 =  './icons/공차.jpg';
const 이디야 =  './icons/이디야.jpg';
const 투썸 =  './icons/투썸.jpg';
const 카카오택시 =  './icons/카카오택시.jpg';
const 쏘카 =  './icons/socar.jpg';
const 버스타고 =  './icons/버스타고.jpg';
const 네이버지도 =  './icons/네이버지도.jpg';
const 카카오맵 =  './icons/카카오맵.jpg';
const 구글맵 =  './icons/구글맵.jpg';
const 쿠팡 =  './icons/쿠팡.jpg';
const 배달의민족 =  './icons/배달의민족.jpg';
const 요기요 =  './icons/요기오.jpg';
const 테이블링 =  './icons/테이블링.jpg';
const catchtable =  './icons/catchtable.jpg';
const 트립닷컴 =  './icons/트립닷컴.jpg';
const 여기어때 =  './icons/여기어때.jpg';
const 야놀자 =  './icons/야놀자.jpg';
const 아고다 =  './icons/아고다.jpg';
const 티빙 =  './icons/티빙.jpg';
const 넷플릭스 =  './icons/넷플릭스.jpg';
const 국민은행 =  './icons/국민은행.jpeg';
const 우리은행 =  './icons/우리은행.jpeg';
const 신한은행 =  './icons/신한은행.jpeg';
const 농협은행 =  './icons/농협은행.png';
const 카카오페이 =  './icons/카카오페이.jpg';
const 네이버페이 =  './icons/네이버페이.jpeg';
const 토스 =  './icons/토스.jpg';

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
    setMainItems(categories) {
        return this.data.filter(item => categories.includes(item.name));
    }
  }
  

// GuideItem 클래스 인스턴스 생성

//매장 키오스크
const kf1 = new GuideItem("매장 키오스크", "패스트푸드", "맥도날드", 5,"mcdonaldsLogo",30000,1300);
const kf2 = new GuideItem("매장 키오스크", "패스트푸드", "배스킨라빈스", 4,"br",30000,1300);
const kf3 = new GuideItem("매장 키오스크", "패스트푸드", "버거킹", 4,"burgerking",30000,1300);
const kf4 = new GuideItem("매장 키오스크", "패스트푸드", "KFC", 4,"kfc",30000,1300);
const kf5 = new GuideItem("매장 키오스크", "패스트푸드", "샐러디", 4,"샐러디",30000,1300);

const km1 = new GuideItem("매장 키오스크", "영화관", "CGV", 4,"cgv",30000,1300);
const km2 = new GuideItem("매장 키오스크", "영화관", "롯데시네마", 4,"롯데시네마",30000,1300);

const kc1 = new GuideItem("매장 키오스크", "카페", "공차", 4,"공차",30000,1300);
const kc2 = new GuideItem("매장 키오스크", "카페", "이디야", 3, "이디야",30000,1300);
const kc3 = new GuideItem("매장 키오스크", "카페", "투썸플레이스", 4,"투썸",30000,1300);

//교통
const tv1 = new GuideItem("교통", "차량", "카카오택시", 5,"카카오택시",30000,1300);
const tv2 = new GuideItem("교통", "차량", "쏘카", 5, "쏘카",30000,1300);
const tv3 = new GuideItem("교통", "차량", "버스타고", 5,"버스타고",30000,1300);

const tm1 = new GuideItem("교통", "지도", "네이버지도", 5,"네이버지도",30000,1300);
const tm2 = new GuideItem("교통", "지도", "카카오맵", 5,"카카오맵",30000,1300);
const tm3 = new GuideItem("교통", "지도", "구글맵", 5,"구글맵",30000,1300);

//유틸리티
const us1 = new GuideItem("유틸리티", "쇼핑", "쿠팡", 5,"쿠팡",30000,1300);

const ud1 = new GuideItem("유틸리티", "배달", "배달의민족", 5,"배달의민족",30000,1300);
const ud2 = new GuideItem("유틸리티", "배달", "요기요", 5,"요기요",30000,1300);

const ur1 = new GuideItem("유틸리티", "예약", "테이블링", 5,"테이블링",30000,1300);
const ur2 = new GuideItem("유틸리티", "예약", "캐치테이블", 5,"catchtable",30000,1300);
const ur3 = new GuideItem("유틸리티", "예약", "트립닷컴", 5,"트립닷컴",30000,1300);
const ur4 = new GuideItem("유틸리티", "예약", "여기어때", 5,"여기어때",30000,1300);
const ur5 = new GuideItem("유틸리티", "예약", "야놀자", 5,"야놀자",30000,1300);
const ur6 = new GuideItem("유틸리티", "예약", "아고다", 5,"아고다",30000,1300);

const ue1 = new GuideItem("유틸리티", "엔터테인먼트", "티빙", 5,"티빙",30000,1300);
const ue2 = new GuideItem("유틸리티", "엔터테인먼트", "넷플릭스", 4,"넷플릭스",30000,1300);

//금융
const fm1 = new GuideItem("금융", "모바일뱅킹", "국민은행", 4,"국민은행",30000,1300);
const fm2 = new GuideItem("금융", "모바일뱅킹", "우리은행", 4,"우리은행",30000,1300);
const fm3 = new GuideItem("금융", "모바일뱅킹", "신한은행", 4,"신한은행",30000,1300);
const fm4 = new GuideItem("금융", "모바일뱅킹", "농협은행", 4,"농협은행",30000,1300);
const fm5 = new GuideItem("금융", "모바일뱅킹", "카카오뱅크", 4,"카카오페이",30000,1300);
const fm6 = new GuideItem("금융", "모바일뱅킹", "네이버페이", 4,"네이버페이",30000,1300);
const fm7 = new GuideItem("금융", "모바일뱅킹", "토스", 4,"토스",30000,1300);







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

//메인 데이터
const mainItemsdata = ["맥도날드", "cgv", "카카오택시", "쿠팡", "국민은행"];
const mainItems = storage.setMainItems(mainItemsdata);
console.log("main items:", mainItems);
 

//특정 카테고리 검색 -> 데이터 카테고리로 불러올 때 하면 좋을 듯
const kioskItems = storage.searchByCategory("매장 키오스크");
console.log("매장 키오스크:", kioskItems);
const trafficItems = storage.searchByCategory("교통");
console.log("교통:", trafficItems);
const financeItems = storage.searchByCategory("금융");
console.log("금융:", financeItems);
const utilityItems = storage.searchByCategory("유틸리티");
console.log("유틸리티:", utilityItems);

// //검색 근데 이건 다 나오는 거
const query = "맥도";
const searchResult = storage.searchData(query);
console.log("Search result for '" + query + "':", searchResult);

module.exports={
  allData: allData,
  mainItems : mainItems,
  kioskItems : kioskItems,
  trafficItems : trafficItems,
  financeItems : financeItems,
  utilityItems : utilityItems,

}