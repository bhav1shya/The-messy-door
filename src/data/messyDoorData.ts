import {
  MenuCategoryDisplay,
  MenuBookPage,
  MocktailItem,
  DessertItem,
  CoffeeItem,
  GalleryPhoto,
  ReviewTheme,
} from '../types';

import heroImg from '../assets/images/messy_door_hero_1790182927749.jpg';
import mocktailsImg from '../assets/images/messy_mocktails_1790182943935.jpg';
import dessertsImg from '../assets/images/messy_desserts_1790182955570.jpg';
import seatingImg from '../assets/images/messy_seating_1790182966632.jpg';
import pastaPizzaImg from '../assets/images/messy_pasta_pizza_1790183009026.jpg';

import hotCoffeeImg from '../assets/images/menu_hot_coffee_art_1790143556963.jpg';
import coldCoffeeImg from '../assets/images/menu_cold_coffee_brew_1790143568468.jpg';
import shakesImg from '../assets/images/menu_shakeys_frappe_1790143598014.jpg';
import wafflesImg from '../assets/images/menu_waffles_pancakes_1790143582286.jpg';
import chemexImg from '../assets/images/gallery_chemex_brew_1790143613701.jpg';
import eveningVibeImg from '../assets/images/gallery_cafe_evening_vibe_1790143624373.jpg';
import burgerImg from '../assets/images/bulb_burgers_sandwich_1790168279785.jpg';
import momosImg from '../assets/images/bulb_chinese_momos_1790168294656.jpg';
import brownieImg from '../assets/images/bulb_dessert_brownie_1790168351490.jpg';
import aboutInteriorImg from '../assets/images/about_cafe_interior_1790143536043.jpg';
import tandooriImg from '../assets/images/bulb_tandoori_tikka_1790168325406.jpg';
import streetStyleImg from '../assets/images/bulb_street_style_1790168338555.jpg';

export const MESSY_IMAGES = {
  hero: heroImg,
  mocktails: mocktailsImg,
  desserts: dessertsImg,
  seating: seatingImg,
  pastaPizza: pastaPizzaImg,
  hotCoffee: hotCoffeeImg,
  coldCoffee: coldCoffeeImg,
  shakes: shakesImg,
  waffles: wafflesImg,
  chemex: chemexImg,
  eveningVibe: eveningVibeImg,
  burger: burgerImg,
  momos: momosImg,
  brownie: brownieImg,
  aboutInterior: aboutInteriorImg,
  tandoori: tandooriImg,
  streetStyle: streetStyleImg,
};

export const BUSINESS_INFO = {
  name: 'The Messy Door Cafe',
  brandShort: 'The Messy Door',
  tagline: 'GOOD FOOD • PRETTY SPACES • BETTER COMPANY',
  headline: 'The Messy Door\nCafé',
  supportingText:
    'A cozy café in Mansarovar, Jaipur serving delicious food, refreshing beverages and memorable moments.',
  address: {
    building: 'Namokar Building, M-1-A',
    street: 'Raghu Vihar, Main 30, Shipra Path',
    area: 'Mansarovar',
    city: 'Jaipur, Rajasthan',
    pincode: '302020',
    full: 'Namokar Building, M-1-A, Raghu Vihar, Main 30, Shipra Path, Mansarovar, Jaipur, Rajasthan 302020',
  },
  phone: '093510 57718',
  phoneRaw: '+919351057718',
  priceRange: '₹200–₹1,200',
  hours: 'Open until 11 PM',
  timingsDetail: '11:00 AM – 11:00 PM (All 7 Days)',
  rating: {
    score: 4.5,
    count: '1,997+',
    label: '4.5 ★ (1,997+ Reviews)',
  },
  badges: [
    'Aesthetic Ambience',
    'LGBTQ+ Friendly',
    'Perfect for Groups',
    'Prime Location',
  ],
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=The+Messy+Door+Cafe+Namokar+Building+Shipra+Path+Mansarovar+Jaipur',
};

