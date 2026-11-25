import { useState } from "react";

function App() {
  return (
    <>
      <header>
        <div className="flex justify-center">
          <nav className="flex justify-start font-normal place-items-center rounded-2xl shadow translate-y-5 w-full max-w-4xl mx-auto px-4 sm:gap-25 md:gap-34 lg:gap-34 py-1.5 flex-wrap">
            <a
              className="transition-all duration-500 ease-out hover:scale-110 hover:font-semibold"
              href=""
            >
              Home
            </a>

            <a
              className="transition-all duration-500 ease-out hover:scale-110 hover:font-semibold"
              href=""
            >
              Services
            </a>

            <a
              className="transition-all duration-500 ease-out hover:scale-110 hover:font-semibold"
              href=""
            >
              About Me
            </a>

            <a
              className="transition-all duration-500 ease-out hover:scale-110 hover:font-semibold"
              href=""
            >
              Portfolio
            </a>

            <a
              className="transition-all duration-500 ease-out hover:scale-110 hover:font-semibold"
              href=""
            >
              Contact Me
            </a>
          </nav>
        </div>
      </header>

      <main>
        <div className="flex items-center justify-start h-screen">
          <div className="flex flex-col items-start justify-start p-0 gap-4 box-content w-65 h-115 translate-x-15 ">
            <div className="text-black text-opacity-50">Hi, Im HIM!</div>
          </div>          
        </div>

      </main>
    </>
  );
}

export default App;
