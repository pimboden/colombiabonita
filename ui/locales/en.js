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
      linkDestinationpradonat: 'Prado - Natalie',
      linkDestinationpradolu: 'Prado - Lucerna',
      linkDestinationcove: 'Coveñas',
      linkDestinationstamarta: 'Sta. Marta',
      linkGallerypradonat: 'Prado - Natalie',
      linkGallerypradolu: 'Prado - Lucerna',
      linkGallerycove: 'Coveñas',
      linkGallerystamarta: 'Santa Marta',

    },
    contact: {
      form:{
        completeName: "Full name",
        phone: "Phone number",
        email: "Email address",
        message: "Message",
        btnSend:"Send message",
        reason: "Reason for contacting us",
        reasons:{
          cotizacion: "Request for quote",
          reclamo: "Complaint",
          otro: "Other"
        },
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