export const MENU_CATEGORIES_PREVIEW: MenuCategoryDisplay[] = [
  {
    id: 'starters',
    name: 'Starters',
    tagline: 'Crispy & Savory Bites',
    description: 'Artisanal nachos, garlic parmesan fingers & cheesy poppers.',
    image: tandooriImg,
    itemCount: 14,
  },
  {
    id: 'munchies',
    name: 'Munchies',
    tagline: 'Comfort Crunch',
    description: 'Truffle fries, seasoned wedges & loaded party platters.',
    image: streetStyleImg,
    itemCount: 12,
  },
  {
    id: 'pasta',
    name: 'Pasta',
    tagline: 'Handcrafted Sauces',
    description: 'Silky Alfredo, spicy Pink Pomodoro & Basil Pesto penne.',
    image: pastaPizzaImg,
    itemCount: 9,
  },
  {
    id: 'pizzas',
    name: 'Pizzas',
    tagline: 'Woodfire & Thin Crust',
    description: 'Burrata Margherita, Smoky Paneer Tikka & 4-Cheese gourmet.',
    image: pastaPizzaImg,
    itemCount: 11,
  },
  {
    id: 'burgers-sandwiches',
    name: 'Burgers & Sandwiches',
    tagline: 'Stacked & Grilled',
    description: 'Brioche toasties, sourdough melt & crispy cottage burgers.',
    image: burgerImg,
    itemCount: 15,
  },
  {
    id: 'chinese',
    name: 'Chinese',
    tagline: 'Wok-Tossed & Steamed',
    description: 'Darjeeling momos, chilli garlic noodles & Manchurian bowls.',
    image: momosImg,
    itemCount: 16,
  },
  {
    id: 'beverages',
    name: 'Beverages',
    tagline: 'Cold Brews & Shakes',
    description: 'Signature mocktails, refreshing mojitos & thick boba shakes.',
    image: mocktailsImg,
    itemCount: 22,
  },
  {
    id: 'desserts',
    name: 'Desserts',
    tagline: 'Sweet Indulgence',
    description: 'Basque cheesecake, hot churros, sizzling brownies & tiramisu.',
    image: dessertsImg,
    itemCount: 18,
  },
];

