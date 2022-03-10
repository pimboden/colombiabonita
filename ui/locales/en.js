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
        finca:"Place I am interested in",
        completeName: "Full name",
        phone: "Telephone number",
        email: "E-mail address",
        message: "Message",
        btnSend:"Send message",
        reason: "Reason for contact",
        reasons:{
          cotizacion: "Quote",
          reclamo: "Complaint",
          otro: "Other (Request for further information)"
        },
        pricePrado:"Price per person/day including the 3 meals of the <a href='https://colombiabonita.tk/' target='_blank'>menu* of the day </a> Col$ 112000.— (minimum 5 persons) <br/><br/>If you prefer without food please mention it in your quote request.",
        priceCov:"Price per person/day including 3 delicious typical coastal meals $ 70000.-per person/day (minimum 5 persons)<br><br>If you prefer breakfast only, please mention it in your quotation request.",
        priceStaMarta:"Price low season: 250000. -per day.<br/>High season 600000.-- (Easter, New Year's Eve, July)",
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
