// src/components/About.js
//
import React from "react";
//
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Julio Pochet Edmead.
            <br/>
            Software Developer with a passion for building amazing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm a highly motivated and skilled Software Developer with an associate degree in Software Engineering from Thaddeus Stevens College of Technology and currently pursuing a bachelor's degree in Information Technology from Central Penn College. I have a strong focus on frontend development and a proven ability to quickly learn and effectively implement new technologies. With my attention to detail and commitment to creating visually appealing and scalable software solutions, I am dedicated to developing innovative solutions and solving problems using my strong problem-solving and project management skills.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