export const MENU_BOOK_PAGES: MenuBookPage[] = [
  {
    pageNumber: 1,
    title: 'Munchies & Starters',
    subtitle: 'Crispy finger foods, artisan sliders & handcrafted momos',
    image: burgerImg,
    imageCaption: 'Gourmet Loaded Sourdough & Crispy Baskets',
    sections: [
      {
        heading: 'Munchies & Bites',
        subheading: 'Perfect for sharing around the table',
        items: [
          { name: 'Peri-Peri Crinkle Fries', price: '₹180', description: 'Crisp hand-cut potatoes tossed in house piri seasoning with garlic mayo dip' },
          { name: 'Truffle Parmesan Fries', price: '₹240', description: 'Infused with white truffle oil, shaved aged parmesan & fresh rosemary', isMustTry: true, tag: 'Bestseller' },
          { name: 'Cheesy Jalapeño Poppers', price: '₹230', description: 'Crisp golden crust filled with gooey melted cheddar and spiced peppers' },
          { name: 'Loaded Mexican Nachos Grande', price: '₹290', description: 'Fresh corn chips, warm cheese fondue, salsa fresca, sour cream & jalapeños' },
        ],
      },
      {
        heading: 'Sandwiches & Toasties',
        subheading: 'Served with house crisps & dip',
        items: [
          { name: 'Bombay Street Club Sandwich', price: '₹220', description: 'Triple-decker layered with mint chutney, spiced potatoes, beets & melted cheese' },
          { name: 'Smoked Paneer Tikka Panini', price: '₹260', description: 'Charred cottage cheese, bell peppers, chipotle aioli on toasted focaccia', isMustTry: true },
          { name: 'Mushroom & Caramelized Onion Melt', price: '₹270', description: 'Wild button mushrooms, thyme butter, molten mozzarella on country sourdough' },
        ],
      },
      {
        heading: 'Momos & Dimsums',
        subheading: 'Steamed or pan-fried with spicy fiery dip',
        items: [
          { name: 'Steamed Darjeeling Veg Momos', price: '₹190', description: 'Delicate hand-pinched dumplings with garden vegetables and ginger' },
          { name: 'Kurkure Crispy Momos', price: '₹230', description: 'Crunchy cornflake coated dumplings with spicy peri peri dusting', tag: 'Chef Choice' },
          { name: 'Chilli Garlic Pan-Fried Momos', price: '₹240', description: 'Tossed in a wok with scallions, crushed garlic and spicy schezwan sauce' },
        ],
      },
    ],
  },
  {
    pageNumber: 2,
    title: 'Chinese, Bowls & Platters',
    subtitle: 'Wok-tossed delicacies, sizzling gravies & warm breads',
    image: momosImg,
    imageCaption: 'Fiery Wok Bowls & Sizzling Platters',
    sections: [
      {
        heading: 'Wok Specialties & Chinese',
        subheading: 'Aromatic Indo-Chinese comfort bowls',
        items: [
          { name: 'Crispy Honey Chilli Lotus Stem', price: '₹290', description: 'Thinly sliced lotus root glazed with honey, sesame and dry red chilli', isMustTry: true },
          { name: 'Classic Paneer Chilli Dry', price: '₹280', description: 'Wok-fried cottage cheese cubes with bell peppers, green chillies & dark soya' },
          { name: 'Veg Hakka Noodles', price: '₹240', description: 'Spring noodles wok-tossed with shredded cabbage, carrots and spring onions' },
          { name: 'Schezwan Chilli Garlic Fried Rice', price: '₹260', description: 'Fragrant jasmine rice with burnt garlic, scallions and house chilli paste' },
          { name: 'Veg Manchurian in Hot Gravy', price: '₹270', description: 'Crispy veggie pearls simmering in rich garlic soy broth' },
        ],
      },
      {
        heading: 'Bowls & Sharing Platters',
        subheading: 'Generous servings for two to three',
        items: [
          { name: 'Messy Door Mezze Platter', price: '₹420', description: 'Creamy beet hummus, classic tahini hummus, falafel kebabs, pita bread & olives', tag: 'Signature' },
          { name: 'Asian Street Sampler Platter', price: '₹460', description: 'Spring rolls, pan-fried momos, honey chilli potatoes & dips' },
        ],
      },
      {
        heading: 'Artisan Breads & Bites',
        items: [
          { name: 'Cheesy Garlic Pull-Apart Bread', price: '₹220', description: 'Brioche loaf baked with roasted garlic herb butter and bubbling mozzarella' },
          { name: 'Toasted Garlic Herb Baguette', price: '₹170', description: 'Golden slices brushed with extra virgin olive oil and parsley' },
        ],
      },
    ],
  },
  {
    pageNumber: 3,
    title: 'Pastas, Pizzas & Sizzlers',
    subtitle: 'Hand-stretched dough, Italian herbs & bubbling cheese',
    image: pastaPizzaImg,
    imageCaption: 'Truffle Penne & Burrata Margherita',
    sections: [
      {
        heading: 'Handcrafted Pastas',
        subheading: 'Choice of Penne / Spaghetti with toasted garlic slice',
        items: [
          { name: 'Classic Pink Sauce Pasta (Rosa)', price: '₹340', description: 'Velvety blend of San Marzano tomatoes and cream, basil & broccoli florets', isMustTry: true, tag: 'House Favorite' },
          { name: 'Creamy Truffle Alfredo', price: '₹360', description: 'Rich parmesan emulsion with wild mushrooms, baby spinach and white truffle aroma' },
          { name: 'Genovese Basil Pesto', price: '₹350', description: 'Fresh pine nuts, sweet basil, cold-pressed olive oil & cherry tomatoes' },
          { name: 'Fiery Arrabbiata Piccante', price: '₹310', description: 'Slow-simmered plum tomatoes, crushed red pepper flakes, black olives & fresh oregano' },
        ],
      },
      {
        heading: 'Artisan Thin-Crust Pizzas',
        subheading: '11-inch fermented dough baked to blistered perfection',
        items: [
          { name: 'Margherita con Burrata', price: '₹420', description: 'Crushed San Marzano sauce, fresh torn burrata, basil leaves and olive oil drizzle', isMustTry: true },
          { name: 'Smoky Paneer Tikka Gourmet', price: '₹440', description: 'Clay-oven spiced paneer, roasted peppers, red onion and coriander pesto swirl' },
          { name: 'Quattro Formaggi (Four Cheese)', price: '₹470', description: 'Mozzarella, fontina, parmesan & creamy gorgonzola with honey drizzle' },
          { name: 'Wild Garden Primavera', price: '₹390', description: 'Zucchini ribbons, sun-dried tomatoes, kalamata olives, jalapeño & feta crumble' },
        ],
      },
      {
        heading: 'Sizzlers & Skillets',
        subheading: 'Served bubbling hot on cast iron',
        items: [
          { name: 'The Messy Signature Cottage Cheese Sizzler', price: '₹490', description: 'Grilled paneer steaks with pepper sauce, buttered herb rice, grilled veggies and french fries', tag: 'Grand Sizzler' },
          { name: 'Chilli Szechuan Sizzler Bowl', price: '₹460', description: 'Hakka noodles, paneer chilli, crispy spring rolls with sizzling schezwan glaze' },
        ],
      },
    ],
  },
  {
    pageNumber: 4,
    title: 'Artisanal Coffee & Matcha',
    subtitle: 'Single origin arabica beans, velvety microfoam & ceremonial matcha',
    image: hotCoffeeImg,
    imageCaption: 'Specialty Espresso & Velvet Latte Art',
    sections: [
      {
        heading: 'Hot Coffees & Lattes',
        subheading: 'Brewed with 100% shade-grown Arabica estate beans',
        items: [
          { name: 'Signature Rose Cardamom Cappuccino', price: '₹220', description: 'Double espresso with delicate organic Damask rose syrup and cardamom dusting', isMustTry: true, tag: 'Signature' },
          { name: 'Spanish Sweet Cream Latte', price: '₹230', description: 'Rich espresso folded with condensed milk and silky steamed whole milk' },
          { name: 'Velvet Flat White', price: '₹210', description: 'Restretto double shot with velvety micro-foam, velvety smooth' },
          { name: 'Caffè Mocha Fondue', price: '₹240', description: 'Belgian dark chocolate melted into double espresso with whipped foam' },
          { name: 'Classic Americano / Cortado', price: '₹180', description: 'Bold espresso shot lengthened with mineral hot water' },
        ],
      },
      {
        heading: 'Cold Coffees & Cold Brews',
        subheading: 'Slow-dripped for 18 hours for minimal acidity',
        items: [
          { name: 'Salted Caramel Cold Brew', price: '₹260', description: 'Steeped cold brew topped with house caramel sauce and sea salt cold foam', isMustTry: true },
          { name: 'The Messy Door Iced Frappe', price: '₹250', description: 'Rich blended coffee, vanilla gelato, chocolate lace and cocoa dusting' },
          { name: 'Citrus Tonic Cold Brew', price: '₹240', description: 'Sparkling tonic water, dehydrated orange wheel and concentrated cold brew' },
        ],
      },
      {
        heading: 'Matcha & Crème-Crafted',
        subheading: 'Japanese ceremonial grade Uji matcha',
        items: [
          { name: 'Ceremonial Matcha Latte', price: '₹280', description: 'Whisked green tea elixir with oat milk and honey nectar', tag: 'Healthy Luxury' },
          { name: 'Iced Strawberry Matcha Cloud', price: '₹310', description: 'Pure strawberry compote base, almond milk and rich matcha cream' },
          { name: 'Lotus Biscoff Crème', price: '₹270', description: 'Whipped cookie butter cold foam over iced espresso and cinnamon' },
        ],
      },
    ],
  },
  {
    pageNumber: 5,
    title: 'Beverages, Mocktails & Shakes',
    subtitle: 'Crafted botanicals, refreshing fizz, boba & decadent shakes',
    image: mocktailsImg,
    imageCaption: 'Handcrafted Mocktails & Fruit Infusions',
    sections: [
      {
        heading: 'Signature Mocktails',
        subheading: 'Shaken with fresh herbs and botanical extracts',
        items: [
          { name: 'Classic Fresh Mint Mojito', price: '₹210', description: 'Crushed garden mint, freshly squeezed lime, cane syrup and crushed ice fizz' },
          { name: 'Berry Blast Fizz', price: '₹240', description: 'Muddled blueberries, strawberries, cranberry juice and sparkling soda', isMustTry: true, tag: 'Bestseller' },
          { name: 'Chilli Guava Rock Salt', price: '₹230', description: 'Ripe pink guava nectar with rim of crushed rock salt and Kashmiri red chilli', isMustTry: true },
          { name: 'Watermelon Basil Cooler', price: '₹220', description: 'Pressed summer watermelon, holy basil, lemon spritz & black salt' },
          { name: 'Old School Kala Khatta Sparkler', price: '₹210', description: 'Tangy jamun essence, cumin spice, lime and bubbling soda' },
        ],
      },
      {
        heading: 'Artisan Iced Teas & Bubble Teas',
        subheading: 'Freshly steeped tea leaves with chewy tapioca pearls',
        items: [
          { name: 'Peach Jasmine Blossom Iced Tea', price: '₹210', description: 'Delicate floral tea infused with white peach purée and mint' },
          { name: 'Passionfruit Hibiscus Cooler', price: '₹220', description: 'Ruby hibiscus cold brew shaken with tangy passionfruit' },
          { name: 'Brown Sugar Boba Milk Tea', price: '₹270', description: 'Caramelized brown sugar stripes, fresh milk & warm boba pearls', tag: 'Popular' },
          { name: 'Taro Coconut Bubble Tea', price: '₹280', description: 'Creamy purple taro milk with coconut milk and chewy pearls' },
        ],
      },
      {
        heading: 'Gourmet Thick Shakes',
        items: [
          { name: 'Nutella Ferrero Rocher Shake', price: '₹290', description: 'Rich Nutella swirl, whole hazelnut chocolate, malted vanilla gelato' },
          { name: 'Belgian Dark Chocolate Silk', price: '₹270', description: '70% cocoa fudge, chocolate brownie crumbs & whipped cream' },
          { name: 'KitKat Caramel Crunch Shake', price: '₹260', description: 'Crisp wafer crush, dulce de leche and chocolate syrup' },
        ],
      },
    ],
  },
  {
    pageNumber: 6,
    title: 'Luxury Desserts & Patisserie',
    subtitle: 'Golden Spanish churros, molten brownies & velvety cheesecakes',
    image: dessertsImg,
    imageCaption: 'Basque Burnt Cheesecake & Warm Nutella Churros',
    sections: [
      {
        heading: 'Spanish Churros',
        subheading: 'Piped fresh, golden fried and dusted in cinnamon sugar',
        items: [
          { name: 'Classic Cinnamon Churros', price: '₹240', description: 'Four crispy ridged sticks with warm dark chocolate dipping pot' },
          { name: 'Nutella Stuffed Churros Platter', price: '₹310', description: 'Warm churros accompanied by generous pot of imported Nutella and strawberries', isMustTry: true, tag: 'Must Try' },
          { name: 'Milk & White Chocolate Churro Bites', price: '₹280', description: 'Bite-sized crispy churros drizzled with Belgian milk and white chocolate' },
        ],
      },
      {
        heading: 'Velvety Cheesecakes',
        subheading: 'Slow baked with authentic Philadelphia cream cheese',
        items: [
          { name: 'San Sebastián Basque Burnt Cheesecake', price: '₹340', description: 'Caramelized deep-brown top with luscious molten vanilla center', isMustTry: true, tag: 'Signature' },
          { name: 'New York Classic Berry Cheesecake', price: '₹320', description: 'Dense graham cracker crust with sweet blueberry-raspberry coulis' },
          { name: 'Biscoff Lotus Baked Cheesecake', price: '₹350', description: 'Layered with Lotus spread, spiced cookie base and crunchy crumble' },
        ],
      },
      {
        heading: 'Brownies & Signatures',
        subheading: 'Freshly baked every single morning',
        items: [
          { name: 'Sizzling Brownie with Vanilla Gelato', price: '₹290', description: 'Hot fudge walnut brownie on cast iron with ice cream & molten chocolate', isMustTry: true },
          { name: 'Chocolate Truffle Jar', price: '₹260', description: 'Layers of chocolate ganache, moist sponge and crispy pearls in a glass jar' },
          { name: 'Artisan Espresso Tiramisu', price: '₹340', description: 'Savoiardi ladyfingers soaked in estate espresso and mascarpone cream', tag: 'Classic' },
        ],
      },
    ],
  },
];

