import React from "react";

const Main = () => {
  return (
    <>

    {/* this is for mobile */}

    <div className="sm:hidden flex flex-row m-2 gap-3 overflow-auto">
        <div className=" bg-neutral-600 text-white font-sand rounded-xl">
          <p className="p-6 text-center w-48 h-48"><q>Hi ! i am Tofik Hidayat</q><br /> Front end developer</p>
        </div>
        <div className=" bg-neutral-600 text-white font-sand rounded-xl">
          <p className="p-6 text-center w-48 h-48"><q>Youll get over it</q> Front end developer</p>
        </div>
        <div className=" bg-neutral-600 text-white font-sand rounded-xl">
          <p className="p-6 text-center w-48 h-48"><q>Hi ! i am Tofik Hidayat</q> Front end developer</p>
        </div>
        <div className=" bg-neutral-600 text-white font-sand rounded-xl">
          <p className="p-6 text-center w-48 h-48"><q>Hi ! i am Tofik Hidayat</q> Front end developer</p>
        </div>
      </div>

      <div className=" bg-orange-200 m-2 p-2 text-center rounded-xl font-sand md:hidden">
        <h2>Welcome to My Portofolio</h2>
      </div>

      <div className="flex flex-row overflow-auto">
        <div className=" bg-neutral-700 m-3 mt-1 p-5 rounded-lg font-sand flex flex-col gap-3 h-full md:hidden">
          <h3 className=" bg-slate-100 p-2 rounded-lg text-center w-80">Books Manager With local Storage</h3>
          <div className=" bg-slate-100 p-3 rounded-lg flex flex-col gap-3">
            <div className=" flex flex-col gap-3 text-grey">
              <p>This is my first project, can be used to store your reading list also have local storage feature</p>
              <p>Link Project : <a className=" text-blue" href="https://b0oksmanager.netlify.app/">Click Here</a></p>  
            </div>
            <img className=" rounded-xl" src="src/assets/Jepretan Layar 2565-10-05 pukul 15.10.11.png" alt="image" />
          </div>
        </div>
        <div className=" bg-neutral-700 m-3 mt-1 p-5 rounded-lg font-sand flex flex-col gap-3 md:hidden">
          <h3 className=" bg-slate-100 p-2 rounded-lg text-center w-80">Whatsapp Clone</h3>
          <div className=" bg-slate-100 p-3 rounded-lg flex flex-col gap-3 h-full">
            <div className=" flex flex-col gap-3 text-slate-800">
              <p>Actually its just for fun, you can check below</p>
              <p>Link Project : <a className=" text-blue" href="https:/wacl0ne.netlify.app/">Click Here</a></p>  
            </div>
            <img className=" rounded-xl" src="src/assets/Jepretan Layar 2565-10-05 pukul 17.05.44.png" alt="image" />
          </div>
        </div>
        <div className=" bg-neutral-700 m-3 mt-1 p-5 rounded-lg font-sand flex flex-col gap-3 h-full md:hidden">
          <h3 className=" bg-slate-100 p-2 rounded-lg text-center w-80">Djamet Pulsa</h3>
          <div className=" bg-slate-100 p-3 rounded-lg flex flex-col gap-3">
            <div className=" flex flex-col gap-3 text-slate-800">
              <p>This is my first project, can be used to store your reading list also have local storage feature</p>
              <p>Link Project : <a className=" text-blue" href="https://b0oksmanager.netlify.app/">Click Here</a></p>  
            </div>
            <img className=" rounded-xl h-80 w-80" src="src/assets/Jepretan Layar 2565-11-22 pukul 15.17.10.png" alt="image" />
          </div>
        </div>

      </div>


      
    </>
  )
}

const Header = () => {
  return (
    <>

      {/* this is for mobile */}

      <div className="bg-slate-800 p-6 text-white font-sand text-3xl text-center sm:hidden sticky top-0">
      <h1>DjametCoder</h1>
      <i className="fa fa-bars absolute left-7 top-7"></i>
      </div>

      {/* this is for pc */}

      <div className="bg-slate-800 h-ma justify-end gap-4 text-white font-sand m-0 p-3 hidden md:flex">
        <h1 className="absolute left-5 text-4xl top-6">DjametCoder</h1>
        <div className="flex gap-4 text-1xl">
          <a className=" hover:bg-stone-200 hover:text-black hover:rounded-2xl p-3 m-2" href="#">Beranda</a>
          <a className=" hover:bg-stone-200 hover:text-black hover:rounded-2xl p-3 m-2" href="#">My project</a>
          <a className=" hover:bg-stone-200 hover:text-black hover:rounded-2xl p-3 m-2" href="#">Contact Me</a>
        </div>
      </div>
    </>
    
  )
}

const Portofolio = () => {
  return (
    <div className=" bg-slate-500 m-0 pb-5">
      <Header />
      <Main />   
    </div>

  )
}

const App = () => {
  return (
    <Portofolio />
  )
}

export default App;