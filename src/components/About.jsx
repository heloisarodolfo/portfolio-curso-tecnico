import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function About() {
  const images = [
    "furacao2000.jpg",
    "senaiufsc.jpg",
    "senai3A.jpg",
    "furacoessaojose.jpg",
  ];

  return (
    <div className="flex justify-center" id="about">
      <h2 className="text-blue-600 text-2x1 font-custom-righteous mt-20 mb-20 absolute">
        Sobre mim
      </h2>
      <div className="flex">
      <div className="flex flex-col lg:flex-row justify-center items-center w-[1200px] h-[520px] bg-gray-200 bg-opacity-60 rounded-lg mt-52 ml-10">
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
        <p className="m-10 text-blue-600 font-inter font-normal text-base">
          Eu nasci em Florianópolis, tenho 18 anos e sou estudante do Senai! <br />
          Atualmente estou no 3º ano do ensino médio, cursando também o curso <br />
          técnico integrado em análise e desenvolvimento de sistemas.
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;
