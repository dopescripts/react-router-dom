import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-white lg:grid lg:h-screen lg:place-content-center rounded-2xl">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="max-w-prose text-left">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Understand React Router DOM
            <strong className="text-emerald-700"> and API </strong>
            with optimized loading!
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
            To make the transition faster from one component to another especially where api is called, we can use <code className="bg-emerald-900 text-white px-1">loader</code> <i>attr</i> there!
          </p>

          <div className="mt-4 flex gap-4 sm:mt-6">
            <Link className="inline-block rounded border border-emerald-600 bg-emerald-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-emerald-700" to={"/games"}>
              Get Started
            </Link>

            <a className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900" href="https://reactrouter.com/home" target="_blank">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
