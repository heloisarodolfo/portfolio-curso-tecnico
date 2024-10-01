import { LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
   
function Home() {
  return (
    <div className="flex place-content-between " id="home">
      <div className="flex flex-col justify-cneter py-20 pb-60 ml-32 mt-28">
        <h1 className="text-white text-2x1 font-custom-righteous">Olá!</h1>
        <p className="text-white text-1x1 font-custom">Meu nome é Heloisa Rodolfo 😁</p>
        <p className="text-white text-lg font-custom">
          Designer e desenvolvedora Front-End
        </p>
      </div>
      <div>
        <img
          className="ml-64 mt-14 "
          alt="Memoji macbook"
          type="image/svg"
          src="/helo.svg"
        />
      </div>
      <div className="mr-32 mt-48">
        <a href="https://github.com/heloisarodolfo">
          <LiaGithub className="githubIcon" size={40} color="white"></LiaGithub>
        </a>
        <a href="https://www.instagram.com/heloisarodolfo/">
          <LiaInstagram
            className="instagramIcon"
            size={40}
            color="white"
          ></LiaInstagram>
        </a>
        <a href="https://www.linkedin.com/in/heloisarodolfo/">
          <LiaLinkedin
            className="linkedinIcon"
            size={40}
            color="white"
          ></LiaLinkedin>
        </a>
      </div>
    </div>
  );
}

export default Home;
