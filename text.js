const data = {
  html5: {
    Portfolios: {
      InBoxPortfolio: {
        title: 'inBox Personal Portfolio HTML5',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
      InStackPortfolio: {
        title: 'inStack Portfolio HTML5',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
    },

    eCommerce: {
      InStackEcommerce: {
        title: 'inStack eCommerce HTML5',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
    },
  },

  reactjs: {
    Portfolios: {
      InBoxPortfolio: {
        title: 'Smart Box Portfolio React.js',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
      InStackPortfolio: {
        title: 'inStack Portfolio React.js',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
    },

    eCommerce: {
      InStackEcommerce: {
        title: 'inStack eCommerce React.js',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
    },
  },

  nextjs: {
    Portfolios: {
      InBoxPortfolio: {
        title: 'Smart Box Portfolio Next.js',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
      InStackPortfolio: {
        title: 'inStack Portfolio Next.js',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
    },

    eCommerce: {
      InStackEcommerce: {
        title: 'inStack eCommerce Next.js',
        image: '/images/templates/InBoxPortfolio.png',
        purchase: '',
        preview: '',
      },
    },
  },
};

const all = [];
const html5 = [];
const nextjs = [];
const reactjs = [];

let currentData = [];

Object.entries(data['html5']).map(([key, obj]) => {
  Object.entries(obj).map(([key, obj2]) => {
    html5.push(obj2);
  });
});

const storeData = (code) => {
  currentData = [];
  if (code == 'all') {
    Object.entries(data).map(([key, obj]) => {
      Object.entries(obj).map(([key2, obj2]) => {
        Object.entries(obj2).map(([key3, obj3]) => {
          currentData.push({
            code: key,
            category: key2,
            templateName: key3,
            ...obj3,
          });
        });
      });
    });
  } else {
    Object.entries(data[code]).map(([key, obj]) => {
      Object.entries(obj).map(([key2, obj2]) => {
        currentData.push({ code, category: key, templateName: key2, obj2 });
      });
    });
  }
};
