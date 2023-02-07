export const usePage = () => {
  return {
    home: {
      name: 'home',
      title: 'O nas',
      location: '/',
      fullLocation: '/',
    },
    offer: {
      name: 'offer',
      title: 'Oferta',
      location: 'oferta',
      fullLocation: '/oferta',
      routes: {
        wedding: {
          name: 'wedding',
          title: 'Wesela',
          location: 'wesela',
          fullLocation: '/oferta/wesela',
        },
        communion: {
          name: 'communion',
          title: 'Komunie',
          location: 'komunie',
          fullLocation: '/oferta/komunie',
        },
        christening: {
          name: 'christening',
          title: 'Chrzciny',
          location: 'chrzciny',
          fullLocation: '/oferta/chrzciny',
        },
        birthday: {
          name: 'birthday',
          title: 'Urodziny',
          location: 'urodziny',
          fullLocation: '/oferta/urodziny',
        },
        others: {
          name: 'others',
          title: 'Inne',
          location: 'inne',
          fullLocation: '/oferta/inne',
        },
      },
    },
    gallery: {
      name: 'gallery',
      title: 'Galeria',
      location: 'galeria',
      fullLocation: '/galeria',
    },
    contact: {
      name: 'contact',
      title: 'Kontakt',
      location: 'kontakt',
      fullLocation: '/kontakt',
    },
  };
};
