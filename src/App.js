/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import "./App.css";
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gonderiler from "./bilesenler/Gonderiler/Gonderiler";
import sahteVeri from "./sahte-veri";

const App = () => {
  // Gönderi nesneleri dizisini tutmak için "gonderiler" adlı bir state oluşturun, **sahteVeri'yi yükleyin**.
  // Artık sahteVeri'ye ihtiyacınız olmayacak.
  // Arama çubuğunun çalışması için , arama kriterini tutacak başka bir state'e ihtiyacımız olacak.
  const [aramaKriteri, setAramaKriteri] = useState("asasasfasffas");
  const [gonderiler, setGonderiler] = useState(sahteVeri);
  const gonderiyiBegen = (gonderiID) => {
    console.log("gonderiyiBegen tetiklendi", gonderiID);

    const gonderiyiBegen = (gonderiID) => {
      setGonderiler(
        gonderiler.map((item) => {
          if (gonderiID === item.id) {
            item.likes++;
          }
          return item;
        })
      );
    };
  };
  return (
    <div className="App">
      <AramaCubugu term={aramaKriteri} setTermCB={setAramaKriteri} />
      <Gonderiler
        gonderilerProp={gonderiler}
        gonderiyiBegenCB={gonderiyiBegen}
      />
      {/* Yukarıdaki metni projeye başladığınızda silin*/}
      {/* AramaÇubuğu ve Gönderiler'i render etmesi için buraya ekleyin */}
      {/* Her bileşenin hangi proplara ihtiyaç duyduğunu kontrol edin, eğer ihtiyaç varsa ekleyin! */}
    </div>
  );
};

export default App;
