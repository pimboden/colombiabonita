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
    sloganComp: {
      text: '!Auténtica y mágica!',
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
      title1: 'Siguenos en redes',
      altYoutubeLogo: 'Logo de Youtube',
      altFbLogo: 'Logo de Facebook',
      altInstLogo: 'Logo de Instagram',
      title2: 'Contáctanos',
      phone: '+57 311 421 31 87',
      contactForm: 'Formulario de contacto',
    },
    destSelectorComp:{
      covenasAlt: "Foto del mar de coveñas",
      covenasCaption: "Coveñas",
      pradoluAlt: "Foto de la guacamaya del prado",
      pradoluCaption: "Prado - Lucerna",
      pradonatAlt: "Foto de la guacamaya del prado",
      pradonatCaption: "Prado - Natalie",
      stamartaAlt: "Foto de la hamaca en Sta. Marta",
      stamartaCaption: "Sta. Marta"
    },
    mainLogoComp: {
      alt: 'Logo con un papagayo abstracto con los colores de colombia y el texto Colombia bonita',
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
      home:{
        title: 'Colombiabonita',
        pageTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius odio eu nisi congue, at ullamcorper libero porta. Fusce id elit enim. Nam et dictum felis, a mattis urna. ',
        metaDesrciption: 'En Colombiabonita mostramos la parte positiva de Colombia. Instalaciones originales con un alto estandar  ecológico y con buena comodidad para disfrutar de una exuberante naturaleza.',
      },
      aboutUs: {
        title: 'Quienes somos?',
        metaDesrciption: 'En Colombiabonita mostramos la parte positiva de Colombia. Instalaciones originales con un alto estandar  ecológico y con buena comodidad para disfrutar de una exuberante naturaleza ',
        text1:'En Colombiabonita mostramos la parte positiva de Colombia. Instalaciones originales con un alto estandar  ecológico y con buena comodidad para disfrutar de una exuberante naturaleza y de la amabilidad de la gente que atiende nuestras instalaciones.  Nos esforzamos para que nuestros clientes puedan  gozar de un autentico descanso dentro de un entorno muy agradable rodeado de bellezas naturales.'
      },
      contact: {
        title: 'Contacto',
        metaDesrciption: 'Cotice con nosotros, o haga un comentario.',
      },
      destinations: {
        title: 'Destinos',
        gmapUrlText: 'Abrir con Google maps',
        covenas: {
          title: 'Coveñas',
          metaDesrciption: 'Coveñas. Una cabaña sencilla a dos minutos de la playa',
          text1:'Español - Coveñas - <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'Imagen de cabaña en Coveñas',
            name:'Coveñas: cabaña "Santa Maria"',
            address:"Salida Punta Bolivar, San Antero, Córdoba, Colombia"
          },
          imageTextCombo:{
            alt:"Vista  de la playa desde el aire",
            galleryLinkText:'Visita la galeria de fotos',
            text:'<h2 class="mb-2">Servicios incluidos:</h2><ul class="services"><li>Servicio a.</li><li>Servicio b.</li><li>Servicio c.</li><li>Servicio d.</li><li>Servicio e.</li></ul><h2 class="mb-2">Servicios para contratar*:</h2><ul class="services"><li>Servicio v.</li><li>Servicio w.</li><li>Servicio x.</li><li>Servicio y.</li><li>Servicio z.</li></ul> <small class="mt-3 d-block">*solicite información detallada y precios por separado</small>'
          }
        },
        pradolu: {
          title: 'PRADO LUCERNA',
          metaDesrciption: 'La finca consiste de una casa/dormitorio con dos cuartos con una cama doble y dos camas sencillas.',
          text1:'<p>La finca LUCERNA se encuentra en un brazo de la laguna del Prado denominado “El Caimán”, a 15 Minutos en bote del parqueadero.</p><p>Las instalaciones de la finca LUCERNA esta situada a nivel de la laguna con piscina panorámica con duchas de agua natural al aire libre. La finca consiste de una casa/dormitorio con dos cuartos con una cama doble y dos camas sencillas cada una y con un baño / ducha con zona verde.</p><p>Además de estos dos cuartos individuales tenemos cuarto para 10 personas con sus dos duchas y baño con zona verde. Se pueden acomodar cómodamente 18 personas, ampliable con catres hasta 23 personas.* <br> Niños hasta 7 años: 50 %.</p><p>Una amplia zona de descanso cubierta con ventiladores de tech al lado de la piscina, con una ducha caracol y dos baños.</p>Un comedor amplio con ventiladores de techo. Una cocina completamente dotada con estufa de gas mas un horno y Barbacoa al aire libre.</p><p>Se cuenta con una Mesa de Pingpong, pista de Mini-Tejo y cancha multideportiva, y para los que no pueden dejarlo, un TV conectado a Direct TV.</p><p><small class="mt-3 d-block">*Para grupos de mas de 22 personas podemos combinar la finca LUCERNA con la finca NATALIE, unidas por un puente sobre la quebrada ‘’La guacharaca”. <br>Mas información bajo <a href="/es/destinos/pradonat">PRADO NATALIE</a></small></p>',
          geoLocation:{
            alt:'Imagen de finca Lucernaen Prado',
            name:'Prado: finca "Lucerna"',
            address:"Puerto Hidroprado, Tolima, Colombia"
          },
          imageTextCombo:{
            alt:"Piscina de la finca",
            galleryLinkText:'Visita la galeria de fotos',
            text:'<h2 class="mb-2">Servicios incluidos:</h2><ul class="services"><li>Transporte de ida y vuelta con canoa propia, con todas las medidas de seguridad.</li><li> Refresco de bienvenida.</li><li>Aseo de las habitaciones.</li><li>Servicio de cocina.</li><li>Limpieza final incluyendo lavada de ropa de cama.</li></ul><h2 class="mb-2">Servicios para contratar**:</h2><ul class="services"><li>Desayuno, almuerzo y comida de menú único diarios, previamente escogido.</li><li>Venta de gaseosas, cerveza y mecatos.</li><li>Esquí acuático, aventura en donut y en gusano de 3 puestos.</li><li>Alquiler de Standup Paddle y de 2 kayak doble.</li></ul> <small class="mt-3 d-block">**solicite información detallada y precios por separado</small>'
          }
        },
        pradonat: {
          title: 'PRADO NATALIE',
          metaDesrciption: 'Las instalaciones de la finca Natalie consisten en una casa principal, 2 bungalows y una zona de recreo.',
          text1:'<p>La finca Natalie se encuentra en un brazo de la laguna del Prado denominado “El Caimán”, a 15 Minutos en bote del parqueadero.</p><p>Las instalaciones de la finca Natalie consisten en una casa principal con dos cuartos con dos camas dobles cada una y con un baño con ducha compartido. En el segundo piso se pueden albergar 6 personas en tres cuartos con dos camas sencillas cada uno, compartiendo dos baños con duchas.</p><p>Bordeado la quebrada propia hay un bungalow “Casa verde” con tres camas sencillas y un baño/ducha, y al borde del lago el bungalow “La Marina” con 2 camas dobles y una cama sencilla, con baño/ducha al aire libre. Capacidad total para 22 personas.*</p><p>La zona de recreo consiste del espacio cubierto “El casino” en donde encuentra una mesa de Ping-Pong, un juego de dardos y una pista de mini-tejo. Par las personas que no pueden vivir sin TV, hemos instalado una pequeña pantalla conectada a la red de Direct-TV. En la finca tambien encuentra una cancha para badminton y una tiroleza. La piscina profunda invita saltos desde las rocas.</p><p><small class="mt-3 d-block">**Para grupos de mas de 22 personas podemos combinar la finca NATALIE con la finca LUCERNA, unidas por un puente sobre la quebrada “La guacharaca”.<br>Mas información bajo <a href="/es/destinos/pradolu">PRADO LUCERNA</a></small></p>',
          geoLocation:{
            alt:'Imagen de finca Natalie en Prado',
            name:'Prado: finca "Natalie"',
            address:"Puerto Hidroprado, Tolima, Colombia"
          },
          imageTextCombo:{
            alt:"Piscina de la finca",
            galleryLinkText:'Visita la galeria de fotos',
            text:'<h2 class="mb-2">Servicios incluidos:</h2><ul class="services"><li>Transporte de ida y vuelta con canoa propia, con todas las medidas de seguridad.</li><li> Refresco de bienvenida.</li><li>Aseo de las habitaciones.</li><li>Servicio de cocina.</li><li>Limpieza final incluyendo lavada de ropa de cama.</li></ul><h2 class="mb-2">Servicios para contratar**:</h2><ul class="services"><li>Desayuno, almuerzo y comida de menú único diarios, previamente escogido.</li><li>Venta de gaseosas, cerveza y mecatos.</li><li>Esquí acuático, aventura en donut y en gusano de 3 puestos.</li><li>Alquiler de Standup Paddle y de 2 kayak doble.</li></ul><small class="mt-3 d-block">**solicite información detallada y precios por separado</small>'
          }
        },
        stamarta: {
          title: 'SANTA MARTA  Apartamento 1501D',
          metaDesrciption: 'El apartamento se encuentra en el piso 15 del edificio Bahia Linda  en frente a la playa en la ciudad de Santa Marta',
          text1:'<p>Nuestro apartamento se encuentra en el piso 15 del edificio Bahia Linda en frente a la playa en la ciudad de Santa Marta. El edificio cuenta con una piscina panoramica semi-olympica, un gimnasio y una cancha de minifutbol sobre la playa. Porteria personalizada por 24 horas.</p><p>Parqueadero doble a disposición de los visitantes.</p><p>El apartamento tiene 3 dormitorios con cama doble, con acceso directo a la terraza desde cada dormitorio, mas una cama-colchón inflable a disposición de los huéspedes. Dos baños/ducha y un baño para visita. Cuenta con un amplio espacio de sala/comedor. </p><p>La moderna cocina abierta esta completamente dotada con closets para guardar comida. Cuenta con una estufa de gas con extractor, Nevera con congelador, una maquina lavaplatos, un Microondas combinado, y una lavadora de ropas.</p><p>El apartamento se refrezca con ventiladores de techo.</p><p>Esta de 10 a 15 Minutos caminando desde El Edificio hasta la Marina, el Malecón, Parque Bolivar o el Parque de los Novios.</p>',
          geoLocation:{
            alt:'Vista de Santa Marta',
            name:'Apto en Bahia Linda',
            address:"Bahia linda, Santa Marta, Magdalena, Colombia"
          },
          imageTextCombo:{
            alt:"Vista  de la playa desde la terraza del apartamento",
            galleryLinkText:'Visita la galeria de fotos',
            text:''
          }
        }
      },
      gallery: {
        covenas: {
          title: 'Imágenes de Coveñas',
          metaDesrciption: 'Galería de imágenes de la cabaña en Coveñas',
          gallery: {
            altP1: 'Descrpcion imagen 1',
            altP2: 'Descrpcion imagen 2',
            altP3: 'Descrpcion imagen 3',
            altP4: 'Descrpcion imagen 4',
            altP5: 'Descrpcion imagen 5',
            altP6: 'Descrpcion imagen 6',
            altP7: 'Descrpcion imagen 7',
            altP8: 'Descrpcion imagen 8',
            altP9: 'Descrpcion imagen 9',
            altP10: 'Descrpcion imagen 10',
          },
        },
        pradolu: {
          title: 'Imágenes de la finca Lucerna en Prado ',
          metaDesrciption: 'Galería de imágenes de la finca Lucerna',
          gallery: {
            altP1: 'Descrpcion imagen 1',
            altP2: 'Descrpcion imagen 2',
            altP3: 'Descrpcion imagen 3',
            altP4: 'Descrpcion imagen 4',
            altP5: 'Descrpcion imagen 5',
            altP6: 'Descrpcion imagen 6',
            altP7: 'Descrpcion imagen 7',
            altP8: 'Descrpcion imagen 8',
            altP9: 'Descrpcion imagen 9',
            altP10: 'Descrpcion imagen 10',
          },
        },
        pradonat: {
          title: 'Imágenes de la finca Natalie en Prado',
          metaDesrciption: 'Galería de imágenes de la finca Natalie',
          gallery: {
            altP1: 'Descrpcion imagen 1',
            altP2: 'Descrpcion imagen 2',
            altP3: 'Descrpcion imagen 3',
            altP4: 'Descrpcion imagen 4',
            altP5: 'Descrpcion imagen 5',
            altP6: 'Descrpcion imagen 6',
            altP7: 'Descrpcion imagen 7',
            altP8: 'Descrpcion imagen 8',
            altP9: 'Descrpcion imagen 9',
            altP10: 'Descrpcion imagen 10',
          },
        },
        stamarta: {
          title: 'Imágenes de Sta. Marta',
          metaDesrciption: 'Galería de imágenes del apartamento en Sta. Marta',
          gallery: {
            altP1: 'Descrpcion imagen 1',
            altP2: 'Descrpcion imagen 2',
            altP3: 'Descrpcion imagen 3',
            altP4: 'Descrpcion imagen 4',
            altP5: 'Descrpcion imagen 5',
            altP6: 'Descrpcion imagen 6',
            altP7: 'Descrpcion imagen 7',
            altP8: 'Descrpcion imagen 8',
            altP9: 'Descrpcion imagen 9',
            altP10: 'Descrpcion imagen 10',
          },
        },
      },
    },
  })
}
