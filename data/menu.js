export const CATEGORIES = [
  {
    id: "italian",
    emoji: "🍕",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    count: 8,
    name: {
      en: "Italian Foods",
      ru: "Итальянская кухня",
      hy: "Իտալական ուտեստներ",
    },
    desc: {
      en: "Authentic Italian flavors",
      ru: "Аутентичные итальянские вкусы",
      hy: "Իսկական իտալական համեր",
    },
  },
  {
    id: "sushi",
    emoji: "🍣",
    image:
      "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
    count: 7,
    name: {
      en: "Sushi & Rolls",
      ru: "Суши и роллы",
      hy: "Սուշի և ռոլեր",
    },
    desc: {
      en: "Fresh Japanese delights",
      ru: "Свежие японские деликатесы",
      hy: "Թարմ ճապոնական համեղություններ",
    },
  },
  {
    id: "grill",
    emoji: "🥩",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    count: 9,
    name: {
      en: "Grill & Steaks",
      ru: "Гриль и стейки",
      hy: "Գրիլ և ստեյքեր",
    },
    desc: {
      en: "Prime cuts, open flame",
      ru: "Отборное мясо на огне",
      hy: "Ընտիր կտրվածքներ, բաց կրակ",
    },
  },
  {
    id: "salads",
    emoji: "🥗",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    count: 6,
    name: { en: "Salads", ru: "Салаты", hy: "Աղցաններ" },
    desc: {
      en: "Fresh & vibrant greens",
      ru: "Свежие и яркие зелёные блюда",
      hy: "Թարմ և կենդանի կանաչիներ",
    },
  },
  {
    id: "burgers",
    emoji: "🍔",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    count: 7,
    name: { en: "Burgers", ru: "Бургеры", hy: "Բուրգերներ" },
    desc: {
      en: "Smash patties & craft buns",
      ru: "Сочные котлеты на ремесленных булках",
      hy: "Հյութեղ կոտլետ և թարմ հաց",
    },
  },
  {
    id: "desserts",
    emoji: "🍰",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    count: 8,
    name: { en: "Desserts", ru: "Десерты", hy: "Անուշեղեններ" },
    desc: {
      en: "Sweet endings",
      ru: "Сладкое завершение",
      hy: "Քաղցր ավարտ",
    },
  },
  {
    id: "drinks",
    emoji: "🥤",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
    count: 10,
    name: { en: "Drinks", ru: "Напитки", hy: "Ըmpelikner" },
    desc: {
      en: "Juices, cocktails & more",
      ru: "Соки, коктейли и многое другое",
      hy: "Հյութեր, կոկտեյլներ և ավելին",
    },
  },
  {
    id: "soups",
    emoji: "🍜",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    count: 5,
    name: { en: "Soups", ru: "Супы", hy: "Ապուրներ" },
    desc: {
      en: "Warming broths & bisques",
      ru: "Согревающие бульоны и биски",
      hy: "Տաք արգանակներ և բիսկ",
    },
  },
];

