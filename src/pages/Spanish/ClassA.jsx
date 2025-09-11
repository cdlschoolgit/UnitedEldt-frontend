import "./ClassA.css"
import bannerimage from "../../components/Home/images/Selo.svg"
function ClassA() {



  const scrollup = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="coverofallreview">
      <div className="imageforbannerclassa">
        <img className="rotate-image" src={bannerimage} alt="imageofall" />
      </div>
      <div className="cover_of_classA">

        <div className="desc_class_a">
          <span className="descontent">Pase su CDL GARANTIZADO!  </span>
          <svg width="55" height="55" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M42.1668 23H34.5002L28.7502 40.25L17.2502 5.75L11.5002 23H3.8335" stroke="#2C292A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </div>
        <div className="title_class_a">
        Curso certificado por el FMCSA, empiece hoy!
        </div>
        <div className="descofclassAtitle">
        Obtenga rápidamente su CDL con el sistema comprobado de United ELDT. Más de 10,000 estudiantes han completado con éxito su entrenamiento teórico de ELDT        </div>
        <div className="bottomborder"></div>
        <div className="covbutton">
        <div className="button_a" style={{width:"86px",background:"#fff"}}>
          50% OFF
        </div></div>
        <svg className="linesvg" xmlns="http://www.w3.org/2000/svg" width="85" height="2" viewBox="0 0 85 2" fill="none">
          <path d="M85 1L2.86102e-06 1" stroke="url(#paint0_linear_3693_14084)" />
          <defs>
            <linearGradient id="paint0_linear_3693_14084" x1="6.35906e-07" y1="1.50005" x2="77.6953" y2="1.49995" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FF3030" />
              <stop offset="1" stop-color="#FF3030" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="priceofclassa">

          $100.00
        </div>
        <div className="Main_price_area" style={{textAlign:"left",top:"0px"}}>
          $50.00
        </div>
        <div className="BuyNowforclassA" onClick={scrollup}>
        Compra Ahora
        </div>
      </div>
      
    </div>
  )
}
export default ClassA;