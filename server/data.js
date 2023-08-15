import mcdonaldsLogo from './icon/mcdonalds.png';
import br from  './icon/베스킨라빈스.jpg';
import burgerking from  './icon/버거킹.jpg';




class GuideItem {
    constructor(category, subcategory, name, level, image) {
      this.category = category;
      this.subcategory = subcategory;
      this.name = name;
      this.level = level;
      this.image = image;
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
const kf1 = new GuideItem("매장 키오스크", "패스트푸드", "맥도날드", 5,mcdonaldsLogo);
const kf2 = new GuideItem("매장 키오스크", "패스트푸드", "배스킨라빈스", 4,br);
const kf3 = new GuideItem("매장 키오스크", "패스트푸드", "버거킹", 4,burgerking);
const kf4 = new GuideItem("매장 키오스크", "패스트푸드", "KFC", 4);
const kf5 = new GuideItem("매장 키오스크", "패스트푸드", "샐러디", 4);

const km1 = new GuideItem("매장 키오스크", "영화관", "CGV", 4);
const km2 = new GuideItem("매장 키오스크", "영화관", "롯데시네마", 4);

const kc1 = new GuideItem("매장 키오스크", "카페", "공차", 4);
const kc2 = new GuideItem("매장 키오스크", "카페", "이디야", 3);
const kc3 = new GuideItem("매장 키오스크", "카페", "투썸플레이스", 4);

//교통
const tv1 = new GuideItem("교통", "차량", "카카오택시", 5);
const tv2 = new GuideItem("교통", "차량", "쏘카", 5);
const tv3 = new GuideItem("교통", "차량", "버스타고", 5);

const tm1 = new GuideItem("교통", "지도", "네이버지도", 5);
const tm2 = new GuideItem("교통", "지도", "카카오맵", 5);
const tm3 = new GuideItem("교통", "지도", "구글맵", 5);

//유틸리티
const us1 = new GuideItem("유틸리티", "쇼핑", "쿠팡", 5);

const ud1 = new GuideItem("유틸리티", "배달", "배달의민족", 5);
const ud2 = new GuideItem("유틸리티", "배달", "요기요", 5);

const ur1 = new GuideItem("유틸리티", "예약", "테이블링", 5);
const ur2 = new GuideItem("유틸리티", "예약", "캐치테이블", 5);
const ur3 = new GuideItem("유틸리티", "예약", "트립닷컴", 5);
const ur4 = new GuideItem("유틸리티", "예약", "여기어때", 5);
const ur5 = new GuideItem("유틸리티", "예약", "야놀자", 5);
const ur6 = new GuideItem("유틸리티", "예약", "아고다", 5);

const ue1 = new GuideItem("유틸리티", "엔터테인먼트", "티빙", 5);
const ue2 = new GuideItem("유틸리티", "엔터테인먼트", "넷플릭스", 4);

//금융
const fm1 = new GuideItem("금융", "모바일뱅킹", "국민은행", 4);
const fm2 = new GuideItem("금융", "모바일뱅킹", "우리은행", 4);
const fm3 = new GuideItem("금융", "모바일뱅킹", "신한은행", 4);
const fm4 = new GuideItem("금융", "모바일뱅킹", "농협은행", 4);
const fm5 = new GuideItem("금융", "모바일뱅킹", "카카오뱅크", 4);
const fm6 = new GuideItem("금융", "모바일뱅킹", "네이버페이", 4);
const fm7 = new GuideItem("금융", "모바일뱅킹", "토스", 4);







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