export const FOODS = {
  italian: [
    {
      id: "it1",
      name: {
        en: "Margherita Pizza",
        ru: "Пицца Маргарита",
        hy: "Մարգարիտա պիցցա",
      },
      desc: {
        en: "San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil",
        ru: "Томаты Сан-Марцано, свежая моцарелла, базилик, оливковое масло",
        hy: "Թարմ մոցարելլա, ռեհան, ձիթաձեթ",
      },
      price: 12500,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    },
    {
      id: "it2",
      name: {
        en: "Truffle Pasta",
        ru: "Паста с трюфелем",
        hy: "Տrüfeli մակարոնեղեն",
      },
      desc: {
        en: "Tagliatelle, black truffle, parmigiano, butter sauce",
        ru: "Тальятелле, чёрный трюфель, пармиджано, сливочный соус",
        hy: "Տaliatelle, սև տrüfel, պarmezan",
      },
      price: 18900,
      tag: "new",
      img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    },
    {
      id: "it3",
      name: {
        en: "Spaghetti Carbonara",
        ru: "Спагетти Карбонара",
        hy: "Սpagetti Carbonara",
      },
      desc: {
        en: "Guanciale, egg yolk, pecorino romano, black pepper",
        ru: "Гуанчале, яичные желтки, пекорино, чёрный перец",
        hy: "Դasakan իտалakan beragir",
      },
      price: 14200,
      tag: "",
      img: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?w=400&q=80",
    },
    {
      id: "it4",
      name: {
        en: "Quattro Formaggi",
        ru: "Пицца Четыре сыра",
        hy: "Quattro Formaggi",
      },
      desc: {
        en: "Four cheese blend: mozzarella, gorgonzola, brie, parmesan",
        ru: "Четыре сыра: моцарелла, горгонзола, бри, пармезан",
        hy: "Չoрс padezi komb. мocarella, gorgonzola, bри, parmezan",
      },
      price: 15700,
      tag: "",
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    },
    {
      id: "it5",
      name: {
        en: "Risotto ai Funghi",
        ru: "Ризотто с грибами",
        hy: "Ризотто սնկով",
      },
      desc: {
        en: "Arborio rice, wild mushrooms, white wine, parmesan",
        ru: "Рис арборио, лесные грибы, белое вино, пармезан",
        hy: "Arborio բрinkаr, вayri snkер, parmezan",
      },
      price: 16300,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80",
    },
    {
      id: "it6",
      name: {
        en: "Lasagna Bolognese",
        ru: "Лазанья Болоньезе",
        hy: "Լazagna Bolognese",
      },
      desc: {
        en: "Slow-cooked beef ragù, béchamel, fresh pasta sheets",
        ru: "Рагу из говядины, соус бешамель, свежие листы пасты",
        hy: "Коrovaget ragu, beshamel",
      },
      price: 17500,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80",
    },
    {
      id: "it7",
      name: { en: "Tiramisu", ru: "Тирамису", hy: "Թиramisu" },
      desc: {
        en: "Espresso-soaked ladyfingers, mascarpone, cocoa",
        ru: "Печенье, пропитанное эспрессо, маскарпоне, какао",
        hy: "Mascarpone, espresso, kakao",
      },
      price: 8900,
      tag: "new",
      img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    },
    {
      id: "it8",
      name: {
        en: "Bruschetta Trio",
        ru: "Брускетта Трио",
        hy: "Bruschetta Trio",
      },
      desc: {
        en: "Tomato & basil, ricotta & honey, prosciutto & fig",
        ru: "Помидоры и базилик, рикотта и мёд, прошутто и инжир",
        hy: "Помидор, ricotta, proshutto",
      },
      price: 9500,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
    },
  ],
  sushi: [
    {
      id: "su1",
      name: {
        en: "Dragon Roll",
        ru: "Ролл Дракон",
        hy: "Վիշապ ռոլ",
      },
      desc: {
        en: "Shrimp tempura, avocado, tobiko, eel sauce drizzle",
        ru: "Темпура с креветками, авокадо, тобико, соус угря",
        hy: "Tempura krevetk, avocado, tobiko",
      },
      price: 16800,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
    },
    {
      id: "su2",
      name: {
        en: "Salmon Nigiri ×4",
        ru: "Нигири с лососем ×4",
        hy: "Salmon Nigiri ×4",
      },
      desc: {
        en: "Hand-pressed sushi rice, premium Atlantic salmon, wasabi",
        ru: "Прессованный рис, атлантический лосось, васаби",
        hy: "Ձeраксsum brinkar, атلантиан salmon, wasabi",
      },
      price: 14200,
      tag: "new",
      img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=400&q=80",
    },
    {
      id: "su3",
      name: {
        en: "Rainbow Roll",
        ru: "Ролл Радуга",
        hy: "Ծиататенак ռոлл",
      },
      desc: {
        en: "California roll topped with assorted sashimi",
        ru: "Ролл Калифорния с ассорти из сашими",
        hy: "California roll, sashimi ассortimento",
      },
      price: 18500,
      tag: "",
      img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
    },
    {
      id: "su4",
      name: {
        en: "Spicy Tuna Roll",
        ru: "Острый ролл с тунцом",
        hy: "Կattuu կծու ռоll",
      },
      desc: {
        en: "Albacore tuna, sriracha mayo, cucumber, sesame",
        ru: "Тунец альбакор, майонез шрирача, огурец, кунжут",
        hy: "Tuna, sriracha, varchik, kunжut",
      },
      price: 13900,
      tag: "spicy",
      img: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&q=80",
    },
    {
      id: "su5",
      name: { en: "Edamame", ru: "Эдамамэ", hy: "Էdamame" },
      desc: {
        en: "Steamed young soybeans, sea salt, sesame oil",
        ru: "Молодые соевые бобы на пару, морская соль, кунжутное масло",
        hy: "Եeghats soya lobikhner, tzovaaлat",
      },
      price: 5500,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1615361200141-f45040f367be?w=400&q=80",
    },
    {
      id: "su6",
      name: { en: "Miso Soup", ru: "Суп Мисо", hy: "Miso ապուր" },
      desc: {
        en: "Traditional dashi broth, silken tofu, wakame, spring onion",
        ru: "Традиционный бульон даси, тофу, вакамэ, зелёный лук",
        hy: "Dashi arganak, tofu, wakame",
      },
      price: 4800,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    },
    {
      id: "su7",
      name: {
        en: "Sashimi Platter",
        ru: "Ассорти сашими",
        hy: "Sashimi ассорти",
      },
      desc: {
        en: "12 slices: salmon, tuna, yellowtail, octopus",
        ru: "12 кусочков: лосось, тунец, желтохвост, осьминог",
        hy: "12 kտoр. salmon, tuna, octopus",
      },
      price: 24900,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80",
    },
  ],
  grill: [
    {
      id: "gr1",
      name: {
        en: "Ribeye 350g",
        ru: "Рибай 350г",
        hy: "Ribeye 350գ",
      },
      desc: {
        en: "USDA Prime dry-aged 45 days, chimichurri, roasted garlic",
        ru: "Мясо USDA Prime выдержкой 45 дней, чимичурри, жареный чеснок",
        hy: "USDA Prime, 45 ore чoracats, chimichurri",
      },
      price: 42000,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    },
    {
      id: "gr2",
      name: {
        en: "Lamb Chops",
        ru: "Бараньи рёбрышки",
        hy: "Гаrnapa karogner",
      },
      desc: {
        en: "French rack of lamb, herb crust, mint jelly, grilled asparagus",
        ru: "Каре ягнёнка, травяная корочка, мятное желе, спаржа",
        hy: "Gari гarnapar, kanacheghen kegev, anank",
      },
      price: 38500,
      tag: "",
      img: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&q=80",
    },
    {
      id: "gr3",
      name: {
        en: "Mixed Grill Platter",
        ru: "Ассорти гриль",
        hy: "Մиксед гриль ассорти",
      },
      desc: {
        en: "Beef, chicken, lamb kofta, grilled vegetables, pita",
        ru: "Говядина, курица, кофта из ягнёнка, овощи, питта",
        hy: "Korovaget, hajk, kofta, banhak",
      },
      price: 32000,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80",
    },
    {
      id: "gr4",
      name: {
        en: "Filet Mignon 200g",
        ru: "Филе миньон 200г",
        hy: "Filet Mignon 200գ",
      },
      desc: {
        en: "Tenderloin center cut, truffle butter, potato dauphinoise",
        ru: "Вырезка, масло с трюфелем, картофель дофинуа",
        hy: "Entes kyord, trufel karag",
      },
      price: 46500,
      tag: "new",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    },
    {
      id: "gr5",
      name: {
        en: "BBQ Chicken Half",
        ru: "Курица BBQ половина",
        hy: "BBQ հavk kesa",
      },
      desc: {
        en: "Free-range chicken, house BBQ glaze, coleslaw, cornbread",
        ru: "Курица свободного выгула, соус BBQ, коул-слоу, кукурузный хлеб",
        hy: "Amon hajk, BBQ glaze, coleslaw",
      },
      price: 19800,
      tag: "",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    },
    {
      id: "gr6",
      name: {
        en: "Beef Shashlik",
        ru: "Шашлык из говядины",
        hy: "Korovagti խоrovac",
      },
      desc: {
        en: "Marinated overnight, grilled over charcoal, onion & herbs",
        ru: "Маринован ночь, жарен на углях, лук и зелень",
        hy: "Gisher marinacvats, koxi vra, bolor ev kachach",
      },
      price: 22500,
      tag: "spicy",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
    },
    {
      id: "gr7",
      name: {
        en: "Smoked Salmon Steak",
        ru: "Стейк из копчёного лосося",
        hy: "Salmons steyk",
      },
      desc: {
        en: "Cedar plank smoked, dill butter, capers, lemon zest",
        ru: "Лосось на кедровой доске, укропное масло, каперсы",
        hy: "Kedreni tagman vra khkhtats, samoyin karag",
      },
      price: 28900,
      tag: "new",
      img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80",
    },
    {
      id: "gr8",
      name: {
        en: "Veggie Skewers",
        ru: "Овощные шашлычки",
        hy: "Բантakhosner",
      },
      desc: {
        en: "Halloumi, zucchini, peppers, red onion, za'atar",
        ru: "Халлуми, кабачки, перец, красный лук, заатар",
        hy: "Halloumi, kkiapot, pilpil, karmir bolor",
      },
      price: 13500,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=80",
    },
    {
      id: "gr9",
      name: {
        en: "Pork Ribs Rack",
        ru: "Стойка рёбер свиных",
        hy: "Кoчкari vegeri kam",
      },
      desc: {
        en: "Slow-smoked 6h, bourbon glaze, pickle, brioche bun",
        ru: "Медленное копчение 6 часов, бурбон-глазурь, соленья",
        hy: "6 zham dimahal khkhtats, bourbon glaze",
      },
      price: 34000,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    },
  ],
  salads: [
    {
      id: "sa1",
      name: {
        en: "Caesar Royale",
        ru: "Цезарь Рояль",
        hy: "Сезar Royal",
      },
      desc: {
        en: "Cos lettuce, anchovies, croutons, 63° egg, house dressing",
        ru: "Салат косс, анчоусы, крутоны, яйцо 63°, соус",
        hy: "Сalat, anchous, krouton, dzel",
      },
      price: 9800,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&q=80",
    },
    {
      id: "sa2",
      name: {
        en: "Greek Village",
        ru: "Греческий деревенский",
        hy: "Հунanian khndakegheni",
      },
      desc: {
        en: "Tomato, cucumber, olives, feta, red onion, oregano",
        ru: "Помидоры, огурцы, оливки, фета, лук, орегано",
        hy: "Lolig, varchik, dzit, feta, oregano",
      },
      price: 8500,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
    },
    {
      id: "sa3",
      name: { en: "Nicoise", ru: "Нисуаз", hy: "Нisуаz" },
      desc: {
        en: "Seared tuna, green beans, potato, olive, soft-boiled egg",
        ru: "Тунец, стручковая фасоль, картофель, оливки, яйцо",
        hy: "Tuna, lobi, karafogl, dzit, dzel",
      },
      price: 11200,
      tag: "",
      img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
    },
    {
      id: "sa4",
      name: {
        en: "Watermelon & Feta",
        ru: "Арбуз и фета",
        hy: "Ձмехri и feta",
      },
      desc: {
        en: "Seedless watermelon, barrel-aged feta, mint, balsamic",
        ru: "Арбуз, выдержанная фета, мята, бальзамик",
        hy: "Дzmekh, feta, anank, balzamik",
      },
      price: 9200,
      tag: "new",
      img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=80",
    },
    {
      id: "sa5",
      name: {
        en: "Quinoa Power Bowl",
        ru: "Боул с киноа",
        hy: "Qinoa pauerbowl",
      },
      desc: {
        en: "Tri-colour quinoa, roasted beets, chickpeas, tahini",
        ru: "Трёхцветная киноа, жареная свёкла, нут, тхина",
        hy: "Ernguni quinoa, khorated avag, nxut, tahini",
      },
      price: 10500,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
    },
    {
      id: "sa6",
      name: {
        en: "Burrata & Heirloom",
        ru: "Буррата и томаты",
        hy: "Burrata loligov",
      },
      desc: {
        en: "Creamy burrata, heirloom tomatoes, basil oil, sea salt",
        ru: "Буррата, помидоры, масло базилика, морская соль",
        hy: "Burrata, lolig, rehan dzet, tzovaaлat",
      },
      price: 13800,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&q=80",
    },
  ],
  burgers: [
    {
      id: "bu1",
      name: {
        en: "Classic Smash",
        ru: "Классический смэш",
        hy: "Դасакан smash",
      },
      desc: {
        en: "Double smash patty, American cheese, pickles, smash sauce",
        ru: "Двойная котлета, американский сыр, соленья, соус",
        hy: "Crdapataspar kotlet, amerik. paner, marinadzvatsnev",
      },
      price: 11900,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    },
    {
      id: "bu2",
      name: {
        en: "Truffle Black",
        ru: "Чёрный трюфельный",
        hy: "Taratayi sev",
      },
      desc: {
        en: "Charcoal bun, wagyu patty, truffle aioli, crispy onions",
        ru: "Угольная булка, патти из вагю, трюфельный айоли",
        hy: "Sev hac, wagyu kotlet, trufel aioli",
      },
      price: 18500,
      tag: "new",
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80",
    },
    {
      id: "bu3",
      name: {
        en: "BBQ Bacon Tower",
        ru: "Бекон-башня BBQ",
        hy: "BBQ bekon ashтarак",
      },
      desc: {
        en: "Double beef, crispy bacon, BBQ sauce, onion rings",
        ru: "Двойная говядина, хрустящий бекон, соус BBQ, луковые кольца",
        hy: "Кrdapataspar gov. mis, khordz bekon, BBQ sous",
      },
      price: 14900,
      tag: "",
      img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&q=80",
    },
    {
      id: "bu4",
      name: {
        en: "Spicy Jalapeño",
        ru: "Острый с халапеньо",
        hy: "Kicu jalapeño",
      },
      desc: {
        en: "Beef patty, fresh jalapeños, pepper jack, sriracha mayo",
        ru: "Котлета, халапеньо, перечный джек, майонез шрирача",
        hy: "Mis, jalapeño, sriracha майонéz",
      },
      price: 13200,
      tag: "spicy",
      img: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=400&q=80",
    },
    {
      id: "bu5",
      name: {
        en: "Veggie Portobello",
        ru: "Вегетарианский Портобелло",
        hy: "Veggie portobello",
      },
      desc: {
        en: "Portobello mushroom, goat cheese, roasted peppers, arugula",
        ru: "Гриб портобелло, козий сыр, запечённый перец, руккола",
        hy: "Portobello sunk, aytsyan paner, arugula",
      },
      price: 10900,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80",
    },
    {
      id: "bu6",
      name: {
        en: "Fish & Chips Burger",
        ru: "Бургер с рыбой и чипсами",
        hy: "Jukе ev chips burgер",
      },
      desc: {
        en: "Crispy cod fillet, tartar sauce, lettuce, malt vinegar slaw",
        ru: "Хрустящее филе трески, соус тартар, салат, слоу с солодом",
        hy: "Хordz juk, tartar sous, salat",
      },
      price: 12500,
      tag: "",
      img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
    },
    {
      id: "bu7",
      name: {
        en: "Mushroom Swiss",
        ru: "Грибной с швейцарским",
        hy: "Snkov shuitsarakan",
      },
      desc: {
        en: "Sautéed mushrooms, Swiss cheese, Dijon mustard, brioche",
        ru: "Обжаренные грибы, швейцарский сыр, дижонская горчица",
        hy: "Khored snkер, shveytsarakan paner, dijon mardаkan",
      },
      price: 12100,
      tag: "",
      img: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&q=80",
    },
  ],
  desserts: [
    {
      id: "de1",
      name: {
        en: "Crème Brûlée",
        ru: "Крем-брюле",
        hy: "Կrем Брюлé",
      },
      desc: {
        en: "Classic vanilla custard, caramelised sugar crust, fresh berries",
        ru: "Классический ванильный крем, карамелизированная корочка",
        hy: "Vanili krem, karamelizatsvats shakar, anush mrgher",
      },
      price: 7800,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    },
    {
      id: "de2",
      name: {
        en: "Lava Cake",
        ru: "Шоколадный лава-кейк",
        hy: "Шоколадний lava tort",
      },
      desc: {
        en: "Warm dark chocolate fondant, vanilla gelato, raspberry coulis",
        ru: "Тёплый тёмный шоколадный фондан, ванильное мороженое",
        hy: "Taq shok. fondan, vanili gelato",
      },
      price: 8900,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
    },
    {
      id: "de3",
      name: { en: "Baklava Platter", ru: "Пахлава", hy: "Պaхlava" },
      desc: {
        en: "Layered filo, pistachios, walnuts, honey & rose water syrup",
        ru: "Слоёное тесто, фисташки, грецкие орехи, мёд и сироп",
        hy: "Filo khmoreghen, karmir yndzdeni, akhtseni",
      },
      price: 9500,
      tag: "new",
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=80",
    },
    {
      id: "de4",
      name: {
        en: "Panna Cotta",
        ru: "Панна-котта",
        hy: "Panna cotta",
      },
      desc: {
        en: "Vanilla bean cream, mango coulis, edible flowers",
        ru: "Сливочный крем с ванилью, манговый кулис, съедобные цветы",
        hy: "Vanili krем, mango coulis, txragorcakan tsagikner",
      },
      price: 7200,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
    },
    {
      id: "de5",
      name: {
        en: "Cheesecake NY",
        ru: "Чизкейк Нью-Йорк",
        hy: "Нью-Йоркի cheesecake",
      },
      desc: {
        en: "Classic baked cheesecake, graham cracker crust, mixed berry",
        ru: "Классический запечённый чизкейк, крекерная основа, ягоды",
        hy: "Xoratsvats cheesecake, mrger",
      },
      price: 8500,
      tag: "",
      img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
    },
    {
      id: "de6",
      name: {
        en: "Profiteroles",
        ru: "Профитроли",
        hy: "Profiterolner",
      },
      desc: {
        en: "Choux pastry, whipped cream, warm chocolate ganache",
        ru: "Заварное тесто, взбитые сливки, горячий ганаш",
        hy: "Khmoreghen, xachaxratsatsnatsampatgh, shok. ganash",
      },
      price: 9100,
      tag: "",
      img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    },
    {
      id: "de7",
      name: {
        en: "Fruit Sorbet Trio",
        ru: "Трио сорбета",
        hy: "Mrgheyin sorbe trio",
      },
      desc: {
        en: "Mango, passion fruit, raspberry — rotating seasonal sorbets",
        ru: "Манго, маракуйя, малина — сезонные сорбеты",
        hy: "Mango, marakuya, malina — epokhayin sorbetner",
      },
      price: 6800,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
    },
    {
      id: "de8",
      name: {
        en: "Waffles & Nutella",
        ru: "Вафли с Нутеллой",
        hy: "Вафлیner Nutellaov",
      },
      desc: {
        en: "Belgian waffles, Nutella, banana, whipped cream, strawberry",
        ru: "Бельгийские вафли, Нутелла, банан, взбитые сливки",
        hy: "Belgiayi vafli, Nutella, banan, xachakhratsvats serjk",
      },
      price: 7500,
      tag: "new",
      img: "https://images.unsplash.com/photo-1568051243858-533a607809a5?w=400&q=80",
    },
  ],
  drinks: [
    {
      id: "dr1",
      name: {
        en: "Fresh Orange Juice",
        ru: "Свежевыжатый апельсиновый сок",
        hy: "Թarм narinchjayin hut",
      },
      desc: {
        en: "Cold-pressed from 6 Valencia oranges, served over ice",
        ru: "Холодный отжим из 6 апельсинов Валенсия",
        hy: "Sarsum sarnvats 6 narinchi hut, siakarem sexi vra",
      },
      price: 4500,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&q=80",
    },
    {
      id: "dr2",
      name: {
        en: "Mojito Classic",
        ru: "Мохито Классик",
        hy: "Кlasik mojito",
      },
      desc: {
        en: "White rum, fresh lime, mint, soda, cane sugar",
        ru: "Белый ром, лайм, мята, содовая, тростниковый сахар",
        hy: "Spitakrum, lime, anank, sodavayin, ganzaxayin shakar",
      },
      price: 7200,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&q=80",
    },
    {
      id: "dr3",
      name: {
        en: "Cold Brew Coffee",
        ru: "Холодный кофе",
        hy: "Sarr сuрji",
      },
      desc: {
        en: "12-hour steeping, served over crystal ice, oat milk optional",
        ru: "Настаивается 12 часов, подаётся на кристальном льду",
        hy: "12 zham thrmvats, blluryan sexi vra matyutsats",
      },
      price: 4800,
      tag: "",
      img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    },
    {
      id: "dr4",
      name: {
        en: "Mango Lassi",
        ru: "Манговый ласси",
        hy: "Mango lassi",
      },
      desc: {
        en: "Alphonso mango, chilled yogurt, cardamom, rose water",
        ru: "Манго Альфонсо, охлаждённый йогурт, кардамон, розовая вода",
        hy: "Alphonso mango, sarak matsun, kardamon, vardarjur",
      },
      price: 5500,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&q=80",
    },
    {
      id: "dr5",
      name: {
        en: "Aperol Spritz",
        ru: "Апероль Шприц",
        hy: "Aperol spritz",
      },
      desc: {
        en: "Aperol, Prosecco, sparkling water, orange slice",
        ru: "Апероль, Просекко, газированная вода, апельсин",
        hy: "Aperol, Prosecco, gazavortsvats jur, narinch",
      },
      price: 8500,
      tag: "new",
      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    },
    {
      id: "dr6",
      name: {
        en: "Berry Smoothie",
        ru: "Ягодный смузи",
        hy: "Mrgeyin smusi",
      },
      desc: {
        en: "Blueberry, strawberry, raspberry, banana, oat milk",
        ru: "Черника, клубника, малина, банан, овсяное молоко",
        hy: "Brikneni, bolori, malini, banan, verakani kath",
      },
      price: 5900,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80",
    },
    {
      id: "dr7",
      name: {
        en: "Sparkling Water",
        ru: "Газированная вода",
        hy: "Gazavortsvats jur",
      },
      desc: {
        en: "San Pellegrino or Perrier, glass bottle, 500ml",
        ru: "Сан Пеллегрино или Перье, стеклянная бутылка 500мл",
        hy: "San Pellegrino kam Perrier, apaki shisha, 500ml",
      },
      price: 2200,
      tag: "",
      img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&q=80",
    },
    {
      id: "dr8",
      name: {
        en: "Espresso Martini",
        ru: "Эспрессо Мартини",
        hy: "Espresso martini",
      },
      desc: {
        en: "Double espresso, vodka, coffee liqueur, vanilla sugar foam",
        ru: "Двойной эспрессо, водка, кофейный ликёр, ванильная пена",
        hy: "Krdapataspar espresso, vodka, kafein likyorl, vanili afren",
      },
      price: 9800,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&q=80",
    },
    {
      id: "dr9",
      name: {
        en: "Hot Chocolate",
        ru: "Горячий шоколад",
        hy: "Taq shokolad",
      },
      desc: {
        en: "70% Valrhona chocolate, steamed milk, whipped cream, sea salt",
        ru: "Шоколад Вальрона 70%, молоко, взбитые сливки, морская соль",
        hy: "Valrhona 70% shok., eghatsats kath, tzovaлat",
      },
      price: 5200,
      tag: "",
      img: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&q=80",
    },
    {
      id: "dr10",
      name: {
        en: "Iced Matcha Latte",
        ru: "Матча-латте со льдом",
        hy: "Serov matcha latte",
      },
      desc: {
        en: "Ceremonial grade matcha, oat milk, vanilla, cane sugar syrup",
        ru: "Церемониальная матча, овсяное молоко, ваниль",
        hy: "Ararekayin matcha, verakani kath, vanilin, ganzaxayin shrop",
      },
      price: 5800,
      tag: "new",
      img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    },
  ],
  soups: [
    {
      id: "sp1",
      name: {
        en: "French Onion",
        ru: "Французский луковый",
        hy: "Fransiakan bolori apur",
      },
      desc: {
        en: "Caramelised onion, beef broth, gruyère crouton, thyme",
        ru: "Карамелизированный лук, говяжий бульон, грюйер, тимьян",
        hy: "Karamelizatsvats bolor, korovagti arganak, gruyere",
      },
      price: 8500,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80",
    },
    {
      id: "sp2",
      name: {
        en: "Lobster Bisque",
        ru: "Биск из лобстера",
        hy: "Omarer bisque",
      },
      desc: {
        en: "Cream of Atlantic lobster, cognac, tarragon, crème fraîche",
        ru: "Крем из атлантического лобстера, коньяк, эстрагон",
        hy: "Atlantyan omarer, konyak, tarkhun, creme fraiche",
      },
      price: 16500,
      tag: "new",
      img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=80",
    },
    {
      id: "sp3",
      name: { en: "Borsch", ru: "Борщ", hy: "Borshch" },
      desc: {
        en: "Slow-cooked beef, beets, cabbage, sour cream, rye bread",
        ru: "Говядина медленного приготовления, свёкла, капуста, сметана",
        hy: "Dimahali mis, կоcнемdug, bаghamba, madzun, kntorer",
      },
      price: 7800,
      tag: "pop",
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
    },
    {
      id: "sp4",
      name: { en: "Tom Yum", ru: "Том Ям", hy: "Tom yum" },
      desc: {
        en: "Lemongrass, kaffir lime, galangal, prawns, mushrooms",
        ru: "Лемонграсс, каффирский лайм, галангал, креветки, грибы",
        hy: "Limonakhot, galangal, krevetk, snker, kafirsky lime",
      },
      price: 10200,
      tag: "spicy",
      img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&q=80",
    },
    {
      id: "sp5",
      name: {
        en: "Pumpkin Velouté",
        ru: "Велюте из тыквы",
        hy: "Jampkini veloute",
      },
      desc: {
        en: "Roasted butternut, coconut cream, toasted pepitas, chilli oil",
        ru: "Запечённая тыква, кокосовые сливки, тыквенные семечки",
        hy: "Xoratsvats jampik, kокосaghi kath, jampkinin sermer",
      },
      price: 7200,
      tag: "veg",
      img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=400&q=80",
    },
  ],
};

