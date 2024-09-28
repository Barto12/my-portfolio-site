/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Banco Simulado app for IOS devices",
    description:
      "App desarrollada en Swift que muestra las funciones basicas de un app bancaria, como inicio de sesión, saldo, activar/desactivar tarjeta, y los movimientos bancarios realizados ",
    url: "https://github.com/Barto12/BancoSimuladoApp",
  },
  {
    title: "StockMarket app for IOS devices",
    description:
      "App desarrollada en Swift que permite al usuario conocer el precio de una accion en el mercado de valores.",
    url: "https://github.com/Barto12/StockMarket",
  },
  {
    title: "GradeMovieRecommender Python",
    description:
      "Programa desarrollado en Python utilizando machine learning con el uso de la libreria pandas",
    url: "https://github.com/Barto12/GradeMovieRecommender",
  },
  {
    title: "AutoPilot Python",
    description:
      "Programa desarrollado en Python que simula ser un software de conducción automatica de un automovil, el cual utiliza una red neuronal con la cual puede esquivar objetos en el trafico para evitar chocar con ellos, además de que el conductor en cualquier momento puede tomar el control del vehiculo.",
    url: "https://github.com/Barto12/AutoPilot",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
