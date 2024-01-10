import NavBar from "../components/Navbar/navbar";
import logo from '../../public/logo_.png'
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
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
                  <img src="/logo_.png" className="w-44 h-w-44"></img>
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
        </section>

      </div>
    </main>
  );
}
