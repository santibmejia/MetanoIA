import { useState, useEffect } from "react";

const testimonialMessages = [
  "santadeep: Lo tengo para Envato y va de 10 👏🏻 Tiene buenos precios y atienden al toque, siempre. Ya quedé fijo con ellos 🤟🏻",
  "jessenia_jaure: Super recomendable!!!! Y el acceso es muy fácil❤️❤️",
  "yeimeryiyo: Llevo dos meses con el servicio y hasta ahora excelente, les recomiendo prepararse porque los paquetes tienen algunas aplicaciones muy buenas que a veces uno no sabe como funciona 😂 eso me pasó al principio, pero ahí voy aprendiendo 🔥",
  "dragyashiver: Muy amable, responde rápido, cumple con todo lo que promete, sus combos son muy completos y seguros.",
  "jessenia_jaure: Los recomiendo! La verdad se trabaja muy fácil y ayuda muchísimo a crear contenido 👏👏👏🔥🔥",
  "luisam_cuar: Tengo el combo médico desde hace casi medio año y me ha sido infinitamente útil como estudiante. Super recomendado",
  "danielferher97: Para los médicos que trabajamos en baja complejidad (pueblos), es super útil, especialmente si estás preparando para residencia",
  "estebanrojalv: Muy recomendado. Voy para un año con un servicio de iLovePDF y son muy serios en la entrega del producto y tienen soporte con respuestas inmediatas. Muchas gracias"
];

export default function TestimonialPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const showMessage = () => {
      const randomMessage = testimonialMessages[Math.floor(Math.random() * testimonialMessages.length)];
      setCurrentMessage(randomMessage);
      setIsVisible(true);
      
      // Fade in
      setTimeout(() => {
        setOpacity(1);
      }, 10);
      
      // Fade out after 3 seconds
      setTimeout(() => {
        setOpacity(0);
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 3000);
    };

    // Show first message after 2 seconds
    const initialTimeout = setTimeout(() => {
      showMessage();
    }, 2000);

    // Then show every 10 seconds
    const interval = setInterval(() => {
      showMessage();
    }, 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 left-8 bg-white text-gray-800 p-4 rounded-lg shadow-xl z-50 max-w-sm transition-opacity duration-500"
      style={{ opacity }}
    >
      <div className="flex items-start space-x-3">
        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
        <p className="text-sm leading-relaxed">{currentMessage}</p>
      </div>
    </div>
  );
}
