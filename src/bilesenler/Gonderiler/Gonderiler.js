import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const { gonderiyiBegenCB, gonderilerProp } = props;

  return (
    <div className="posts-container-wrapper">
      {gonderilerProp.map((gonderi, ind) => {
        return (
          <Gonderi
            gonderi={gonderi}
            gonderiyiBegen={gonderiyiBegenCB}
            key={ind}
          />
        );
      })}

      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
