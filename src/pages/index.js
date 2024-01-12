import { ChevronDoubleRightIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import NavBar from "../components/Navbar/navbar";
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
          <section className="mt-10 grid grid-cols-3 gap-8">
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
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Skills</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <ChevronDoubleRightIcon className="text-white" width={20}/>
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
        <section className="my-16">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> About-me</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <ChevronDoubleRightIcon className="text-white" width={20}/>
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
        <section className="my-16">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold mr-12"><b className="text-primary">#</b> Contacts</h1>
              <hr className="bg-primary border-primary w-80"></hr>
            </div>
            <div className="flex items-center">
              <h1 className="text-white mr-2">View all</h1>
              <ChevronDoubleRightIcon className="text-white" width={20}/>
            </div>
          </div>
          <section className="flex justify-between">
            <p className="w-1/2 text-gray tracking-widest leading-6 mb-6">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
            <div className="border border-gray h-min">
              <h1 className="p-2 text-white">Message me here</h1>
              <span className="p-2 text-gray flex align-middle">
                <svg width="32px" height="32px" viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg"  className="mr-2 fill-gray">
                  <g>
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill-rule="nonzero"></path>
                  </g>
                </svg>
                <p>ruan.ritah</p>
              </span>
              <span className="p-2 text-gray flex align-middle">
                <EnvelopeIcon width={32} className="mr-2 text-gray"/>
                <p>ruan.ritah@gamil.com</p>
              </span>
            </div>
          </section>
        </section>
      </div>

      <section className="border-t border-gray py-16">
        <div className="max-w-7xl mx-auto w-full flex flex-col px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-white text-xl inline mr-5">RuanRita</h1>
              <span className="text-gray">ruan.ritah@gmail.com</span>
              <p className="text-white mt-2">Back-end developer and Front-end developer</p>
            </div>
            <div>
              <h1 className="text-white text-2xl">Media</h1>
              <div className="flex gap-3 mt-5">
                <svg width="32px" height="32px" viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg"  className="mr-2 fill-gray">
                  <g>
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill-rule="nonzero"></path>
                  </g>
                </svg>
                <svg width="32px" height="32px" viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg"  className="mr-2 fill-gray">
                  <g>
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill-rule="nonzero"></path>
                  </g>
                </svg>
                <svg width="32px" height="32px" viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg"  className="mr-2 fill-gray">
                  <g>
                    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill-rule="nonzero"></path>
                  </g>
                </svg>
              </div>
              
            </div>
          </div>
          <h1 className="text-center text-gray text-lg mt-16">© Copyright 2022. Made by RuanRita</h1>
        </div>
      </section>
    </main> 
  );
}
