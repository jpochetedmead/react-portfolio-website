// src/components/Testimonials.js

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <UsersIcon className="mx-auto inline-block w-10 mb-4 text-white" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Testimonials & Recommendations
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4 mx-auto" />
                <p className="leading-relaxed mb-6 text-white">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 h-12 rounded-full object-cover object-center flex-shrink-0"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-white text-lg font-medium">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-400 text-sm uppercase">
                      {testimonial.company}
                    </span>
                    <span className="text-gray-400 text-sm uppercase">
                      {testimonial.position}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}