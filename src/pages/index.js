import Image from "next/image";
import NavBar from "../components/Navbar/navbar";
import { MdOutlineEmail } from "react-icons/md";
import { FaDiscord, FaLongArrowAltRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import CardProject from "../components/Card/card-project";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <main className='bg-background w-full flex flex-col min-h-screen'>
      <NavBar />
      <div className="max-w-7xl mx-auto w-full flex flex-col px-2 sm:px-6 lg:px-8 "> 
        {/* Introduce */}
        <div className="h-[500px] items-center relative text-white flex">
          <div className="flex justify-between w-full">
            <div className="w-full">
              <h1 className="text-2xl font-bold max-w-[530px]">RuanRita is a <span className="text-primary">back-end developer</span> and <span className="text-primary">front-end developer</span></h1>
              <p className="text-base text-gray my-8">He crafts responsive websites where technologies meet creativity</p>
              <button className="border border-primary px-5 py-2 text-white">Contact me !!</button>
            </div>
            <div className="w-full flex justify-center">
              <div>
                <div className="block mx-auto bg-primary w-44 h-w-44 rounded-full">
                  <Image width={176} height={176} src="/RuanRita/logo_.png"></Image>
                </div>
                <div className="mt-12">
                  <div className="w-max flex items-center p-2 border border-gray pr-5 ">
                    <span className="w-5 h-5 mr-2 bg-primary"></span>
                    <span className="text-gray">Currently working on <b className="text-white">CambioReal</b></span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* Current Working on cambioreal */}
        
        {/* motivation phase */}
        <div className="max-w-2xl mx-auto">
          <div className="mt-12 flex flex-col relative">
            <FaQuoteLeft className="text-white w-9 h-9 absolute -top-5 left-8 bg-background p-2"/>
            <span className="text-white border border-gray px-10 py-6">With great power comes great electricity bill</span>
            <span className="text-white border border-gray px-5 py-5 self-end border-t-0">- Dr. Who</span>
            <FaQuoteLeft className="text-white w-9 h-9 absolute top-14 right-10 bg-background p-2"/>
          </div>
        </div>
        {/* My projects */}
        <section className="my-16" id="WORK">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Projects</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <a href="/RuanRita/projects">
                <h1 className="text-white mr-2">View all</h1>
              </a>
              <FaLongArrowAltRight className="text-white" width={20}/>
            </div>
          </div>
          <section className="mt-10 grid grid-cols-3 gap-8">
            <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image="/RuanRita/project_1.png" name="ChertNodes"/>
            <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image="/RuanRita/project_2.png" name="ChertNodes"/>
            <CardProject title="HTML CSS JS PHP LARAVEL TAILwind" description="minecraft servers hosting" image="/RuanRita/project_3.jpg" name="ChertNodes"/>
          </section>
        </section>
        {/* My skills */}
        <section className="my-16">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Skills</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <FaLongArrowAltRight className="text-white" width={20}/>
            </div>
          </div>
          <section className="flex justify-between">
            <div className="w-1/2">
              <img src="/RuanRita/developer.webp" className="w-full object-contain max-h-72 object-left"/>
            </div>
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
          </section>
        </section>
        {/* About me*/}
        <section className="my-16" id="ABOUT">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> About-me</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <FaLongArrowAltRight className="text-white" width={20}/>
            </div>
          </div>
          <section className="flex justify-between gap-5">
            <div className="w-1/2">
              <p className="text-gray tracking-widest leading-6">Hello, i’m Elias!</p>
              <p className="text-gray tracking-widest leading-6 my-6">I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.</p>
              <p className="text-gray tracking-widest leading-6">Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
            </div>
            <div className="w-1/2">
              <img src="/RuanRita/developer_1.webp" className="w-full object-contain max-h-72 object-right"/>
            </div>
          </section>
        </section>
        {/* contacts*/}
        <section className="my-16" id="CONTACTS">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Contacts</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <FaLongArrowAltRight className="text-white" width={20}/>
            </div>
          </div>
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
