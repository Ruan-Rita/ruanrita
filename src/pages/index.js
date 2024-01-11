import NavBar from "../components/Navbar/navbar";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
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
                  <Image width={176} height={176} src="RuanRita/logo_.png"></Image>
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
          <div className="mt-12 flex flex-col">
            <span className="text-white border border-gray px-10 py-6">With great power comes great electricity bill</span>
            <span className="text-white border border-gray px-5 py-5 self-end">- Dr. Who</span>
          </div>
        </div>
        {/* My projects */}
        <section className="my-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Projects</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <ChevronDoubleRightIcon className="text-white" width={20}/>
            </div>
          </div>
          <section className="my-16 grid grid-cols-3 gap-8">
            <div className="border-2 border-gray">
              <img src="/RuanRita/project_1.png" className="w-full h-[230px] object-cover block" />
              <p className="p-4 border-b-2 text-gray border-gray">HTML CSS JS PHP LARAVEL TAILwind</p>  
              <div className="p-4">
                <h1 className="text-white font-bold">ChertNodes</h1>
                <p className="text-white min-h-14">minecraft servers hosting</p>
                <div>
                  <button className="border w-24 mr-4 border-primary px-5 py-2 text-white">Live</button>
                  <button className="border w-24 border-gray px-5 py-2 text-white">Cached</button>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray">
              <img src="/RuanRita/project_2.png" className="w-full h-[230px] object-cover block" />
              <p className="p-4 border-b-2 text-gray border-gray">HTML CSS JS PHP LARAVEL TAILwind</p>  
              <div className="p-4">
                <h1 className="text-white font-bold">ChertNodes</h1>
                <p className="text-white min-h-14">minecraft servers hosting</p>
                <div>
                  <button className="border w-24 mr-4 border-primary px-5 py-2 text-white">Live</button>
                  <button className="border w-24 border-gray px-5 py-2 text-white">Cached</button>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray">
              <img src="/RuanRita/project_3.jpg" className="w-full h-[230px] object-cover block" />
              <p className="p-4 border-b-2 text-gray border-gray">HTML CSS JS PHP LARAVEL TAILwind</p>  
              <div className="p-4">
                <h1 className="text-white font-bold">ChertNodes</h1>
                <p className="text-white min-h-14">minecraft servers hosting</p>
                <div>
                  <button className="border w-24 mr-4 border-primary px-5 py-2 text-white">Live</button>
                  <button className="border w-24 border-gray px-5 py-2 text-white">Cached</button>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* My skills */}
        <section className="my-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Skills</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <ChevronDoubleRightIcon className="text-white" width={20}/>
            </div>
          </div>
          <section className="h-[500px] flex justify-between">
            <div></div>
            <div className="grid grid-cols-3">
              <div className="p-3">
                <h1>Languages</h1>
                <p>Typescript JavaScript</p>
                <p>PHP</p>
              </div>
              <div>
                <h1>Databases</h1>
                <p>SQLite PostgreSQL</p>
                <p>Mongo MySQL</p>
              </div>
              <div>
                <h1>Tools</h1>
                <p>VSCode Git</p>
                <p>Tailwind </p>
              </div>
            </div>
          </section>
        </section>
        {/* About me*/}
        <section className="my-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> About-me</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <ChevronDoubleRightIcon className="text-white" width={20}/>
            </div>
          </div>
          <section className="h-[500px] flex justify-between">
            <div></div>
            <div className="grid grid-cols-3">
              <div className="p-3">
                <h1>Languages</h1>
                <p>Typescript JavaScript</p>
                <p>PHP</p>
              </div>
              <div>
                <h1>Databases</h1>
                <p>SQLite PostgreSQL</p>
                <p>Mongo MySQL</p>
              </div>
              <div>
                <h1>Tools</h1>
                <p>VSCode Git</p>
                <p>Tailwind </p>
              </div>
            </div>
          </section>
        </section>
        {/* contacts*/}
        <section className="my-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Contacts</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <ChevronDoubleRightIcon className="text-white" width={20}/>
            </div>
          </div>
          <section className="h-[500px] flex justify-between">
            <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            <div className="border border-gray p-4">
              <h1>Message me here</h1>
              <span className="block">
                <p>ruan.ritah</p>
              </span>
              <span className="block">
                <p>ruan.ritah@gamil.com</p>
              </span>
            </div>
          </section>
        </section>
          
      </div>
    </main>
  );
}
