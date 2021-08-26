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
    sloganComp: {
      text: '!Authentic and magic!',
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
      title1: 'Follow us',
      altYoutubeLogo: 'Youtube logo',
      altFbLogo: 'Facebook logo',
      altInstLogo: 'Instagram logo',
      title2: 'Contact us',
      phone: '+57 311 421 31 87',
      altTel: 'Image o a phone handset',
      email: 'info@colombiabonita.com',
      altEmail: 'Image of an envelope',
    },
    destSelectorComp:{
      covenasAlt: "The sea at coveñas",
      covenasCaption: "Coveñas",
      pradoluAlt: "Photo of Prado's macaw",
      pradoluCaption: "Prado - Lucerna",
      pradonatAlt: "Photo of Prado's macaw",
      pradonatCaption: "Prado -Natalie ",
      stamartaAlt: "Hammock in Santa Marta",
      stamartaCaption: "Santa Marta"
    },
    mainLogoComp: {
      alt: 'Logo with an abstract parrot with the colors of Colombia and the text Colombia bonita',
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
        btnSend:"Send message"
      },
      validators:{
        completeName: "Please type your full name",
        phone: "Please type your phone number ",
        email: "Please type your email address",
        message: "Please type your message",
      }
    },
    content: {
      aboutUs: {
        title: 'About us',
        text1:'English - <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>'

      },
      contact: {
        title: 'Contact',
      },
      destinations: {
        title: 'Destinations',
        gmapUrlText: 'Open in Googlemaps',
        covenas: {
          title: 'Coveñas',
          text1:'English - Coveñas <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'Image of house in Coveñas',
            name:'Coveñas: house "Santa Maria"',
            address:"Exit Punta Bolivar, San Antero, Córdoba, Colombia"
          }
        },
        pradolu: {
          title: 'Prado - House Lucerna',
          text1:'English - Prado Lucerna <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'Image of house Lucerna in Prado',
            name:'Prado: house "Lucerna"',
            address:"Puerto Hidroprado, Tolima, Colombia"
          }
        },
        pradonat: {
          title: 'Prado - House Natalie',
          text1:'English - Prado Natalie<p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'Image of house Natalie in Prado',
            name:'Prado: house "Natalie"',
            address:"Puerto Hidroprado, Tolima, Colombia"
          }
        },
        stamarta: {
          title: 'Santa Marta',
          text1:'English - Santa Marta <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p><h2>Header Level 2</h2><ol> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ol><blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote><h3>Header Level 3</h3><ul> <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li> <li>Aliquam tincidunt mauris eu risus.</li></ul><pre><code>#header h1 a { display: block; width: 300px; height: 80px;}</code></pre>',
          geoLocation:{
            alt:'View from Santa MArta',
            name:'Flat in Bahia Linda',
            address:"Bahia linda, Santa Marta, Magdalena, Colombia"
          }
        }
      },
      gallery: {
        covenas: {
          title: 'Images of Coveñas',
          gallery: {
            altP1: 'Description image 1',
            altP2: 'Description image 2',
            altP3: 'Description image 3',
            altP4: 'Description image 4',
            altP5: 'Description image 5',
            altP6: 'Description image 6',
            altP7: 'Description image 7',
            altP8: 'Description image 8',
            altP9: 'Description image 9',
            altP10: 'Description image 10',
          },
        },
        pradolu: {
          title: 'Images of Prado - Lucerna',
          gallery: {
            altP1: 'Description image 1',
            altP2: 'Description image 2',
            altP3: 'Description image 3',
            altP4: 'Description image 4',
            altP5: 'Description image 5',
            altP6: 'Description image 6',
            altP7: 'Description image 7',
            altP8: 'Description image 8',
            altP9: 'Description image 9',
            altP10: 'Description image 10',
          },
        },
        pradonat: {
          title: 'Images of Prado - Natalie',
          gallery: {
            altP1: 'Description image 1',
            altP2: 'Description image 2',
            altP3: 'Description image 3',
            altP4: 'Description image 4',
            altP5: 'Description image 5',
            altP6: 'Description image 6',
            altP7: 'Description image 7',
            altP8: 'Description image 8',
            altP9: 'Description image 9',
            altP10: 'Description image 10',
          },
        },
        stamarta: {
          title: 'Images of Santa Marta',
          gallery: {
            altP1: 'Description image 1',
            altP2: 'Description image 2',
            altP3: 'Description image 3',
            altP4: 'Description image 4',
            altP5: 'Description image 5',
            altP6: 'Description image 6',
            altP7: 'Description image 7',
            altP8: 'Description image 8',
            altP9: 'Description image 9',
            altP10: 'Description image 10',
          },
        },
      },
    },
  })
}
