import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function About() {
  const images = [
    "carrossel1.svg",
    "carrossel2.svg",
    "carrossel3.svg",
    "carrossel4.svg",
    "carrossel5.svg",
    "carrossel6.svg",
    "carrossel7.svg"
  ];

  return (
    <div className="flex justify-center  bg-customBlue pb-40" id="about">
      <h2 className="text-white text-2x1 font-custom-righteous mt-20 mb-20 absolute text-center border-b-2 border-white inline-block">
        Sobre mim
      </h2>

      <div className="">
      <div className="flex justify-center items-center mt-52 ml-10">
        <div className=" w-[420px] h-[280px]">
          <AliceCarousel
            infinite
            autoPlay
            disableDotsControls
            disableButtonsControls
            autoPlayInterval={1500}
            items={images.map((image, index) => {
              return (
                <img
                  className="w-full h-full rounded-lg"
                  alt="Sobre Mim"
                  src={image}
                  key={index}
                />
              );
            })}
          />
        </div>
      </div>
      <p className="flex justify-center items-center text-center border-2 p-10 rounded-lg text-white font-inter font-normal text-base mt-20 ">
          Sou formada no curso técnico de Desenvolvimento de sistemas e atualmente curso graduação em Análise e  desenvolvimento de sistemas na<br />
          Unicesumar! Tenho o objetivo de me tornar uma Desenvolvedora Front-End experiente e inovadora. Sou apaixonada por criar interfaces que<br /> 
          conectam pessoas e proporcionam experiências envolventes. Embora goste de dias tranquilos e a calmaria da praia, é na intensidade da <br />
          rotina que encontro a energia para crescer e evoluir continuamente.
        </p>
      </div>
      
    </div>
  );
}

export default About;