export const SIGNATURE_MOCKTAILS: MocktailItem[] = [
  {
    id: 'mint-mojito',
    name: 'Mint Mojito',
    flavorProfile: 'Refreshing • Crisp • Citrusy',
    price: '₹210',
    description:
      'Muddled garden mint, zesty lime wedges, organic sugar cane nectar, topped with effervescent sparkling soda over hand-crushed ice.',
    notes: ['Fresh Garden Mint', 'Key Lime', 'Sparkling Soda'],
  },
  {
    id: 'watermelon',
    name: 'Watermelon Cooler',
    flavorProfile: 'Hydrating • Sweet • Botanical',
    price: '₹220',
    description:
      'Cold-pressed pink watermelon juice with sweet basil leaves, pink Himalayan salt, and a splash of cold tonic.',
    notes: ['Cold-Pressed Melon', 'Sweet Basil', 'Pink Salt'],
  },
  {
    id: 'berry-blast',
    name: 'Berry Blast',
    flavorProfile: 'Vibrant • Fruity • Tangy',
    price: '₹240',
    description:
      'A dramatic ruby-red infusion of crushed blueberries, raspberries and ripe strawberries crowned with sparkling water and fresh rosemary sprig.',
    notes: ['Wild Blueberries', 'Strawberry Puree', 'Sparkling Fizz'],
  },
  {
    id: 'kala-khatta',
    name: 'Kala Khatta Sparkler',
    flavorProfile: 'Nostalgic • Tangy • Spiced',
    price: '₹210',
    description:
      'A sophisticated twist on an Indian street favorite — tart jamun extract, roasted cumin, black rock salt and bubbling lemon soda.',
    notes: ['Jamun Extract', 'Roasted Cumin', 'Tangy Lemon'],
  },
  {
    id: 'chilli-guava',
    name: 'Chilli Guava',
    flavorProfile: 'Exotic • Sweet-Spicy • Salty',
    price: '₹230',
    description:
      'Velvety pink guava puree shaken with crushed ice, poured into a glass with a fiery Kashmiri chilli and smoked salt rim.',
    notes: ['Blush Pink Guava', 'Chilli Salt Rim', 'Citrus Spritz'],
  },
];

