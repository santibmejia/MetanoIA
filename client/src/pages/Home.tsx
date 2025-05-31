import { useEffect, useState } from "react";
import TestimonialPopup from "@/components/TestimonialPopup";

export default function Home() {
  const [showTerms, setShowTerms] = useState(false);
  const [showProduct1Modal, setShowProduct1Modal] = useState(false);
  const [showProduct2Modal, setShowProduct2Modal] = useState(false);
  const [showProduct3Modal, setShowProduct3Modal] = useState(false);
  const [showProduct4Modal, setShowProduct4Modal] = useState(false);
  const [showProduct5Modal, setShowProduct5Modal] = useState(false);

  useEffect(() => {
    // Set current year in footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const showMoreInfo = () => {
    alert('Hola aqui te paso todos los detalles mas avanzados del producto para mas informacion');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="rod-purple text-white py-6 text-center shadow-lg">
        <div className="container mx-auto px-4">
          <img 
            src="https://i.imgur.com/LlZWLKk.jpeg" 
            alt="Rod Cuentas / MetanoIA" 
            className="mx-auto h-24 md:h-28 object-contain"
          />
        </div>
      </header>

      {/* Navigation */}
      <nav className="rod-pink py-4 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('precios')}
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              Precios
            </button>
            <button 
              onClick={() => scrollToSection('faqs')}
              className="text-white hover:text-gray-200 transition-colors duration-300 font-medium"
            >
              FAQs
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-rod-purple mb-6 leading-tight">
            Pack definitivo de más de 50 herramientas de IA, SEO y más por un solo precio
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Olvídate de pagar varias suscripciones por separado.
          </p>
          <button 
            onClick={() => scrollToSection('precios')}
            className="rod-pink hover:rod-pink text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Precios
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-rod-purple text-center mb-12">
            Características por Combo
          </h2>

          {/* First Row of Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* ChatGPT Plus Premium */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-rod-purple mb-4">Combo ChatGPT Plus Premium</h3>
              <div className="text-3xl font-bold text-rod-pink mb-4">$14.90 USD/MES</div>
              <img 
                src="https://agenciasiglovibe.com/rodcuentas/img/ChatGPT%20$14.90.png" 
                alt="Combo ChatGPT Plus Premium"
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">+25 herramientas IA: ChatGPT Pro, Claude AI, etc.</p>
              <div className="space-y-3">
                <button 
                  onClick={() => openExternalLink('https://whop.com/checkout/plan_VnIrcRytcpB5K/?a=santibm&d2c=true')}
                  className="w-full rod-pink hover:rod-pink text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Comprar
                </button>
                <button 
                  onClick={() => setShowProduct1Modal(true)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </button>
              </div>
            </div>

            {/* Antiplagio y Estudiante */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-rod-purple mb-4">Combo Antiplagio y Estudiante</h3>
              <div className="text-3xl font-bold text-rod-pink mb-4">$16 USD/MES</div>
              <img 
                src="https://agenciasiglovibe.com/rodcuentas/img/Estudiante%20$16.png" 
                alt="Combo Antiplagio y Estudiante"
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">Herramientas para detectar y corregir plagio.</p>
              <div className="space-y-3">
                <button 
                  onClick={() => openExternalLink('https://whop.com/checkout/plan_JAP8UXK0JqeFa/?a=santibm&d2c=true')}
                  className="w-full rod-pink hover:rod-pink text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Comprar
                </button>
                <button 
                  onClick={() => setShowProduct2Modal(true)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </button>
              </div>
            </div>

            {/* SEO eCommerce Marketing */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-rod-purple mb-4">Combo SEO, eCommerce y Marketing</h3>
              <div className="text-3xl font-bold text-rod-pink mb-4">$18 USD/MES</div>
              <img 
                src="https://agenciasiglovibe.com/rodcuentas/img/SEO%20$18.png" 
                alt="Combo SEO, eCommerce y Marketing"
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">SEO, eCommerce, Marketing y más.</p>
              <div className="space-y-3">
                <button 
                  onClick={() => openExternalLink('https://whop.com/checkout/plan_2z7EbM0faINBX/?a=santibm&d2c=true')}
                  className="w-full rod-pink hover:rod-pink text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Comprar
                </button>
                <button 
                  onClick={() => setShowProduct3Modal(true)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </button>
              </div>
            </div>
          </div>

          {/* Second Row of Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Ultra IA */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-rod-purple mb-4">Combo Ultra IA</h3>
              <div className="text-3xl font-bold text-rod-pink mb-4">$24.90 USD/MES</div>
              <img 
                src="https://agenciasiglovibe.com/rodcuentas/img/UltraIA%20$24.90.png" 
                alt="Combo Ultra IA"
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">Más de 300 herramientas premium.</p>
              <div className="space-y-3">
                <button 
                  onClick={() => openExternalLink('https://whop.com/checkout/plan_8BmZiN5e7fbMY/?a=santibm&d2c=true')}
                  className="w-full rod-pink hover:rod-pink text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Comprar
                </button>
                <button 
                  onClick={() => setShowProduct4Modal(true)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </button>
              </div>
            </div>

            {/* Médico IA */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-rod-purple mb-4">Combo Médico + IA</h3>
              <div className="text-3xl font-bold text-rod-pink mb-4">$60 USD/AÑO</div>
              <img 
                src="https://agenciasiglovibe.com/rodcuentas/img/Medico%20$60.png" 
                alt="Combo Médico + IA"
                className="w-full h-40 object-contain rounded-lg mb-4"
              />
              <p className="text-gray-600 mb-6">Apps médicas premium y herramientas IA.</p>
              <div className="space-y-3">
                <button 
                  onClick={() => openExternalLink('https://whop.com/checkout/plan_BSnRObDWu5wAM/?a=santibm&d2c=true')}
                  className="w-full rod-pink hover:rod-pink text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Comprar
                </button>
                <button 
                  onClick={() => setShowProduct5Modal(true)}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <button 
            onClick={() => openExternalLink('https://ig.me/m/metanoiaescuela')}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-lg"
          >
            📱 QUIERO MÁS INFORMACIÓN
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-rod-purple text-center mb-12">
            Preguntas Frecuentes
          </h2>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿El pago es seguro?
              </h3>
              <p className="text-gray-600">
                Sí, el pago es completamente seguro. Usamos la plataforma Whop, una plataforma reconocida y ampliamente utilizada para la venta y gestión de productos digitales. Whop cuenta con protocolos avanzados de seguridad que protegen tu información personal y financiera. Además, utiliza cifrado SSL para garantizar la privacidad de tus datos durante las transacciones, evitando fraudes o estafas. Puedes confiar en que tu pago se procesa de manera segura y confiable. Si quieres, puedes visitar su página oficial en www.whop.com y verificar personalmente sus medidas de seguridad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Cómo obtengo el acceso a las herramientas?
              </h3>
              <p className="text-gray-600">
                Una vez que completes el pago a través de la plataforma Whop, recibirás un mensaje en el chat de la misma plataforma con las instrucciones para acceder a las herramientas. El envío de este mensaje es casi inmediato y, en cualquier caso, no tarda más de 30 minutos después de la confirmación del pago.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Cómo puedo contactar al equipo de soporte?
              </h3>
              <p className="text-gray-600">
                Cuando recibas las instrucciones en el chat de la plataforma Whop, también se te enviarán los enlaces directos para contactar vía WhatsApp y para unirte al grupo general de soporte técnico. Así podrás recibir ayuda rápida y personalizada siempre que lo necesites.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿La compra es una suscripción con renovación automática?
              </h3>
              <p className="text-gray-600">
                Sí, al adquirir este producto estás suscribiéndote a un plan con renovación automática. Esto significa que el monto correspondiente se cargará automáticamente a tu método de pago cada período (por ejemplo, mensual o anual), según lo especificado al momento de la compra.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Puedo cancelar mi suscripción en cualquier momento?
              </h3>
              <p className="text-gray-600">
                ¡Por supuesto! Puedes cancelar tu suscripción en cualquier momento desde tu panel de usuario en whop.com Una vez cancelada, no se te volverá a cobrar y conservarás el acceso hasta que finalice el período ya pagado. No hay cláusulas ocultas ni permanencias obligatorias.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Qué es Rod Cuentas y qué servicios ofrece?
              </h3>
              <p className="text-gray-600">
                Rod Cuentas es una plataforma que facilita el acceso a herramientas digitales mediante un modelo de group buy. Actuamos como intermediarios entre los usuarios y proveedores externos, gestionando la adquisición, mantenimiento y soporte técnico de las herramientas disponibles en nuestra plataforma.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Qué es AdsPower y cuál es su relación con Rod Cuentas?
              </h3>
              <p className="text-gray-600">
                AdsPower es un software de gestión de perfiles de navegador, desarrollado por SUNFLOWER TECH PTE. LTD., que permite la administración de múltiples cuentas de forma segura. Rod Cuentas utiliza AdsPower como plataforma para alojar y organizar las herramientas digitales que ofrecemos a nuestros usuarios.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Rod Cuentas es el desarrollador o propietario de las herramientas ofrecidas?
              </h3>
              <p className="text-gray-600">
                No, Rod Cuentas no desarrolla ni posee las herramientas disponibles en nuestra plataforma. Actuamos únicamente como intermediarios, facilitando el acceso a estas herramientas a través de acuerdos con proveedores externos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Cómo funcionan las suscripciones en Rod Cuentas?
              </h3>
              <p className="text-gray-600">
                Ofrecemos planes de suscripción mensuales y anuales que brindan acceso a las herramientas disponibles en nuestra plataforma. Los usuarios pueden elegir el plan que mejor se adapte a sus necesidades y cancelarlo en cualquier momento, notificando al equipo de soporte con al menos 15 días de antelación al próximo ciclo de facturación.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Es obligatorio renovar la suscripción?
              </h3>
              <p className="text-gray-600">
                No, la renovación de la suscripción no es obligatoria. Los usuarios pueden cancelar la renovación automática en cualquier momento en whop.com o comunicándose con nuestro equipo de soporte al menos 15 días antes del próximo ciclo de facturación.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Puedo solicitar la cancelación de la renovación inmediatamente después de realizar el pago?
              </h3>
              <p className="text-gray-600">
                Sí, puedes solicitar la cancelación de la renovación automática inmediatamente después de realizar el pago. Esto garantizará que no se realicen cargos adicionales en el futuro.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Ofrecen reembolsos?
              </h3>
              <p className="text-gray-600">
                Solo ofrecemos reembolsos en casos donde el servicio no esté disponible por más de 3 días consecutivos debido a fallos técnicos atribuibles a Rod Cuentas con sus respectivas evidencias. No se realizarán reembolsos por suspensiones de cuenta debido a incumplimientos de nuestras políticas o por falta de uso del servicio.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Qué sucede si comparto mis credenciales de acceso?
              </h3>
              <p className="text-gray-600">
                Compartir credenciales de acceso con terceros está prohibido. Detectar múltiples inicios de sesión desde la misma dirección IP o comportamientos sospechosos puede resultar en la suspensión permanente de la cuenta sin previo aviso.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Qué métodos de pago aceptan?
              </h3>
              <p className="text-gray-600">
                En la plataforma Whop puedes realizar tus pagos de forma segura utilizando tarjetas de débito o crédito. Además, Whop también acepta pagos a través de Cash App Pay.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Puedo acceder a los servicios desde cualquier país?
              </h3>
              <p className="text-gray-600">
                Sí, nuestros servicios están disponibles para usuarios de todo el mundo. Sin embargo, es responsabilidad del usuario asegurarse de que el uso de nuestras herramientas cumpla con las leyes y regulaciones locales.
              </p>
            </div>

            

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Dónde puedo encontrar los términos y condiciones del servicio?
              </h3>
              <p className="text-gray-600">
                Puedes consultar los términos y condiciones de ROD CUENTAS al final de esta página o los puedes solicitar por mensaje directo en nuestro Instagram en el siguiente link: 
                <a href="https://ig.me/m/metanoiaescuela" 
                   className="text-rod-pink hover:text-pink-600 underline ml-1" target="_blank" rel="noopener noreferrer">
                  @metanoiaescuela
                </a>
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Qué debo hacer si tengo una queja relacionada con derechos de autor (DMCA)?
              </h3>
              <p className="text-gray-600">
                Si consideras que algún contenido en nuestra plataforma infringe tus derechos de autor, por favor contáctanos a través del correo electrónico: 
                <a href="mailto:rodcuentas7@gmail.com" 
                   className="text-rod-pink hover:text-pink-600 underline ml-1">
                  rodcuentas7@gmail.com
                </a>. Atenderemos tu solicitud con prontitud.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Puedo cambiar de plan después de haberme suscrito?
              </h3>
              <p className="text-gray-600">
                Sí, puedes cambiar de plan en cualquier momento. Para hacerlo, comunícate con nuestro equipo de soporte, quienes te guiarán en el proceso de actualización o degradación de tu plan actual.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Qué sucede si una herramienta deja de estar disponible?
              </h3>
              <p className="text-gray-600">
                Rod Cuentas depende de proveedores externos para el acceso a las herramientas. Si una herramienta deja de estar disponible, notificaremos a los usuarios afectados y, si es posible, ofreceremos alternativas o ajustes en el plan.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Puedo solicitar una herramienta específica que no esté en la plataforma?
              </h3>
              <p className="text-gray-600">
                Estamos abiertos a sugerencias. Si hay una herramienta que deseas y no está disponible en nuestra plataforma, contáctanos y evaluaremos la posibilidad de incluirla en función de la demanda y viabilidad.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Cómo se manejan los límites de uso de las herramientas?
              </h3>
              <p className="text-gray-600">
                Algunas herramientas pueden tener límites de uso establecidos por los proveedores. Estos límites se restablecen según las políticas de cada proveedor. Es responsabilidad del usuario gestionar su uso dentro de estos límites.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Rod Cuentas garantiza el funcionamiento continuo de las herramientas?
              </h3>
              <p className="text-gray-600">
                Hacemos todo lo posible para garantizar la disponibilidad continua de las herramientas. Sin embargo, debido a que dependemos de proveedores externos, no podemos garantizar el funcionamiento ininterrumpido de todas las herramientas en todo momento.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-rod-purple mb-3">
                ¿Dónde puedo ver opiniones de otros usuarios sobre Rod Cuentas?
              </h3>
              <p className="text-gray-600">
                Puedes ver comentarios y opiniones de nuestros clientes en nuestra cuenta de Instagram: 
                <a href="https://www.instagram.com/metanoiaescuela/" 
                   className="text-rod-pink hover:text-pink-600 underline ml-1" target="_blank" rel="noopener noreferrer">
                  @metanoiaescuela
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="rod-purple text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">
            © <span id="current-year"></span> ROD CUENTAS - Todos los derechos reservados.
          </p>
          <p className="mb-6 text-white">
            Para más información o asistencia personalizada, envíanos un mensaje directo a{' '}
            <a 
              href="https://ig.me/m/metanoiaescuela" 
              className="text-white hover:text-gray-200 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @metanoiaescuela
            </a>
          </p>
          <div className="space-y-4">
            <div className="mt-4">
              <button 
                onClick={() => setShowTerms(true)}
                className="text-gray-300 hover:text-white underline"
              >
                Términos y condiciones
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Product 1 Modal */}
      {showProduct1Modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-rod-purple">Combo ChatGPT Plus Premium - Más Información</h2>
              <button 
                onClick={() => setShowProduct1Modal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm leading-relaxed">
              <div className="text-gray-700 space-y-4">
                <p className="text-lg font-bold text-rod-purple">💎 COMBO CHATGPT PLUS PREMIUM – $14.90 USD/MES</p>
                <p className="font-semibold">🔹 +25 herramientas IA:</p>
                <div className="ml-4 space-y-2">
                  <p>• IA y productividad: ChatGPT Pro, Claude AI, Gemini Advanced, Sider, YouAI, MaxAI, MindGrasp, etc.</p>
                  <p>• Diseño y creatividad: Canva Pro, Leonardo AI, Adobe Express, Freepik Pro con IA, Ideogram</p>
                  <p>• Video y multimedia: CapCut Pro, Vizard, HeyGen Team, InVideo Editor, Sora</p>
                  <p>• Entretenimiento: Disney+, Crunchyroll, Prime Video, Paramount+, Plex</p>
                  <p>• Educación: Scribd, Everand</p>
                  <p>• Voz IA: LOVO AI, DankiCode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product 2 Modal */}
      {showProduct2Modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-rod-purple">Combo Antiplagio y Estudiante - Más Información</h2>
              <button 
                onClick={() => setShowProduct2Modal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm leading-relaxed">
              <div className="text-gray-700 space-y-4">
                <p className="text-lg font-bold text-rod-purple">🎓 COMBO ANTIPLAGIO & ESTUDIANTE – $16 USD/MES</p>
                <p className="font-semibold">🔹 Herramientas para detectar y corregir plagio: Turnitin, Grammarly, Smodin, Cramly, Copyscape, ProWritingAid, Wordtune, Jenni.ai</p>
                <p className="font-semibold">🔹 Incluye acceso completo al Combo ChatGPT Plus Premium. Es decir: +25 herramientas IA:</p>
                <div className="ml-4 space-y-2">
                  <p>• IA y productividad: ChatGPT Pro, Claude AI, Gemini Advanced, Sider, YouAI, MaxAI, MindGrasp, etc.</p>
                  <p>• Diseño y creatividad: Canva Pro, Leonardo AI, Adobe Express, Freepik Pro con IA, Ideogram</p>
                  <p>• Video y multimedia: CapCut Pro, Vizard, HeyGen Team, InVideo Editor, Sora</p>
                  <p>• Entretenimiento: Disney+, Crunchyroll, Prime Video, Paramount+, Plex</p>
                  <p>• Educación: Scribd, Everand</p>
                  <p>• Voz IA: LOVO AI, DankiCode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product 3 Modal */}
      {showProduct3Modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-rod-purple">Combo SEO, eCommerce y Marketing - Más Información</h2>
              <button 
                onClick={() => setShowProduct3Modal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm leading-relaxed">
              <div className="text-gray-700 space-y-4">
                <p className="text-lg font-bold text-rod-purple">🎯 COMBO SEO, ECOMMERCE Y MARKETING – $18 USD/MES</p>
                <div className="space-y-2">
                  <p className="font-semibold">🔹 SEO: SEMrush, DinoRank, Mangools, Serpstat</p>
                  <p className="font-semibold">🔹 eCommerce: Helium 10, Jungle Scout, ZIK Analytics</p>
                  <p className="font-semibold">🔹 Marketing: BuzzSumo, Hunter, Majestic, SimilarWeb</p>
                  <p className="font-semibold">🔹 Diseño & contenido: Canva Pro, Envato, Freepik Pro, Storyblocks, Quillbot, Quetext, Smodin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product 4 Modal */}
      {showProduct4Modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-rod-purple">Combo Ultra IA - Más Información</h2>
              <button 
                onClick={() => setShowProduct4Modal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm leading-relaxed">
              <div className="text-gray-700 space-y-4">
                <p className="text-lg font-bold text-rod-purple">⚡️ COMBO ULTRA IA – $24.90 USD/MES</p>
                <div className="space-y-2">
                  <p className="font-semibold">🔹 Más de 300 herramientas premium:</p>
                  <p>IA para redacción, automatización, diseño, programación, SEO, educación, creación de contenido, etc.</p>
                  <p>Es el combo más completo. Todas las IA en un solo combo. Más de 300 herramientas premium.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product 5 Modal */}
      {showProduct5Modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-rod-purple">Combo Médico + IA - Más Información</h2>
              <button 
                onClick={() => setShowProduct5Modal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm leading-relaxed">
              <div className="text-gray-700 space-y-4">
                <p className="text-lg font-bold text-rod-purple">🏥 COMBO MÉDICO + 25 apps IA – $60 USD/AÑO</p>
                <p className="font-semibold">Enfocado en estudiantes y profesionales de la salud</p>
                <div className="space-y-2">
                  <p className="font-semibold">🔹 Apps médicas premium y bases de datos médicas</p>
                  <p className="ml-4">UpToDate, AMBOSS, Lecturio, Osmosis, Clinical Key, NEJM, Scopus, JAMA, Cochrane Library, etc.</p>
                  <p className="font-semibold">🔹 Incluye también acceso a +25 herramientas IA como regalo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-rod-purple">Términos y Condiciones de Rodcuentas</h2>
              <button 
                onClick={() => setShowTerms(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-6 text-sm leading-relaxed">
              <p className="text-gray-700">
                Al acceder y realizar un pedido en Rodcuentas, usted confirma que está de acuerdo con y se compromete a cumplir con los términos y condiciones establecidos a continuación. Estos términos se aplican a todo el sitio web y cualquier correo electrónico u otro tipo de comunicación entre usted y Rodcuentas. Bajo ninguna circunstancia será responsable Rodcuentas por daños directos, indirectos, especiales, incidentales o consecuentes, incluyendo, pero no limitado a, pérdida de beneficios, pérdida de datos, interrupción del negocio, o cualquier otra pérdida comercial, que surja del uso o la imposibilidad de usar el material del sitio web, incluso si Rodcuentas ha sido advertido de la posibilidad de tales daños.
              </p>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Facturación</h3>
                <p className="text-gray-700">
                  Rodcuentas no cobra tarifas recurrentes. Todas las transacciones son iniciadas por el usuario, y no guardamos ningún dato relacionado con la facturación. Utilizamos pasarelas de pago de terceros como Mercadopago y Stripe para procesar todos los pedidos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Servicios</h3>
                <p className="text-gray-700">
                  En Rodcuentas, el cobro que realizamos es por el mantenimiento de nuestra web, el pago del servicio de Adspower y el pago del servicio al proveedor. Actuamos únicamente como intermediarios en la provisión de servicios de terceros, como herramientas de GroupBuySEO. Rodcuentas.com no es el creador ni propietario de estos servicios, pero invertimos tiempo y esfuerzo para adquirir cuentas de proveedores, principalmente de Bangladesh y China, que ofrecen acceso a estos servicios. Nos reservamos el derecho de cambiar el precio y la validez de cualquier servicio en cualquier momento. Además, podemos imponer límites en cualquier herramienta dependiendo de la disponibilidad y los acuerdos con los proveedores.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Proceso de Reembolso</h3>
                <p className="text-gray-700">
                  Proporcionaremos un reembolso solo cuando nuestro servicio no funcione durante más de 3 días. No habrá reembolsos si su cuenta es suspendida o si no utiliza nuestro servicio. Tampoco se ofrecerá reembolso si los límites de nuestras herramientas se agotaron; deberá esperar hasta que se reinicien los límites.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Suspensión de Cuenta</h3>
                <p className="text-gray-700">
                  Si un usuario comparte los detalles de su cuenta con otras personas, Rodcuentas.com tiene el derecho de suspender permanentemente la cuenta del usuario sin previo aviso. Múltiples inicios de sesión desde la misma dirección IP (utilizando proxy o el mismo proveedor de servicios de internet) el mismo día pueden resultar en la suspensión de la cuenta.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Exoneración de Responsabilidad</h3>
                <p className="text-gray-700">
                  Rodcuentas actúa únicamente como intermediario para la provisión de servicios de terceros, como herramientas de GroupBuySEO. No somos los creadores ni propietarios de los servicios que ofrecemos. Los usuarios deben ser conscientes de que Rodcuentas.com no es responsable del contenido, la calidad, o el funcionamiento de los servicios ofrecidos por estos terceros. Cualquier inconveniente relacionado con los servicios de terceros debe ser tratado directamente con el proveedor correspondiente.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Política de Privacidad y Protección de Datos</h3>
                <p className="text-gray-700">
                  Rodcuentas.com valora la privacidad de sus usuarios. No recopilamos ni almacenamos información sensible, como datos de tarjetas de crédito. El proceso de pago y las transacciones se gestionan a través de pasarelas de pago de terceros, como Mercadopago y Stripe, quienes se encargan de proteger los datos financieros.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Descargo de Responsabilidad y Condiciones de Uso</h3>
                <p className="text-gray-700">
                  Rodcuentas.com no ofrece ninguna garantía sobre la precisión, fiabilidad o funcionalidad de los servicios proporcionados por las herramientas de terceros a las que proporcionamos acceso. Los usuarios son responsables de cumplir con las leyes de derechos de autor y de utilizar las herramientas conforme a las normativas aplicables de propiedad intelectual.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Uso de Adspower</h3>
                <p className="text-gray-700">
                  En Rodcuentas.com, utilizamos el software Adspower para facilitar el acceso de nuestros usuarios a herramientas de SEO y otros servicios relacionados. Adspower es un software legítimo y seguro desarrollado por la empresa SUNFLOWER TECH PTE. LTD. y utilizado por nosotros para gestionar cuentas y servicios de manera eficiente. Rodcuentas.com paga por una suscripción premium de Adspower, lo que nos permite ofrecer acceso a los servicios a nuestros usuarios con fines educativos y de uso personal.
                </p>
                <p className="text-gray-700 mt-2">
                  Es importante destacar que Adspower no es un software creado por Rodcuentas.com, sino que es una herramienta externa que utilizamos como intermediarios. Como tal, cualquier error o inconveniente relacionado con Adspower, incluidos cambios en sus funciones, será responsabilidad directamente de la empresa SUNFLOWER TECH PTE. LTD. y no de Rodcuentas.com.
                </p>
                <p className="text-gray-700 mt-2">
                  Para más información sobre Adspower, puede consultar los siguientes enlaces oficiales:<br/>
                  <a href="https://www.adspower.com/es/" className="text-rod-pink hover:text-pink-600 underline" target="_blank" rel="noopener noreferrer">https://www.adspower.com/es/</a><br/>
                  <a href="https://www.adspower.com/es/terms-of-use" className="text-rod-pink hover:text-pink-600 underline" target="_blank" rel="noopener noreferrer">https://www.adspower.com/es/terms-of-use</a>
                </p>
                <p className="text-gray-700 mt-2">
                  Al utilizar nuestros servicios, usted reconoce que Rodcuentas.com actúa únicamente como intermediario para el acceso a Adspower y que cualquier inconveniente técnico o cambio en sus servicios debe ser tratado directamente con el proveedor Adspower.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Cláusula de Resolución de Conflictos</h3>
                <p className="text-gray-700">
                  Resolución de Conflictos: En caso de conflicto relacionado con estos Términos y Condiciones, ambas partes acuerdan primero intentar resolverlo a través de mediación. Si la mediación no tiene éxito, el conflicto será resuelto por arbitraje vinculante, de conformidad con las leyes y regulaciones locales aplicables.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Cláusula de Fuerza Mayor</h3>
                <p className="text-gray-700">
                  Fuerza Mayor: Rodcuentas.com no será responsable por el incumplimiento de sus obligaciones cuando dicho incumplimiento sea causado por eventos fuera de su control razonable, como desastres naturales, interrupciones de proveedores, fallos técnicos, o actos de terceros.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Indemnización</h3>
                <p className="text-gray-700">
                  El usuario acepta indemnizar, defender y mantener indemne a Rodcuentas.com, sus directores, empleados y agentes, de cualquier reclamo, daño, responsabilidad o pérdida derivada del uso de los servicios, incluidos los costos legales relacionados con violaciones de derechos de propiedad intelectual, leyes locales o internacionales aplicables, o el incumplimiento de estos Términos y Condiciones.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-rod-purple mb-3">Modificaciones a los Términos y Condiciones</h3>
                <p className="text-gray-700">
                  Rodcuentas.com se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Es responsabilidad del usuario revisar regularmente estas condiciones para estar al tanto de cualquier cambio. Si continúa utilizando el sitio o los servicios después de que se hayan realizado cambios en los términos, se considerará que acepta dichos cambios.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Popup Component */}
      <TestimonialPopup />
    </div>
  );
}
