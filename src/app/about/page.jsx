import React from "react";

export default function Page() {
  return (
    <main className="align-center flex h-fullHeight flex-col justify-center">
      <div className="m-auto max-w-screen-lg">
        <div className="grid grid-flow-col grid-cols-3">
          <div className="col-span-2 flex flex-col justify-center pt-5">
            <h1 className="before:transition-200 flex items-center text-5xl before:mr-2 before:inline-block before:h-2 before:w-3 before:bg-white before:transition-width before:delay-0 before:ease-linear before:content-[''] before:hover:w-[24px]">
              about me.
            </h1>
            <p className="px-5 pt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
              libero laboriosam, aut quod excepturi eaque maxime qui accusantium
              doloremque? Officiis reiciendis blanditiis esse nisi alias
              quisquam accusantium nam ducimus mollitia!
            </p>
            <p className="px-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
              libero laboriosam, aut quod excepturi eaque maxime qui accusantium
              doloremque? Officiis reiciendis blanditiis esse nisi alias
              quisquam accusantium nam ducimus mollitia!
            </p>
          </div>
          <div className="relative z-10 m-0 pl-20">
            <h1>SKILLS</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