export const COFFEE_SPECIALTIES: CoffeeItem[] = [
  {
    id: 'hot-rose-latte',
    name: 'Rose & Cardamom Cappuccino',
    type: 'Hot',
    price: '₹220',
    notes: 'Damask rose syrup, fragrant green cardamom, velvety microfoam art',
    accent: 'Floral & Comforting',
  },
  {
    id: 'hot-spanish-latte',
    name: 'Spanish Sweet Cream Latte',
    type: 'Hot',
    price: '₹230',
    notes: 'Sweetened milk emulsion, double origin espresso, silky texture',
    accent: 'Rich & Sweet',
  },
  {
    id: 'cold-salted-caramel',
    name: 'Salted Caramel Cold Brew',
    type: 'Cold Brew',
    price: '₹260',
    notes: '18-hour cold brew, artisanal caramel ribbon, sea salt cold foam',
    accent: 'Smooth & Bold',
  },
  {
    id: 'matcha-ceremonial',
    name: 'Uji Ceremonial Matcha',
    type: 'Matcha',
    price: '₹280',
    notes: 'First-harvest shade grown green tea from Kyoto, oat milk foam',
    accent: 'Earthy & Serene',
  },
  {
    id: 'creme-lotus-biscoff',
    name: 'Lotus Biscoff Crème',
    type: 'Crème',
    price: '₹270',
    notes: 'Spiced speculoos cookie cream, iced espresso, crumbled biscoff',
    accent: 'Decadent Indulgence',
  },
];

