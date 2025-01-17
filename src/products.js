const products = [
    {
      name: "Classic Hummus",
      id: 1000,
      description:
        "Our smooth and creamy classic hummus, perfect for dipping or spreading.",
      detailedDescription:
        "Our classic hummus is made with the finest chickpeas, tahini, olive oil, lemon juice, and a touch of garlic. It's smooth, creamy, and perfect for any occasion.",
      ingredients: "Chickpeas, tahini, olive oil, lemon juice, garlic, salt.",
      categories: ["Hummus", "Dips"],
      image: "hummus.jpg",
      shelfLife: "2 weeks",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 1.8,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.5,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 4.0,
          weight: 400,
          boxWeight: 400 * 12,
        },
      ],
    },
    {
      name: "Spicy Hummus",
      id: 1001,
      description:
        "Classic hummus with a spicy kick, great for those who like it hot.",
      detailedDescription:
        "Our spicy hummus takes the classic recipe and adds a blend of hot peppers and spices to give it a kick. It's perfect for those who love a little heat in their dip.",
      ingredients:
        "Chickpeas, tahini, olive oil, lemon juice, garlic, salt, hot peppers, spices.",
      categories: ["Hummus", "Dips", "Spicy"],
      image: "spicy-hummus.jpg",
      shelfLife: "2 weeks",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 1.9,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.64,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 4.22,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Beetroot Hummus",
      id: 1002,
      description:
        "A vibrant and healthy twist on traditional hummus, made with fresh beetroots.",
      detailedDescription:
        "Our beetroot hummus is made with fresh beetroots, chickpeas, tahini, and a blend of spices. It's not only delicious but also packed with nutrients.",
      ingredients:
        "Beetroots, chickpeas, tahini, olive oil, lemon juice, garlic, salt.",
      categories: ["Hummus", "Dips", "Veggie"],
      image: "beetroot-hummus.jpg",
      shelfLife: "2 weeks",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 2.0,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.78,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 4.44,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Eggplant Salad",
      id: 1003,
      description:
        "A delicious blend of roasted eggplants, olive oil, and Mediterranean spices.",
      detailedDescription:
        "Our eggplant salad features roasted eggplants blended with olive oil, garlic, and a mix of Mediterranean spices. It's a perfect side dish or a healthy snack.",
      ingredients: "Eggplants, olive oil, garlic, salt, Mediterranean spices.",
      categories: ["Eggplant", "Salads", "Veggie"],
      image: "eggplant.jpg",
      shelfLife: "1 week",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 1.7,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.36,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 3.78,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Baba Ghanoush",
      id: 1004,
      description:
        "A smoky eggplant dip blended with tahini, lemon, and garlic.",
      detailedDescription:
        "Our baba ghanoush is made from roasted eggplants, tahini, lemon juice, and garlic, blended to a smooth and smoky perfection.",
      ingredients: "Eggplants, tahini, lemon juice, garlic, salt, olive oil.",
      categories: ["Eggplant", "Dips"],
      image: "baba-ghanoush.jpg",
      shelfLife: "1 week",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 1.6,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.22,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 3.56,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Tahini",
      id: 1005,
      description:
        "Creamy tahini made from roasted sesame seeds, ideal for dressings and dips.",
      detailedDescription:
        "Our tahini is made from the finest roasted sesame seeds, blended to a smooth and creamy texture. It's perfect for dressings, dips, and spreads.",
      ingredients: "Roasted sesame seeds, salt.",
      categories: ["Dips"],
      image: "tahini1.jpg",
      shelfLife: "6 months",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 2.1,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.92,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 4.67,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "To-Go Hummus",
      id: 1006,
      description:
        "Our classic hummus in a convenient to-go package with pretzels for dipping.",
      detailedDescription:
        "Our to-go hummus packs our classic hummus with a side of pretzels, perfect for snacking on the go. It's convenient and delicious.",
      ingredients:
        "Chickpeas, tahini, olive oil, lemon juice, garlic, salt, pretzels.",
      categories: ["To-Go", "Hummus", "Dips"],
      image: "to-go.jpg",
      shelfLife: "2 weeks",
      options: [
        {
          size: "90gr",
          productsPerBox: 28,
          price: 0.6,
          weight: 90,
          boxWeight: 90 * 28,
        },
        {
          size: "120gr",
          productsPerBox: 20,
          price: 0.9,
          weight: 120,
          boxWeight: 120 * 20,
        },
      ],
    },
    {
      name: "Carrot Salad",
      id: 1007,
      description:
        "Shredded carrots with a tangy dressing, a refreshing and healthy option.",
      detailedDescription:
        "Our carrot salad is made with fresh shredded carrots and a tangy dressing. It's refreshing, healthy, and perfect as a side dish or snack.",
      ingredients: "Carrots, olive oil, vinegar, salt, pepper.",
      categories: ["Veggie", "Salads"],
      image: "carrot.jpg",
      shelfLife: "1 week",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 1.85,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.57,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 4.11,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Coleslaw",
      id: 1008,
      description:
        "Crisp cabbage and carrots in a creamy dressing, perfect for sandwiches or as a side.",
      detailedDescription:
        "Our coleslaw is a classic blend of crisp cabbage and carrots in a creamy dressing. It's perfect for sandwiches or as a side dish.",
      ingredients:
        "Cabbage, carrots, mayonnaise, vinegar, sugar, salt, pepper.",
      categories: ["Veggie", "Salads"],
      image: "coleslaw.jpg",
      shelfLife: "1 week",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 2.3,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 3.19,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 5.11,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Matbucha",
      id: 1009,
      description:
        "A spicy tomato and pepper dip, a staple in Mediterranean cuisine.",
      detailedDescription:
        "Our matbucha is a traditional Mediterranean dip made with tomatoes, peppers, garlic, and spices. It's spicy, flavorful, and perfect for dipping.",
      ingredients: "Tomatoes, peppers, garlic, olive oil, spices.",
      categories: ["Dips", "Spicy"],
      image: "matbucha.jpg",
      shelfLife: "2 weeks",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 1.75,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.43,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 3.89,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Turkish Salad",
      id: 1010,
      description: "Finely chopped vegetables in a zesty tomato-based sauce.",
      detailedDescription:
        "Our Turkish salad features finely chopped vegetables in a zesty tomato-based sauce. It's a perfect blend of fresh ingredients with a flavorful twist.",
      ingredients:
        "Tomatoes, cucumbers, peppers, onions, parsley, olive oil, lemon juice, salt.",
      categories: ["Salads", "Veggie"],
      image: "turkish.jpg",
      shelfLife: "1 week",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 2.2,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 3.06,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 4.89,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      name: "Tabbouleh",
      id: 1011,
      description:
        "A refreshing herb salad with bulgur wheat, tomatoes, and a lemony dressing.",
      detailedDescription:
        "Our tabbouleh is a refreshing herb salad made with bulgur wheat, tomatoes, parsley, mint, and a zesty lemon dressing. It's a healthy and flavorful option.",
      ingredients:
        "Bulgur wheat, tomatoes, parsley, mint, lemon juice, olive oil, salt.",
      categories: ["Salads", "Veggie"],
      image: "tabbouleh.jpg",
      shelfLife: "1 week",
      options: [
        {
          size: "200gr",
          productsPerBox: 28,
          price: 1.65,
          weight: 200,
          boxWeight: 200 * 28,
        },
        {
          size: "300gr",
          productsPerBox: 18,
          price: 2.29,
          weight: 300,
          boxWeight: 300 * 18,
        },
        {
          size: "500gr",
          productsPerBox: 12,
          price: 3.67,
          weight: 500,
          boxWeight: 500 * 12,
        },
      ],
    },
    {
      "name": "Creamy Potato Salad",
      "id": 1001,
      "description": "A classic creamy potato salad with a rich and tangy dressing.",
      "detailedDescription": "Our creamy potato salad is made with tender potatoes, mixed with a rich dressing of mayonnaise, sour cream, and mustard, complemented by crunchy bits of onion, celery, and a sprinkle of herbs. Perfect as a side dish for any meal or barbecue.",
      "ingredients": "Potatoes, mayonnaise, sour cream, mustard, onion, celery, parsley, salt, pepper.",
      "categories": ["Salads", "Veggie"],
      "image": "potato-salad1.jpg",
      "shelfLife": "1 week",
      "options": [
        {
          "size": "250gr",
          "productsPerBox": 24,
          "price": 2.0,
          "weight": 250,
          "boxWeight": 250 * 24
        },
        {
          "size": "500gr",
          "productsPerBox": 12,
          "price": 3.5,
          "weight": 500,
          "boxWeight": 500 * 12
        },
        {
          "size": "750gr",
          "productsPerBox": 8,
          "price": 5.0,
          "weight": 750,
          "boxWeight": 750 * 8
        }
      ]
    },
    {
      "name": "Fresh Greek Salad",
      "id": 1002,
      "description": "A vibrant and refreshing Greek salad with fresh veggies and feta cheese.",
      "detailedDescription": "Our fresh Greek salad is a delightful mix of crisp lettuce, juicy tomatoes, crunchy cucumbers, and tangy olives, all tossed in a light olive oil dressing and topped with creamy feta cheese cubes. Perfect for a light lunch or as a side to your favorite meal.",
      "ingredients": "Lettuce, tomatoes, cucumbers, olives, feta cheese, olive oil, oregano, salt, pepper.",
      "categories": ["Salads"],
      "image": "greek-salad.jpg",
      "shelfLife": "3 days",
      "options": [
        {
          "size": "250gr",
          "productsPerBox": 24,
          "price": 2.5,
          "weight": 250,
          "boxWeight": 250 * 24
        },
        {
          "size": "500gr",
          "productsPerBox": 12,
          "price": 4.0,
          "weight": 500,
          "boxWeight": 500 * 12
        },
        {
          "size": "750gr",
          "productsPerBox": 8,
          "price": 6.0,
          "weight": 750,
          "boxWeight": 750 * 8
        }
      ]
    }
  ]

  export default products