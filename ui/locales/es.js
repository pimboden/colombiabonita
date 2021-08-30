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
      altTel: 'Imagen de un receptor telefónico',
      email: 'info@colombiabonita.com',
      altEmail: 'Imagen de un sobre',
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
      link2: 'Quienes somos',
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
        metaDesrciption: 'In colombiabonita bieten wir Ihnen vier außergewöhnliche Orte, einfach, aber mit allem Komfort, wo Sie mit Ihrer Familie oder Freunden die natürliche Schönheit Kolumbiens genießen können.',
      },
      aboutUs: {
        title: 'Quiene somos?',
        metaDesrciption: 'En colombiabonita ofrecemos cuatro lugares extraordinarios, sencillos, pero con todas las comodidades, en donde puede disfrutar con su familia o con sus amigos la belleza natural de Colombia',
        text1:'Español - <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>'
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
          }
        },
        pradolu: {
          title: 'Prado finca Lucerna',
          metaDesrciption: 'Prado. La finca Lucerna ofrece ...',
          text1:'Español - Prado - Lucerna<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'Imagen de finca Lucernaen Prado',
            name:'Prado: finca "Lucerna"',
            address:"Puerto Hidroprado, Tolima, Colombia"
          }
        },
        pradonat: {
          title: 'Prado finca Natalie',
          metaDesrciption: 'Prado. La finca Natalie ofrece....',
          text1:'Español - Prado - Natalie<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'Imagen de finca Natalie en Prado',
            name:'Prado: finca "Natalie"',
            address:"Puerto Hidroprado, Tolima, Colombia"
          }
        },
        stamarta: {
          title: 'Santa Marta',
          metaDesrciption: 'El apto, en Sta Marta....',
          text1:'Español - Santa Marta - <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'Vista de Santa Marta',
            name:'Apto en Bahia Linda',
            address:"Bahia linda, Santa Marta, Magdalena, Colombia"
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
