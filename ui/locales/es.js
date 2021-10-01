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
      link6: 'Contacto',
      linkDestinationpradonat: 'Prado - Natalie',
      linkDestinationpradolu: 'Prado - Lucerna',
      linkDestinationcove: 'Coveñas',
      linkDestinationstamarta: 'Sta. Marta',
      linkGallerypradonat: 'Prado - Natalie',
      linkGallerypradolu: 'Prado - Lucerna',
      linkGallerycove: 'Coveñas',
      linkGallerystamarta: 'Sta. Marta',

    },
    contact: {
      form:{
        completeName: "Nombre completo",
        phone: "Número telefónico",
        email: "Correo electrónico",
        message: "Mensaje",
        btnSend:"Enviar mensaje",
        reason: "Motivo de contacto",
        reasons:{
          cotizacion: "Cotización",
          reclamo: "Reclamo",
          otro: "Otra"
        },
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
        metaDesrciption: 'Formulario de contaco'
      }
    }

  })
}
