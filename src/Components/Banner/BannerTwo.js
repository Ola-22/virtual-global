import React from "react";
import Social from "../Social";
import * as S from "./BannerStyle";

function BannerTwo() {
  return (
    <S.bannerContainer>
      <div className="box-one">
        <p>If so, you are welcome to join the Virtual</p>
        <p>Global State (VGS)</p>
        <div className="flag-box">
          <img src="/images/Flag.png" alt="flag" width="152" height="160" />
          <h1>The Virtual State (VGS)</h1>
          <div>
            <h4>name:</h4>
            <p>Virland</p>
          </div>
          <div>
            <h4>capital:</h4>
            <p>Virheart</p>
          </div>
          <div>
            <h4>language</h4>
            <p>Virlish</p>
          </div>
          <div>
            <h4>Nationality:</h4>
            <p>Virlan</p>
          </div>
          <div>
            <h4>Area:</h4>
            <p>Earth surface</p>
          </div>
          <div>
            <h4>population:</h4>
            <p>Up to 8 billion</p>
          </div>
        </div>
      </div>

      <div className="box-one">
        <p>and get its virtual citizenship! It is free and</p>
        <p>does not conflict with your real nationality.</p>
        <div className="virtual">
          <div>
            <img src="/images/virtual-id.png" alt="virtual id" />
          </div>
        </div>
      </div>
      <S.NumberVirtual>
        <div className="number-citizens">
          <h4>NUMBER of VIRTUAL Citizens</h4>
          <h2>1,115,887</h2>
        </div>
        <Social />
      </S.NumberVirtual>
    </S.bannerContainer>
  );
}

export default BannerTwo;
