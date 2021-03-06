export default async () => {
  return await Promise.resolve({
    langchangerComp: {
      lang_es: 'Es',
      lang_en: 'En',
      lang_de: 'De',
      es_alt: 'Bandera de Colombia',
      en_alt: 'Bandera de USA',
      de_alt: 'Bandera de Alemania',
    },
    gallery:{
      gottoDestination: "Descripcion detallada del lugar"
    },
    galleryComp: {
      prev: 'Imagen anterior',
      next: 'Imagen siguiente',
      first: 'Ir a la primera imagen',
      last: 'Ir a la última imagen',
      slideX: 'Ir a imagen %s',
      pageX: 'Ir a página %s',
      play: 'Iniciar la reproducción automática',
      pause: 'Pausar la reproducción automática',
      noAltProvided: 'No hay descripcion para esta imagen',
    },
    cbFooterComp: {
      altYoutubeLogo: 'Logo de Youtube',
      altFbLogo: 'Logo de Facebook',
      altInstLogo: 'Logo de Instagram',
    },
    navitems: {
      link1: 'Inicio',
      link2: 'Quienes somos?',
      link3: 'Destinos',
      link4: 'Galería',
      link5: 'Tarifas',
      link6: 'Tarifas-Contacto',
      link7: 'Idioma',
      linkDestinationpradonat: 'Prado - Natalie',
      linkDestinationpradolu: 'Prado - Lucerna',
      linkDestinationcove: 'Coveñas',
      linkDestinationstamarta: 'Sta. Marta',
      linkGallerypradonat: 'Prado - Natalie',
      linkGallerypradolu: 'Prado - Lucerna',
      linkGallerycove: 'Coveñas',
      linkGallerystamarta: 'Sta. Marta',
      lang_es: 'Español',
      lang_en: 'English',
      lang_de: 'Deutsch'
    },
    contact: {
      form:{
        finca:"Lugar que me interesa",
        completeName: "Nombre completo",
        phone: "Número telefónico",
        email: "Correo electrónico",
        message: "Mensaje",
        btnSend:"Enviar mensaje",
        reason: "Motivo de contacto",
        reasons:{
          cotizacion: "Cotización",
          reclamo: "Reclamo",
          otro: "Otra (Solicitud de información adicional)"
        },
        pricePrado:"Precio por persona/día incluyendo las 3 comidas del <a href='https://colombiabonita.tk/' target='_blank'>menú* del día</a> Col$ 112000.— (mínimo 5 personas)<br/><br/>Si prefiere sin comida menciónelo en su solicitud de cotización.",
        priceCov:"Precio por persona/dia incluyendo desayuno y almuerzo tarde.  Deliciosas comidas típicas costeñas hecho a fuego de leña:  $ 70000.—por persona/dia (mínimo 5 personas) ",
        priceStaMarta:"Precio temporada baja:  250000. —por día.  <br/>Temporada Alta 600000.--  (Semana Santa, Fin Año, mes de Julio)",
        error:"Lamentablemente, su solicitud de contacto no pudo ser enviada.<br> Por favor, inténtelo más tarde.",
        success:"Su solicitud de contacto ha sido enviada.<br>La procesaremos lo antes posible"

      },
      validators:{
        completeName: "Por favor, escriba su nombre completo",
        phone: "Por favor, escriba su número telefónico",
        email: "Por favor, escriba su correo electrónico",
        message: "Por favor, escriba un mesnaje ",
      }
    },
    content: {
      contact: {
        title: 'Contáctenos',
        metaDesrciption: 'Tairfas y Contacto'
      }
    }

  })
}
