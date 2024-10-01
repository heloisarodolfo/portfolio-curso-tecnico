
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0017E8] pb-52" id="contact">
      <h2 className="text-white text-2x1 font-custom-righteous text-center mt-10 mb-10  border-b-2 border-white inline-block">
        Contato
      </h2>
      
      {/* Descrição de Contato */}
      <div className="text-center mb-10 mt-16">
        <h4 className="text-white text-2xl font-semibold mb-4">Vamos conversar?</h4>
        <p className="text-white text-lg">
          Se você tem um projeto em mente, uma ideia interessante, ou simplesmente quer trocar uma ideia sobre desenvolvimento front-end, estou sempre aberta a novos contatos! <br />
          Entre em contato comigo pelos canais abaixo, e vamos construir algo incrível juntos!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl text-white">
        <a href="mailto:heloisacristinarodolfo@gmail.com?subject=Portf%C3%B3lio+-+Desenvolvimento+Front-End&body=Ola!+Encontrei+seu+portfolio+na+web+e+gostaria+de+conversar+com+voce.">
        <button className="bg-customBlue p-4 rounded-lg flex items-center space-x-4 pr-40">
          <img src="E-mail.svg" alt="E-mail" className="w-6" />
          <p>heloisacristinarodolfo@gmail.com</p>
        </button>
        </a>

        <a href="https://w.app/xvgk8d">
        <button className="bg-customBlue p-4 rounded-lg flex items-center space-x-4 pr-64">
          <img src="Whatsapp.svg" alt="Whatsapp" className="w-6" />
          <span>(48) 98490-8088</span>
        </button>
        </a>
        
        <a href="https://www.linkedin.com/in/heloisarodolfo/">
        <button className="bg-customBlue p-4 rounded-lg flex items-center space-x-4 pr-72">
          <img src="Linkedin.svg" alt="LinkedIn" className="w-6" />
          <span>heloisarodolfo</span>
        </button>
        </a>

        <a href="https://github.com/heloisarodolfo">
        <button className="bg-customBlue p-4 rounded-lg flex items-center space-x-4 pr-72">
          <img src="GitHub.svg" alt="GitHub" className="w-6" />
          <span>heloisarodolfo</span>
        </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