export const LUXURY_DESSERTS: DessertItem[] = [
  {
    id: 'basque-cheesecake',
    name: 'Basque Burnt Cheesecake',
    category: 'Cheesecake',
    price: '₹340',
    description: 'Caramelized crust with a molten, creamy custard center, served with fresh berry coulis.',
    isChefSpecial: true,
    tag: 'Signature',
  },
  {
    id: 'nutella-churros',
    name: 'Nutella Churros',
    category: 'Churros',
    price: '₹310',
    description: 'Crispy golden ridged dough dusted with fragrant cinnamon sugar, served with a warm bowl of pure Nutella.',
    isChefSpecial: true,
    tag: 'Crowd Favorite',
  },
  {
    id: 'chocolate-brownie',
    name: 'Chocolate Brownie',
    category: 'Brownie',
    price: '₹220',
    description: 'Fudgy Belgian dark chocolate brownie baked with roasted walnut chunks.',
  },
  {
    id: 'sizzling-brownie',
    name: 'Sizzling Brownie with Ice Cream',
    category: 'Brownie',
    price: '₹290',
    description: 'Heated on cast iron with a scoop of rich vanilla bean gelato and bubbling molten chocolate sauce.',
    isChefSpecial: true,
    tag: 'Showstopper',
  },
  {
    id: 'classic-churros',
    name: 'Classic Churros',
    category: 'Churros',
    price: '₹240',
    description: 'Spanish style fried dough sticks with house dark chocolate dipping ganache.',
  },
  {
    id: 'milk-churros',
    name: 'Milk Churros',
    category: 'Churros',
    price: '₹280',
    description: 'Golden churros glazed with creamy dulce de leche and white chocolate silk.',
  },
  {
    id: 'chocolate-truffle-jar',
    name: 'Chocolate Truffle Jar',
    category: 'Signature',
    price: '₹260',
    description: 'Glass jar packed with dark truffle mousse, chocolate biscuit crumble and gold dusting.',
  },
  {
    id: 'new-york-cheesecake',
    name: 'New York Cheesecake',
    category: 'Cheesecake',
    price: '₹320',
    description: 'Classic dense and silky baked cheesecake on a golden buttery biscuit crust.',
  },
  {
    id: 'tiramisu',
    name: 'Artisan Tiramisu',
    category: 'Signature',
    price: '₹340',
    description: 'Layers of espresso-soaked ladyfingers, rich mascarpone sabayon and Dutch cocoa powder.',
    tag: 'Authentic',
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'Floral Canopy & Chandeliers',
    category: 'Floral',
    src: heroImg,
    description: 'The dreamy floral ceiling and pastel rose banquettes inside The Messy Door Cafe.',
  },
  {
    id: 'g-2',
    title: 'Artisanal Mocktail Spread',
    category: 'Drinks',
    src: mocktailsImg,
    description: 'Vibrant signature mocktails with berry infusions and fresh botanicals.',
  },
  {
    id: 'g-3',
    title: 'Warm Churros & Cheesecakes',
    category: 'Dessert',
    src: dessertsImg,
    description: 'Our showstopping Basque cheesecake and freshly fried Spanish churros.',
  },
  {
    id: 'g-4',
    title: 'Romantic Seating Nook',
    category: 'Ambience',
    src: seatingImg,
    description: 'Cozy velvet pink seating under warm amber lighting for intimate conversations.',
  },
  {
    id: 'g-5',
    title: 'Truffle Pasta & Burrata Pizza',
    category: 'Food',
    src: pastaPizzaImg,
    description: 'Freshly prepared woodfire pizza and artisanal creamy pasta dishes.',
  },
  {
    id: 'g-6',
    title: 'Latte Art & Specialty Brews',
    category: 'Drinks',
    src: hotCoffeeImg,
    description: 'Silky microfoam latte art prepared by our passionate baristas.',
  },
  {
    id: 'g-7',
    title: 'Slow Cold Drip Extraction',
    category: 'Drinks',
    src: coldCoffeeImg,
    description: '18-hour cold brew coffee steeped for balanced acidity and deep notes.',
  },
  {
    id: 'g-8',
    title: 'Jaipur Evening Atmosphere',
    category: 'Ambience',
    src: eveningVibeImg,
    description: 'Atmospheric golden hour ambience at our Shipra Path location.',
  },
];

