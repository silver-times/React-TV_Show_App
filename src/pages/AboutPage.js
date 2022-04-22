import React from "react";

const AboutPage = () => {
  return (
    <div className="w-[800px] h-[100vh] m-auto  flex flex-col text-center justify-around">
      <div>
        <h1 className="text-2xl mb-4">
          This website is based on following techstack:
        </h1>
        <ul className="uppercase text-sm">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>TailwindCSS</li>
          <li>React</li>
          <li>Context-Api</li>
          <li>Axios</li>
          <li>TVmaze API</li>
          <li>React Router</li>
        </ul>
      </div>
      <div>
        <h1 className="text-sm mb-4 font-bold">Made by Rajat Sharma</h1>
      </div>
    </div>
  );
};

export default AboutPage;
