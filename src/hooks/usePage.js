export const usePage = () => {
  return {
    home: {
      name: 'home',
      title: 'o nas',
      location: '/',
    },
    offer: {
      name: 'offer',
      title: 'oferta',
      location: 'oferta',
      routes: {
        wedding: {
          name: 'wedding',
          title: 'wesela',
          location: 'wesela',
        },
        communion: {
          name: 'communion',
          title: 'komunie',
          location: 'komunie',
        },
        christening: {
          name: 'christening',
          title: 'chrzciny',
          location: 'chrzciny',
        },
        birthday: {
          name: 'birthday',
          title: 'urodziny',
          location: 'urodziny',
        },
        others: {
          name: 'others',
          title: 'inne',
          location: 'inne',
        },
      },
    },
    gallery: {
      name: 'gallery',
      title: 'galeria',
      location: 'gallery',
    },
    contact: {
      name: 'contact',
      title: 'kontakt',
      location: 'kontakt',
    },
  };
};
