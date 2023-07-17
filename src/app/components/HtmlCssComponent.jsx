import React from "react";
import Card from "@/app/components/Card";

// PORTFOLIO IMAGES
import bikCraft from "../assets/img/bikcraft.png";
import seppo from "../assets/img/seppo.png";
import beasts from "../assets/img/fantastic-beasts.png";

export default function HtmlCss() {
  return (
    <div className="m-auto mb-12 grid grid-cols-3 gap-4">
      <Card
        name="BikCraft"
        image={bikCraft}
        link="https://williampgdias.github.io/bikcraft/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
      <Card
        name="Seppo"
        image={seppo}
        link="https://williampgdias.github.io/landing-page-seppo/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
      <Card
        name="Fantastic Beasts"
        image={beasts}
        link="https://williampgdias.github.io/fantastic-beasts/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
    </div>
  );
}
