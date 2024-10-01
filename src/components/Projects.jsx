function Projects() {
  return (
    <div className="flex flex-col justify-center items-center w-full pb-60" id="projects">
      <h3 className="text-white text-2x1 font-custom-righteous text-center mt-20 mb-10  border-b-2 border-white inline-block">
        Projetos
      </h3>
      <div className="flex flex-col lg:flex-row place-content-between mt-32">
        <a href="https://www.canva.com/design/DAFnD5Ulq4g/HQHckmsCVYptJ-Q64Ibqgw/edit?utm_content=DAFnD5Ulq4g&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img
            className="h-[200px] w-[300px] rounded-md"
            alt="Ciencias da Natureza"
            src="Portfolio natureza.svg"
            id="modal"
          />
        </a>
        <a href="https://www.canva.com/design/DAFnHZ3oFKw/luP8hz6SeC1_bRBWHPRYew/edit?utm_content=DAFnHZ3oFKw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img
            className="h-[200px] w-[300px] rounded-lg"
            alt="Ciencias Humanas"
            src="Portfolio humanas.svg"
            id="modal"
          />{" "}
        </a>
        <a href="https://www.canva.com/design/DAFnHj-AxwM/uts5jABsNKG0V-4Oy71SiQ/edit?utm_content=DAFnHj-AxwM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img
            className="h-[200px] w-[300px] rounded-lg"
            alt="Matematica"
            src="Portfolio matematica.svg"
            id="modal"
          />
        </a>
        <a href="https://www.canva.com/design/DAFnHS-6Xgw/I3hL0eLqi5XSI2Dq5z2gEQ/edit?utm_content=DAFnHS-6Xgw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img
            className="h-[200px] w-[300px] rounded-lg"
            alt="Linguagens"
            src="Portfolio linguagens.svg"
            id="modal"
          />
        </a>
        <a href="https://www.canva.com/design/DAFxg4YCkl4/DclLSgvn4k4z2oaMzE_D2A/edit?utm_content=DAFxg4YCkl4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img
            className="h-[200px] w-[300px] rounded-lg"
            alt="Técnico"
            src="Portfolio tecnico.svg"
            id="modal"
          />
        </a>
      </div>
    </div>
  );
}

export default Projects;
