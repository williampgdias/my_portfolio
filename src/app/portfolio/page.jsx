"use client";

import React from "react";

import Button from "@/app/components/Button";
import HtmlCssComponent from "../components/HtmlCssComponent";
import JavascriptComponent from "../components/JavascriptComponent";
import ReactComponent from "../components/ReactComponent";

const defaultPage = "html";

const pages = {
  html: HtmlCssComponent,
  javascript: JavascriptComponent,
  react: ReactComponent,
};

export default function Portfolio() {
  const [page, setPage] = React.useState(defaultPage);

  const handleChangePage = (page) => {
    setPage(page);
  };

  const ChangePage = pages[page];

  return (
    <section className="mt-[100px] flex flex-col items-center justify-center">
      <div className="m-auto">
        <div className="flex justify-center pb-6">
          <Button text="HTML + CSS" onClick={() => handleChangePage("html")} />
          <Button
            text="Javascript"
            onClick={() => handleChangePage("javascript")}
          />
          <Button text="React" onClick={() => handleChangePage("react")} />
        </div>
        {ChangePage && <ChangePage />}
      </div>
    </section>
  );
}