export const CURRENCY = { en: "AMD", ru: "AMD", hy: "դր." };

export const TRANSLATIONS = {
  seeAll: {
    en: "See All →",
    ru: "Смотреть всё →",
    hy: "Տեսնել բոլորը →",
  },
  search: {
    en: "Search dishes, categories…",
    ru: "Поиск блюд, категорий…",
    hy: "Որոնել ուտեստներ, կատեգորիաներ…",
  },
  categories: {
    en: "Categories",
    ru: "Категории",
    hy: "Կատեգորիաներ",
  },
  items: { en: "items", ru: "блюд", hy: "ուտեստ" },
  heroSub: {
    en: "Fine Dining Experience",
    ru: "Изысканный ресторан",
    hy: "Բարձրակարգ ճաշարան",
  },
  heroTitle1: {
    en: "Discover our",
    ru: "Откройте для себя",
    hy: "Բացայտեք մեր",
  },
  heroTitle2: {
    en: "Culinary World",
    ru: "кулинарный мир",
    hy: "Խոհանոցային աշխարհը",
  },
  heroDesc: {
    en: "Fresh ingredients · Crafted with love",
    ru: "Свежие продукты · С любовью",
    hy: "Թարմ բաղադրիչներ · Սիրով պատրաստված",
  },
  searchResults: {
    en: "Search Results",
    ru: "Результаты поиска",
    hy: "Որոնման արդյունքներ",
  },
  found: { en: "found", ru: "найдено", hy: "գտնվեց" },
  noResults: {
    en: "No results found",
    ru: "Ничего не найдено",
    hy: "Ոչինչ չի գտնվել",
  },
  noResultsDesc: {
    en: "Try another search term",
    ru: "Попробуйте другой запрос",
    hy: "Փորձեք այլ հարցում",
  },
  dishes: { en: "dishes", ru: "блюд", hy: "ուտեստ" },
};

export function t(key, lang) {
  return TRANSLATIONS[key]?.[lang] || TRANSLATIONS[key]?.en || key;
}
