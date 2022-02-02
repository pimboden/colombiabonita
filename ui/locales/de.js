export default async () => {
  return await Promise.resolve({
    langchangerComp: {
      lang_es: 'Es',
      lang_en: 'En',
      lang_de: 'De',
      es_alt: 'Flagge von Kolumbien',
      en_alt: 'Flagge von USA',
      de_alt: 'Flagge von Deutschland',
    },
    galleryComp: {
      prev: 'Vorheriges Bild',
      next: 'Nächstes Bild',
      first: 'Zum ersten Bild wechseln',
      last: 'Zum letzten Bild wechseln',
      slideX: 'Gehe zu Bild %s',
      pageX: 'Gehe zu Seite %s',
      play: 'Autoplay starten',
      pause: 'Autoplay pausieren',
      noAltProvided: 'Keine Beschreibung für das Bild gefunden',
    },
    cbFooterComp: {
      altYoutubeLogo: 'Youtube Logo',
      altFbLogo: 'Facebook Logo',
      altInstLogo: 'Instagram Logo',
    },
    navitems: {
      link1: 'Home',
      link2: 'Über uns',
      link3: 'Zielorte',
      link4: 'Gallerie',
      link5: 'Preise',
      link6: 'Kontakt',
      link7: 'Sprache',
      linkDestinationpradoNnat: 'Prado - Natalie',
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
        completeName: "Vollständiger Name",
        phone: "Telefonnummer",
        email: "E-Mail Adresse",
        message: "Mitteilung",
        btnSend:"Mitteilung senden",
        reason: "Grund der Kontaktaufnahme",
        reasons:{
          cotizacion: "Kostenvoranschlag",
          reclamo: "Beschwerde",
          otro: "Andere Anfragen"
        },
        error:"Leider konnte Ihre Kontaktanfrage nicht versandt werden.<br> Bitte versuchen Sie es später noch einmal.",
        success:"Ihre Kontaktanfrage wurde versandt.<br>Wir werden es schnellstmöglich bearbeiten"
      },
      validators:{
        completeName: "Bitte vollständiger Name angeben",
        phone: "Bitte Telefonnummer angeben",
        email: "Bitte E-Mail Adresse angeben",
        message: "Bitte Mitteilung angeben",
      }
    },
    content: {
      contact: {
        title: 'Kontakt',
        metaDesrciption: 'Kontaktformular'
      }
    }

  })
}
