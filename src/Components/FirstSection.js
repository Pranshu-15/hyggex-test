import React from "react";
import fullScreen from '../media/fullscreen.svg'
import symbol from '../media/symbol.png'
const FirstSection = () => {
  return (
    <>
      <div className="header mt-9">
        <h1 className=" font-bold bg-gradient-to-b from-blue-950 to-blue-500 inline-block text-transparent bg-clip-text text-2xl">
          Relations and Function &#40;Mathematics&#41;
        </h1>
        <ul className="mt-5 flex justify-center lg:mr-72 md:mr-0">
          <li className="list-none mx-2 my-2 text-gray-500 cursor-pointer hover:text-blue-950 font-semibold hover:underline decoration-blue-950 hover:underline-offset-8">
            Study
          </li>
          <li className="list-none mx-2 my-2 text-gray-500 cursor-pointer hover:text-blue-950 font-semibold hover:underline decoration-blue-950 hover:underline-offset-8">
            Quiz
          </li>
          <li className="list-none mx-2 my-2 text-gray-500 cursor-pointer hover:text-blue-950 font-semibold hover:underline decoration-blue-950 hover:underline-offset-8">
            Test
          </li>
          <li className="list-none mx-2 my-2 text-gray-500 cursor-pointer hover:text-blue-950 font-semibold hover:underline decoration-blue-950 hover:underline-offset-8">
            Game
          </li>
          <li className="list-none mx-2 my-2 text-gray-500 cursor-pointer hover:text-blue-950 font-semibold hover:underline decoration-blue-950 hover:underline-offset-8">
            Others
          </li>
        </ul>
        <div className="h-60 lg:w-2/6 md:w-full bg-gradient-to-tr from-cyan-500 to-blue-800 lg:ml-72 md:ml-0 mt-6 rounded-3xl relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="white"
            className="absolute w-6 h-6 top-3 left-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 absolute top-3 right-2"
          >
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
            <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
          </svg>

          <p className="text-white text-xl font-semibold absolute top-2/4  bottom-1/2 right-1/4 lg:left-1/3 md:left-1/4 md:-z-10  ">
            9 &#32; &#43; &#32; 6 &#32; &#43; &#32; 7x &#32; &#45; &#32; 2x
            &#32; &#45; &#32;3
          </p>
        </div>
        <div className=" cursor-pointer h-14 lg:w-2/6 md:w-full lg:ml-72 md:ml-0 mt-3 flex justify-evenly">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="navy"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
              clip-rule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 bg-gradient-to-b from-blue-950 to-blue-500 inline-block rounded-3xl"
          >
            <path
              fill-rule="evenodd"
              d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <p className="font-semibold">01/10</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 bg-gradient-to-b from-blue-950 to-blue-500 inline-block rounded-3xl"
          >
            <path
              fill-rule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <img src={fullScreen} alt="full-screen" className="w-6 h-6" />
        </div>
        <div className="bottom-section flex justify-between items-center  ">
            <div className="bottom-left md:-ml-3">
        <img className="lg:h-24 md:h-28 lg:w-52 md:w-14 lg:ml-0 " src={symbol} alt="symbol" />
            </div>
        <div className="bottom-right flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="navy" className="w-6 h-6 ">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
</svg>
<p className="bg-gradient-to-b from-blue-950 to-blue-500 inline-block text-transparent bg-clip-text font-semibold">Create Flashcard</p>

        </div>

        </div>
      </div>
    </>
  );
};

export default FirstSection;
