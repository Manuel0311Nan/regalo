/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
  { title: "Sección 1", description: "Si creías que abrir este regalo sería fácil, ¡sorpresa! ", imageUrl: "/images/seccion1.jpg" },
  { title: "Sección 2", description: "Esperamos que tengas tiempo suficiente...", imageUrl: "/images/seccion2.jpg" },
  { title: "Sección 3", description: "¡No te rindas ahora! Estás a poca distancia del premio.", imageUrl: "/images/seccion3.jpg" },
  { title: "Sección 4", description: "Si estás pensando en pedir ayuda, recuerda: el que persevera alcanza... ¡el regalo!", imageUrl: "/images/seccion4.jpg" },
  { title: "Sección 5", description: "Pensamos que este osito enfadado protegería mejor el regalo que nosotros", imageUrl: "/images/seccion5.jpg" },
  { title: "Sección 6", description: "Te daremos 3 opciones...", imageUrl: "/images/seccion6.jpg" },
  { title: "Sección 7", description: "¿Será un libro?", imageUrl: "/images/seccion7.jpg" },
  { title: "Sección 8", description: "¿Puede que un viaje?", imageUrl: "/images/seccion8.jpg" },
  { title: "Sección 9", description: "Alomejor se come", imageUrl: "/images/seccion9.jpg" },
  { title: "Sección 10", description: "Descúbrelo tú misma, nosotros no nos acordamos de lo que era ya", imageUrl: "/images/seccion10.jpg" },
];

  const goToNextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      document.getElementById(`section-${currentSection + 1}`).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div class="flex flex-col">
    <div class="rounded-md bg-blue-500 p-2 w-96 mx-auto my-5">
      <h1 class="text-center text-xl ">Esperamos que te guste by</h1>
      <h1 class="sticky text-center text-xl">Dani & Manu</h1>
    </div>

      {sections.map((section, index) => (
        <div key={index} id={`section-${index}`} style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <img src={section.imageUrl} alt={`Imagen de ${section.title}`} style={{ maxWidth: '100%', maxHeight: '300px' }} class="w-96 h-auto" />
          <p class="w-96 text-center ">{section.description}</p>
          {index < 9 ? (
          <button onClick={goToNextSection} class="text-xl text-center rounded-md bg-blue-500 p-2 mt-2">
            Sigue buscando
          </button>
        ) : (
          <a href="/documents/regaloSilvia.pdf" download="Regalo.pdf" class="text-xl text-center rounded-md bg-blue-500 p-2 w-52">Descargar Virus</a>
        )}
        </div>
      ))}
    </div>
  );
}