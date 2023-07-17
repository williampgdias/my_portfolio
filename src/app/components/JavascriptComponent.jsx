import React from "react";
import Card from "@/app/components/Card";

// IMPORT IMAGES
import calculator from "../assets/img/calculator.png";
import loginForm from "../assets/img/login-page-form.png";
import loginPage from "../assets/img/login-page.png";
import clock from "../assets/img/real-time-clock.png";
import stopwatch from "../assets/img/stopwatch.png";
import rgbGame from "../assets/img/rgb-game.png";

export default function Javascript() {
  return (
    <div className="m-auto mb-12 grid grid-cols-3 gap-4">
      <Card
        name="Calculator"
        image={calculator}
        link="https://williampgdias.github.io/calculator/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
      <Card
        name="Login Form"
        image={loginForm}
        link="https://williampgdias.github.io/login-page-form/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
      <Card
        name="Login Page"
        image={loginPage}
        link="https://williampgdias.github.io/fantastic-beasts/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
      <Card
        name="Real Time Clock"
        image={clock}
        link="https://williampgdias.github.io/clock-js/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
      <Card
        name="Stopwatch"
        image={stopwatch}
        link="https://williampgdias.github.io/stopwatch/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
      <Card
        name="RGB Game"
        image={rgbGame}
        link="https://williampgdias.github.io/rgb-color-game/"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
      />
    </div>
  );
}