export const WHY_VISIT_REASONS = [
  {
    id: 'aesthetic-ambience',
    title: 'Aesthetic Ambience',
    description: 'Pretty spaces designed for memorable moments.',
    detail: 'Surround yourself with soft pink floral installations, warm ivory textures, and curated romantic lighting.',
    icon: 'Sparkles',
  },
  {
    id: 'great-food',
    title: 'Great Food',
    description: 'Comfort food, indulgent desserts and refreshing drinks.',
    detail: 'From hand-stretched pizzas and pasta to sizzling brownies and Spanish churros crafted with care.',
    icon: 'Utensils',
  },
  {
    id: 'perfect-for-groups',
    title: 'Perfect For Groups',
    description: 'Ideal for friends, families and celebrations.',
    detail: 'Spacious banquettes, sharing platters and warm hospitality perfect for birthdays and reunions.',
    icon: 'Users',
  },
  {
    id: 'instagram-worthy',
    title: 'Instagram Worthy',
    description: 'Beautiful food and beautiful surroundings.',
    detail: 'Every angle, every drink garnish and every dessert plate is styled to be visually stunning.',
    icon: 'Camera',
  },
];

export const REVIEWS_THEMES: ReviewTheme[] = [
  {
    id: 'rev-1',
    theme: 'Great Ambience',
    highlight: '“The prettiest café vibe in Mansarovar!”',
    comment:
      'The pink floral ceiling and warm cozy lighting make you feel relaxed the moment you walk through the door. Definitely the most aesthetic café in Jaipur.',
    rating: 5,
    visitType: 'Friends Evening',
  },
  {
    id: 'rev-2',
    theme: 'Delicious Food',
    highlight: '“Exceptional pink sauce pasta & thin-crust pizza”',
    comment:
      'We were blown away by the food quality. The Rosa pasta was silky and flavorful, and the cheese pull on the pizza was perfection. Every bite was on point.',
    rating: 5,
    visitType: 'Dinner Date',
  },
  {
    id: 'rev-3',
    theme: 'Beautiful Interiors',
    highlight: '“Unbelievable interior design and photogenic corners”',
    comment:
      'Every single corner is Instagram worthy. The attention to detail from the velvet seating to the floral chandeliers is unmatched.',
    rating: 5,
    visitType: 'Birthday Celebration',
  },
  {
    id: 'rev-4',
    theme: 'Good Place For Groups',
    highlight: '“Plenty of space for big groups & great music”',
    comment:
      'Celebrated my sister’s birthday here with 12 friends. The staff were attentive, the sharing platters were huge, and the vibe was super welcoming.',
    rating: 4.8,
    visitType: 'Group Gathering',
  },
  {
    id: 'rev-5',
    theme: 'Lovely Desserts',
    highlight: '“You CANNOT miss the churros & sizzling brownie”',
    comment:
      'The churros with warm Nutella were crispy on the outside and soft inside. The Basque cheesecake melted in the mouth. Pure indulgence.',
    rating: 5,
    visitType: 'Coffee & Dessert',
  },
];
