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
    gallery:{
      gottoDestination: "Ausführliche Beschreibung des Standorts"
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
        finca:" Ort, an dem ich interessiert bin",
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
        pricePrado:"Preis pro Person/Tag einschließlich der 3 Mahlzeiten des <a href='https://colombiabonita.tk/' target='_blank'>Tagesmenüs</a> Col$ 112000.-   (mindestens 5 Personen) <br/><br>Wenn Sie kein Essen bevorzugen, geben Sie dies bitte in Ihrer Angebotsanfrage an.",
        priceCov:"Preis pro Person/Tag einschließlich Frühstück und Mittagessen.  Köstliche typische Küstengerichte, die über einem Holzfeuer gekocht werden: $ 70000,- pro Person/Tag (mindestens 5 Personen).",
        priceStaMarta:"Preis Nebensaison: 250000 pro Tag <br/>Hochsaison 600000.--  (Ostern, Dezember/Januar, Juli)",
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
