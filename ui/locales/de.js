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
        finca:" Lugar que me interesa",
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
        pricePrado:"Precio por persona/día incluyendo las 3 comidas del Menú* del día Col$ 112000.— (mínimo 5 personas)<br/>*consulte <a href='https://colombiabonita.tk/' target='_blank'>lista de Menus </a> <br/><br>Si prefiere sin comida menciónelo en su solicitud de cotización.",
        priceCov:"Precio por persona/dia incluyendo 3 deliciosas comidas típicas costeñas  $ 70000.—por persona/dia (mínimo 5 personas) <br><br>Si prefiere únicamente con desayuno, menciónalo en su solicitud de cotización",
        priceStaMarta:"Precio temporada baja:  250000. —por día.  <br/>Temporada Alta 600000.--  (Semana Santa, Fin Año, mes de Julio)",
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
