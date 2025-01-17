import NavBar from "../components/Navbar/navbar";
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord, FaLongArrowAltRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import CardProject from "../components/Card/card-project";
import Footer from "../components/footer/footer";
import { ImageUrl } from "../helper/image-url";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import TitleSection from "../components/TitleSection";

export default function Home() {
  return (
    <main className='bg-background w-full flex flex-col min-h-screen'>
      <div className="h-[100vh] flex flex-col custom-intro">
        <NavBar />
        {/* Introduce */}
        <div className="flex-1 items-center relative text-white flex">
          {/* Contacts info */}
          <section className="flex flex-col gap-5 absolute left-0 bg-primary p-3">
            <MdOutlineEmail size={40}/>
            <FaDiscord size={40}/>
            <FaGithub size={40}/>
            <FaLinkedin size={40}/>
          </section>
          <div className="flex flex-col items-center gap-10 w-full">
            <h1 className="text-4xl text-center">HEY, I'M RUAN RITA</h1>
            <p className="max-w-4xl text-2xl text-center text-slate-400">A FullStack Developer with focus backend application, i build and managing websites, web application and mobile app that leads to the success of overall product</p>
            <button className="w-64 py-6 font-bold text-lg bg-cyan-500 rounded-lg">PROJECTS</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full flex flex-col px-2 sm:px-6 lg:px-8 ">       
        {/* motivation phase */}
        <div className="max-w-2xl mx-auto">
          <div className="mt-12 flex flex-col relative">
            <FaQuoteLeft className="text-white w-9 h-9 absolute -top-5 left-8 bg-background p-2"/>
            <span className="text-white border border-gray px-10 py-6">With great power comes great electricity bill</span>
            <span className="text-white border border-gray px-5 py-5 self-end border-t-0">- Dr. Who</span>
            <FaQuoteLeft className="text-white w-9 h-9 absolute top-14 right-10 bg-background p-2"/>
          </div>
        </div>
        {/* About me*/}
        <section className="my-16" id="ABOUT">
          <TitleSection title="About-me"/>
          <section className="flex justify-between gap-20">
            <div className="w-1/2">
              <p className="text-gray tracking-widest text-lg leading-6">Hello, i’m Elias!</p>
              <p className="text-gray tracking-widest text-lg leading-6 my-6">I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
              <p className="text-gray tracking-widest text-lg leading-6">Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            </div>
            <div className="w-1/2">
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-gray h-min">
                  <h1 className="text-white border-b border-gray p-2">Languages</h1>
                  <p className="p-2 text-white">Typescript <span className="mx-2"></span> JavaScript</p>
                  <p className="p-2 text-white">PHP</p>
                </div>
                <div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-white border-b border-gray p-2">Databases</h1>
                    <p className="p-2 text-white">SQLite PostgreSQL</p>
                    <p className="p-2 text-white">Mongo MySQL</p>
                    <p className="p-2 text-white">Mongo MySQL</p>
                  </div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-white border-b border-gray p-2">Databases</h1>
                    <p className="p-2 text-white">SQLite PostgreSQL</p>
                    <p className="p-2 text-white">Mongo MySQL</p>
                  </div>
                </div>
                <div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-white border-b border-gray p-2">Tools</h1>
                    <p className="p-2 text-white">VSCode Git</p>
                    <p className="p-2 text-white">Tailwind </p>
                    <p className="p-2 text-white">Tailwind </p>
                    <p className="p-2 text-white">Tailwind </p>
                  </div>
                  <div className="border border-gray h-min mb-3">
                    <h1 className="text-white border-b border-gray p-2">Tools</h1>
                    <p className="p-2 text-white">VSCode Git</p>
                    <p className="p-2 text-white">Tailwind </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* My projects */}
        <section className="my-16" id="WORK">
          <TitleSection title="Projects" link={ImageUrl("/projects")}/>
          <section className="mt-10 grid grid-cols-3 gap-8">
            <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image={ImageUrl("/project_1.png")} name="ChertNodes"/>
            <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image={ImageUrl("/project_2.png")} name="ChertNodes"/>
            <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image={ImageUrl("/project_3.jpg")} name="ChertNodes"/>
          </section>
        </section>
        {/* contacts*/}
        <section className="my-16" id="CONTACTS">
          <TitleSection title="Contacts"/>
          <section className="flex justify-between">
            <p className="w-1/2 text-gray tracking-widest leading-6 mb-6">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            <div className="border border-gray h-min">
              <h1 className="p-2 text-white">Message me here</h1>
              <span className="p-2 text-gray flex items-center">
                <FaDiscord className="mr-2 text-gray w-8 h-8"/>
                <p>ruan.ritah</p>
              </span>
              <span className="p-2 text-gray flex items-center">
                <MdOutlineEmail width={32} className="mr-2 w-8 h-8 text-gray"/>
                <p>ruan.ritah@gamil.com</p>
              </span>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </main> 
  );
}
