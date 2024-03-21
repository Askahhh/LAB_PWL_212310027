import React from "react";
import MyBio from "./MyBio";

export default function MyProfile() {
  const myData = {
    name: "Muhammad Askah",
    age: 21,
  };

  const ClickMe = ({ onClickBtn, children }) => {
    return (
      <button onClick={onClickBtn} type="button">
        {children}
      </button>
    );
  };

  const HandlerHitme = () => {
    alert("Anda telah mengetuk saya");
  };

  return (
    <div>
      <MyBio {...myData} />
      <ClickMe onClickBtn={HandlerHitme}>ClickMe</ClickMe>
    </div>
  );
}
