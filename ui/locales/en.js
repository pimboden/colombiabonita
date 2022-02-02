export default async () => {
  return await Promise.resolve({
    langchangerComp: {
      lang_es: 'Es',
      lang_en: 'En',
      lang_de: 'De',
      es_alt: 'Flag of Colombia',
      en_alt: 'Flag of USA',
      de_alt: 'Flag of Germany',
    },
    gallery:{
      gottoDestination: "Detailed description of the site"
    },
    galleryComp: {
      prev: 'Previous slide',
      next: 'Next slide',
      first: 'Go to first slide',
      last: 'Go to last slide',
      slideX: 'Go to slide %s',
      pageX: 'Go to page %s',
      play: 'Start autoplay',
      pause: 'Pause autoplay',
      noAltProvided: 'No description provided for this image',
    },
    cbFooterComp: {
      altYoutubeLogo: 'Youtube logo',
      altFbLogo: 'Facebook logo',
      altInstLogo: 'Instagram logo',
    },
    navitems: {
      link1: 'Home',
      link2: 'About us',
      link3: 'Destinations',
      link4: 'Gallery',
      link5: 'Prices',
      link6: 'Contact',
      link7: 'Language',
      linkDestinationpradonat: 'Prado - Natalie',
      linkDestinationpradolu: 'Prado - Lucerna',
      linkDestinationcove: 'Coveñas',
      linkDestinationstamarta: 'Santa Marta',
      linkGallerypradonat: 'Prado - Natalie',
      linkGallerypradolu: 'Prado - Lucerna',
      linkGallerycove: 'Coveñas',
      linkGallerystamarta: 'Santa Marta',
      lang_es: 'Español',
      lang_en: 'English',
      lang_de: 'Deutsch'

    },
    contact: {
      form:{
        finca:" Lugar que me interesa",
        completeName: "Full name",
        phone: "Phone number",
        email: "Email address",
        message: "Message",
        btnSend:"Send message",
        reason: "Reason for contacting us",
        reasons:{
          cotizacion: "Request for quote",
          reclamo: "Complaint",
          otro: "Other (Request for further information)"
        },
        pricePrado:"Precio por persona/día incluyendo las 3 comidas del Menú* del día Col$ 112000.— (mínimo 5 personas)<br/>*consulte <a href='https://colombiabonita.tk/' target='_blank'>lista de Menus </a> <br/><br>Si prefiere sin comida menciónelo en su solicitud de cotización.",
        priceCov:"Precio por persona/dia incluyendo 3 deliciosas comidas típicas costeñas  $ 70000.—por persona/dia (mínimo 5 personas) <br><br>Si prefiere únicamente con desayuno, menciónalo en su solicitud de cotización",
        priceStaMarta:"Precio temporada baja:  250000. —por día.  <br/>Temporada Alta 600000.--  (Semana Santa, Fin Año, mes de Julio)",
        error:"Sorry, your contact request could not be sent.<br> Please try again later.",
        success:"Your contact request has been sent.<br>We will process it as soon as possible"


      },
      validators:{
        completeName: "Please type your full name",
        phone: "Please type your phone number ",
        email: "Please type your email address",
        message: "Please type your message",
      }
    },
    content: {
      contact: {
        title: 'Contact',
        metaDesrciption: 'Contact form'
      }
    }
  })
}
