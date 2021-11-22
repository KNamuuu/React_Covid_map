import React, { useState, useEffect } from "react";

import {
  Seoul,
  Gyeonggi,
  Incheon,
  Gangwon,
  Chungnam,
  Chungbuk,
  Sejong,
  Daejeon,
  Gyeongnam,
  Gyeongbuk,
  Jeonbuk,
  Jeonnam,
  Ulsan,
  Busan,
  Daegu,
  Gwangju,
  Jeju,
} from "./area/all_area";
import axios from "axios";

const color = ["#e69d9c", "#dd655f", "#bb3931", "#7c160d"];

function CovidViewer({ covidData, onAreaClick }) {
  return (
    <svg width="700px" height="1000px" viewBox="0 0 800 1200">
      <Seoul
        fill={color[covidData["서울"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gyeonggi
        fill={color[covidData["경기"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gangwon
        fill={color[covidData["강원"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Incheon
        fill={color[covidData["인천"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Chungnam
        fill={color[covidData["충남"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Chungbuk
        fill={color[covidData["충북"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Sejong
        fill={color[covidData["세종"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Daejeon
        fill={color[covidData["대전"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gyeongnam
        fill={color[covidData["경남"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gyeongbuk
        fill={color[covidData["경북"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Jeonbuk
        fill={color[covidData["전북"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Jeonnam
        fill={color[covidData["전남"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Ulsan
        fill={color[covidData["울산"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Busan
        fill={color[covidData["부산"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Daegu
        fill={color[covidData["대구"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Gwangju
        fill={color[covidData["광주"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
      <Jeju
        fill={color[covidData["제주"]["level"] - 1]}
        onClick={(e) => onAreaClick(e.target.id)}
      />
    </svg>
  );
}

function CovidStatus({ area, date, level, num }) {
  return (
    <div>
      <h3>
        {area}지역 코로나 현황({date} 기준)
      </h3>
      <p>거리두기 단계 : {level}</p>
      <p>확진자 수 : {num}</p>
    </div>
  );
}

function CovidMap() {
  const [covidData, setCovidData] = useState(null); //초기값을 null로 설정해주지 않아서 useEffect안의 if문에서 null로 인식 못함..
  const [info, setInfo] = useState({
    area: "",
    level: 0,
    num: 0,
  });

  useEffect(() => {
    if (covidData !== null) {
      //초기값이 null이므로 data가 저장되어있는지 확인.
      const data = covidData.data;
    }
  }, [covidData]); //covidData값이 업데이트 될 때 마다 실행.

  const fetchData = async () => {
    let response = await axios.get("http://127.0.0.1:5000/covidData");
    setCovidData(response.data);
  };

  // async await 를 사용하면 then, catch가 필요 없다
  // const fetchData = async () => {
  //   await axios
  //     .get("http://127.0.0.1:5000/covidData")
  //     .then((response) => {
  //       setCovidData(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  useEffect(() => {
    fetchData();
  }, []); //deps에 빈 배열을 넣어 줌으로써 처음 마운트 될 때만 fetchData 실행

  const handleAreaClick = (area) => {
    setInfo({
      area: area,
      level: covidData.data[area]["level"],
      num: covidData.data[area]["num"],
    });
  };

  return (
    <div>
      <h2>Korea Covid-19 Status</h2>
      {covidData === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <CovidStatus
            area={info.area}
            date={covidData.updated_date}
            level={info.level}
            num={info.num}
          />
          <CovidViewer
            covidData={covidData.data}
            onAreaClick={handleAreaClick}
          />
        </>
      )}
    </div>
  );
}

export default CovidMap;
