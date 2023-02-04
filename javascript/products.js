const products = [
    {
      id: 1,
      status: 'new',
      title: "jacket has two front pockets and an inner breast pocket on one side",
      price: 109.95,
      panel:'men',
      description:
        "Fairtrade and beautifully handmade by Native Kichwas Artisan. Anyone can enjoy this Jacket Young, Adult, Old or going to be Mama. This super cozy and warm jacket will be the great addition to your wardrobe and may be exactly what you are looking for.",
      category: "men's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/men/men_1.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      status: 'out-stock',
      title: "Llama wool jackets, coat, handmade, eagle",
      price: 53.95,
      panel:'men',
      description:
        "This woolen jacket has two front pockets and an inner breast pocket on one side. It is the hooded jacket and has the full front zip fastening",
      category: "men's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/men/men_2.jpg",
      rating: {
        rate: 4.5,
        count: 253,
      },
    },
    {
      id: 3,
      status: 'discount',
      title: "Scandia Canvas Anorak",
      price: 82.95,
      panel:'men',
      description:
        "This Scandia Canvas Anorak was designed to be an outer shell. It is also a great a stand alone Anorak to be used to block wind and snow.",
      category: "men's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/men/men_3.jpg",
      rating: {
        rate: 4.2,
        count: 253,
      },
    },
    {
      id: 4,
      status: 'new',
      title:
        "Wolverine Genuine Leather Jacket Logan Costume X-Men Coat Hugh Jackman Movie",
      price: 24.95,
      panel:'men',
      description:
        "Channel your inner Logan in this jacket. Made with genuine leather. Adult sizing.",
      inCart: false,
      inFavorites: false,
        category: "men's clothing",
      image: "img/products/men/men_4.jpg",
      rating: {
        rate: 4.6,
        count: 5621,
      },
    },
    {
      id: 5,
      status: 'discount',
      title:
        "Leather Jacket - Men's Leather Jacket - Motorcross Jacket - 100% Lambskin",
      price: 34.95,
      panel:'men',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "men's clothing",
      image: "img/products/men/men_5.jpg",
      rating: {
        rate: 4.1,
        count: 136,
      },
    },
    {
      id: 6,
      status: 'out-stock',
      title: "MEN'S CACHET COAT",
      price: 53.95,
      panel:'men',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "men's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/men/men_6.jpg",
      rating: {
        rate: 4.1,
        count: 2344,
      },
    },
    {
      id: 7,
      status: 'discount',
      title: "Women Summer Cotton dresses Nine-point Sleeves dress long",
      price: 72.95,
      panel:'women',
      description: "Women Summer Cotton dresses Nine-point Sleeves dress long",
      category: "women's clothing",
      image: "img/products/women/women_1.jpg",
      inCart: false,
      inFavorites: false,
      rating: {
        rate: 4.2,
        count: 7345,
      },
    },
    {
      id: 8,
      status: 'new',
      title:
        "Summer Cotton Dress Casual Loose Tunics Sundress Sleeveless Shirt Robes Midi Dresses Customized Dress",
      price: 53.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_2.jpg",
      rating: {
        rate: 4.2,
        count: 7345,
      },
    },
    {
      id: 9,
      status: 'out-stock',
      title: "Origami linen dress / Linen loose fitting MAXI dress",
      price: 53.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "women's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/women/women_3.jpg",
      rating: {
        rate: 4.2,
        count: 122,
      },
    },
    {
      id: 10,
      status: 'discount',
      title:
        "Cocktail long sleeve black women's dress, Fit and flare high neck work dress Stand collar black dresses",
      price: 53.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_4.jpg",
      rating: {
        rate: 4.2,
        count: 521,
      },
    },
    {
      id: 11,
      status: 'new',
      title: "Origami linen dress / Linen loose fitting MAXI dress",
      price: 53.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "women's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/women/women_5.jpg",
      rating: {
        rate: 4.2,
        count: 245,
      },
    },
    {
      id: 12,
      status: 'discount',
      title:
        "Women's linen Short Sleeves Summer maxi dress loose linen cotton kaftan oversize bridesmaid dress",
      price: 123.2,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_6.jpg",
      rating: {
        rate: 4.2,
        count: 427,
      },
    },
    {
      id: 13,
      status: 'out-stock',
      title:
        "Festival Dress, Boho Dress, Pixie Dress, Fairy Dress, Festival Clothing, Faerie Dress, Bohemian Dress",
      price: 28.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_7.jpg",
      rating: {
        rate: 4.2,
        count: 3642,
      },
    },
    {
      id: 14,
      status: 'discount',
      title:
        "Striped Linen Dress - Organic Linen Dress - Linen Short Sleeve Dress",
      price: 56.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_8.jpg",
      rating: {
        rate: 4.2,
        count: 2341,
      },
    },
    {
      id: 15,
      status: 'discount',
      title:
        "Boho wedding dress • lace dress with open back • modern white dress • romantic wedding",
      price: 28.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_9.jpg",
      rating: {
        rate: 4.2,
        count: 8345,
      },
    },
    {
      id: 16,
      status: 'new',
      title:
        "dress for women, long sleeves dress, linen womens clothing, minimalist dress linen",
      price: 28.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_10.jpg",
      rating: {
        rate: 4.2,
        count: 4124,
      },
    },
  
    {
      id: 17,
      status: 'new',
      title:
        "Apron Linen Dress - Cotton Apron Dress - Midi Linen Dress - Organic Cotton Dress",
      price: 28.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      inCart: false,
      inFavorites: false,
        category: "women's clothing",
      image: "img/products/women/women_11.jpg",
      rating: {
        rate: 4.2,
        count: 3745,
      },
    },
    {
      id: 18,
      status: 'discount',
      title: "Midi Flared cotton dress form Poland / handmade dress",
      price: 28.95,
      panel:'women',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "women's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/women/women_12.jpg",
      rating: {
        rate: 4.2,
        count: 4124,
      },
    },
    {
      id: 19,
      status: 'discount',
      title: "Baby Boy Gift Tattoo Baby Boy Clothes Newborn Boy",
      price: 68.24,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_1.jpg",
      rating: {
        rate: 4.2,
        count: 461,
      },
    },
    {
      id: 20,
      status: 'out-stock',
      title: "Green Baby Overalls - Toddler Overalls - Newborn Romper - Baby Romper - Cake Smash Outfit Boy",
      price: 68.24,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_2.jpg",
      rating: {
        rate: 4.2,
        count: 1445,
      },
    },
    {
      id: 21,
      status: 'out-stock',
      title: "Big Brother Shirt , Little brother Bodysuit, brother Shirt",
      price: 28.58,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_3.jpg",
      rating: {
        rate: 4.2,
        count: 1467,
      },
    },
    {
      id: 22,
      status: 'discount',
      title: "Ring Bearer Gift- Ring Bearer Shirt - Ring Security Shirt - Wedding Rehearsal Shirt",
      price: 92.24,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_4.jpg",
      rating: {
        rate: 4.9,
        count: 8292,
      },
    },
    {
      id: 23,
      status: 'discount',
      title: "Beard Shirt - Kids Beard Shirt - Kids Tee - Beard Goals - Future Beard Shirt - Kids Beard",
      price: 92.24,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_5.jpg",
      rating: {
        rate: 4.9,
        count: 2721,
      },
    },
    {
      id: 24,
      status: 'new',
      title: "Kids Personalised Dinosaur T-Shirt - Any Name and Date Children's Birthday Dino",
      price: 47.24,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_6.jpg",
      rating: {
        rate: 4.9,
        count: 2721,
      },
    },
    {
      id: 25,
      status: 'new',
      title: "Kids Personalised Dinosaur T-Shirt - Any Name and Date Children's Birthday Dino",
      price: 47.24,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_7.jpg",
      rating: {
        rate: 4.9,
        count: 853,
      },
    },
    {
      id: 26,
      status: 'discount',
      title: "Kids Personalised Dinosaur T-Shirt - Any Name and Date Children's Birthday Dino",
      price: 47.24,
      panel:'kid',
      description:
        "The Perfect Leather Jacket – experience the ultimate in fit, comfort and style. Hand cut and sewn to your measurements to ensure a perfect fit",
      category: "kid's clothing",
      inCart: false,
      inFavorites: false,
      image: "img/products/kid/kid_8.jpg",
      rating: {
        rate: 4.9,
        count: 145,
      },
    },
    {
      id: 27,
      status: 'new',
      title: "Plant Daddy Dad Hat for Plant Lover - Assorted Colors",
      price: 47.24,
      panel:'accessories',
      description:
        "With your luscious window sills and perfect lighting to raise a plethora of plant babies. These are no (dad) joke",
      category: "accessories",
      inCart: false,
      inFavorites: false,
      image: "img/products/accessories/accessories_1.jpg",
      rating: {
        rate: 4.9,
        count: 712,
      },
    },
    {
      id: 28,
      status: 'discount',
      title: "Black Leather Baseball Cap, Personalized Leather Hat",
      price: 58.24,
      panel:'accessories',
      description:
        "With your luscious window sills and perfect lighting to raise a plethora of plant babies. These are no (dad) joke",
      category: "accessories",
      inCart: false,
      inFavorites: false,
      image: "img/products/accessories/accessories_2.jpg",
      rating: {
        rate: 4.9,
        count: 712,
      },
    },
    {
      id: 29,
      status: 'new',
      title: "Rodan and Fields, hat, R+F, cap, trucker hat, womens hat",
      price: 82.99,
      panel:'accessories',
      description:
        "With your luscious window sills and perfect lighting to raise a plethora of plant babies. These are no (dad) joke",
      category: "accessories",
      inCart: false,
      inFavorites: false,
      image: "img/products/accessories/accessories_3.jpg",
      rating: {
        rate: 4.9,
        count: 712,
      },
    },
    {
      id: 30,
      status: 'out-stock',
      title: "Yeezus Embroidered Dad Hat (TLOP Life of Pablo)",
      price: 47.24,
      panel:'accessories',
      description:
        "With your luscious window sills and perfect lighting to raise a plethora of plant babies. These are no (dad) joke",
      category: "accessories",
      inCart: false,
      inFavorites: false,
      image: "img/products/accessories/accessories_4.jpg",
      rating: {
        rate: 4.9,
        count: 712,
      },
    },
    {
      id: 31,
      status: 'out-stock',
      title: "Yeezus Embroidered Dad Hat (TLOP Life of Pablo)",
      price: 47.24,
      panel:'accessories',
      description:
        "With your luscious window sills and perfect lighting to raise a plethora of plant babies. These are no (dad) joke",
      category: "accessories",
      inCart: false,
      inFavorites: false,
      image: "img/products/accessories/accessories_5.jpg",
      rating: {
        rate: 4.9,
        count: 712,
      },
    },
    
  ];

  export default products;