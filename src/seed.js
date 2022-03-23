import { getFirestore, addDoc, collection } from "firebase/firestore";

export function seedDatabase(firebase) {
  const db = getFirestore(firebase);

  function getUID() {
    // eslint gets funny about bitwise
    /* eslint-disable */
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  // PHONES
  addDoc(collection(db, "products", "phones", "phoneItems"), {
    id: getUID(),
    title: "Samsung Galaxy A12 (128GB, 4GB)",
    description:
      'Samsung Galaxy A12 (128GB, 4GB) 6.5" HD+, 48MP Quad Camera, All Day Battery, Dual SIM GSM Unlocked Global 4G Volte (T-Mobile, AT&T, Metro) International Model A127M/DS (w/Fast Car Charger, Red).',
    section: "phones",
    price: 191.77,
    image:
      "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODF0OGtRUDZPUUwuX0FDX1NMMTUwMF8uanBn.jpg",
    alt: "Samsung Galaxy A12 (128GB, 4GB)",
    rating: 4,
  });
  addDoc(collection(db, "products", "phones", "phoneItems"), {
    id: getUID(),
    title: "Galaxy Tab S7",
    description:
      "Galaxy Tab S7 FE 2021 Android Tablet 12.4” Screen WiFi 64GB S Pen Included Long-Lasting Battery Powerful Performance, Mystic Black",
    section: "phones",
    price: 429.99,
    image:
      "https://i.pcmag.com/imagery/reviews/04g6veatlYuo2rAPztsRvQr-1.fit_lim.size_1050x591.v1632769210.jpg",
    alt: "Galaxy Tab S7",
    rating: 5,
  });
  addDoc(collection(db, "products", "phones", "phoneItems"), {
    id: getUID(),
    title: "Samsung Galaxy S21",
    description:
      "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, White",
    section: "phones",
    price: 429.99,
    image:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Y/B/118566_1641731350.jpg",
    alt: "Samsung Galaxy S21",
    rating: 5,
  });

  // LAPTOPS
  addDoc(collection(db, "products", "laptops", "laptopsItems"), {
    id: getUID(),
    title: " 2022 Newest Dell Inspiron 3510 Laptop",
    description:
      "2022 Newest Dell Inspiron 3510 Laptop, 15.6 HD Display, Intel Celeron N4020 Processor, 16GB DDR4 RAM, 1TB PCIe SSD, Webcam, WiFi, HDMI, Bluetooth, Win10 Home, Black",
    section: "laptops",
    price: 569.0,
    image: "https://m.media-amazon.com/images/I/71-85gS4MhL._AC_SL1500_.jpg",
    alt: " 2022 Newest Dell Inspiron 3510 Laptop",
    rating: 5,
  });
  addDoc(collection(db, "products", "laptops", "laptopsItems"), {
    id: getUID(),
    title: " Samsung Electronics Galaxy Book Pro",
    description:
      'Samsung Electronics Galaxy Book Pro Windows 11 Intel Evo Platform Laptop Computer 13.3" AMOLED Screen 11th Gen Intel Core i5 Processor 8GB Memory 256GB SSD Long-Lasting Battery, Mystic Blue',
    section: "laptops",
    price: 699.99,
    image:
      "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFmRWtsZk5HU1MuX0FDX1NMMTUwMF8uanBn.jpg",
    alt: " Samsung Electronics Galaxy Book Pro",
    rating: 5,
  });
  addDoc(collection(db, "products", "laptops", "laptopsItems"), {
    id: getUID(),
    title: "2021 Newest HP 14' HD Laptop",
    description:
      '2021 Newest HP 14" HD Laptop Light-Weight, AMD 3020e(Up to 2.6GHz), 8GB RAM, 128GB SSD + 64GB eMMC, 1 Year Office 365, WiFi, Bluetooth 5, USB Type-A&C, HDMI, Webcam, Win10, w/Ghost Manta Accessories',
    section: "laptops",
    price: 379.99,
    image:
      "https://www.ubuy.com.tr/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjF1WlQxMzR5NUwuX0FDX1NMMTAwMF8uanBn.jpg",
    alt: " 2021 Newest HP 14' HD Laptop",
    rating: 5,
  });
  addDoc(collection(db, "products", "laptops", "laptopsItems"), {
    id: getUID(),
    title: "ASUS TUF Gaming F17 Gaming Laptop",
    description:
      '2021 Newest HP 14" HD Laptop Light-Weight, AMD 3020e(Up to 2.6GHz), 8GB RAM, 128GB SSD + 64GB eMMC, 1 Year Office 365, WiFi, Bluetooth 5, USB Type-A&C, HDMI, Webcam, Win10, w/Ghost Manta Accessories: CPU: Intel Core i7-11800H; RAM Size: 16 GB; Hard Disk Size: 1 TB',
    section: "laptops",
    price: 1439.0,
    image:
      "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFWakZZS2N1bEwuX0FDX1NMMTUwMF8uanBn.jpg",
    alt: "ASUS TUF Gaming F17 Gaming Laptop",
    rating: 5,
  });

  // SHOES

  addDoc(collection(db, "products", "shoes", "shoeItems"), {
    id: getUID(),
    title: "Running Shoe",
    description: "Under Armour Men's Charged Assert 9 Running Shoe",
    section: "shoes",
    price: 60.09,
    image:
      "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFkemFZZzU2QVMuX0FDX1VMMTUwMF8uanBn.jpg",
    alt: "Running Shoe",
    rating: 4,
  });
  addDoc(collection(db, "products", "shoes", "shoeItems"), {
    id: getUID(),
    title: "Women's Linvale",
    description: "Clarks Women's Linvale Jerica Pump",
    section: "shoes",
    price: 59.98,
    image: "https://m.media-amazon.com/images/I/71dHdS7Bo7L._AC_UL1500_.jpg",
    alt: "Women's Linvale",
    rating: 4,
  });
  addDoc(collection(db, "products", "shoes", "shoeItems"), {
    id: getUID(),
    title: "Fenta Fashion Sneaker",
    description: "Steve Madden Men's Fenta Fashion Sneaker",
    section: "shoes",
    price: 65.0,
    image: "https://m.media-amazon.com/images/I/71dHdS7Bo7L._AC_UL1500_.jpg",
    alt: "Fenta Fashion Sneaker",
    rating: 4,
  });

  // TV
  addDoc(collection(db, "products", "tv", "tvItems"), {
    id: getUID(),
    title: "New Toshiba 55-inch Class M550 Series",
    description:
      "All-New Toshiba 55-inch Class M550 Series LED 4K UHD Smart Fire TV with Hands-Free with Alexa (55M550KU, 2021 Model).",
    section: "tv",
    price: 549.99,
    image: "https://m.media-amazon.com/images/I/81QRHz9tUXL._AC_SL1500_.jpg",
    alt: "New Toshiba 55-inch Class M550 Series",
    rating: 5,
  });
  addDoc(collection(db, "products", "tv", "tvItems"), {
    id: getUID(),
    title: "Insignia 43-inch Smart 4K UHD ",
    description:
      "Insignia NS-43DF710NA21 43-inch Smart 4K UHD - Fire TV, Released 2020.",
    section: "tv",
    price: 249.99,
    image:
      "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFrUXl1MEh2YkwuX0FDX1NMMTUwMF8uanBn.jpg",
    alt: "Insignia 43-inch Smart 4K UHD ",
    rating: 4,
  });
  addDoc(collection(db, "products", "tv", "tvItems"), {
    id: getUID(),
    title: "Samsung LC49RG90SSUXEN 49' ",
    description:
      "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",
    section: "tv",
    price: 1094.98,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
    alt: "Samsung LC49RG90SSUXEN 49' ",
    rating: 4,
  });

  // BOOKS
  addDoc(collection(db, "products", "books", "booksItems"), {
    id: getUID(),
    title: "Atlas of the Heart ",
    description:
      "Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience Hardcover – November 30, 2021; by Brené Brown  (Author)",
    section: "books",
    price: 18.34,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg",
    alt: "Atlas of the Heart ",
    rating: 4,
  });
  addDoc(collection(db, "products", "books", "booksItems"), {
    id: getUID(),
    title: "Maid",
    description:
      "Maid: Hard Work, Low Pay, and a Mother's Will to Survive Hardcover – January 22, 2019 by Stephanie Land  (Author), Barbara Ehrenreich (Foreword)",
    section: "books",
    price: 15.87,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41QAsBTE9gL._SX333_BO1,204,203,200_.jpg",
    alt: "Maid ",
    rating: 4,
  });
 
// ELCTRICAL ACCESSORIES
  addDoc(collection(db, "products", "electricalAccess", "electricalItems"), {
    id: getUID(),
    title: "TP-Link AC1750 Smart WiFi Router",
    description:
      'TP-Link AC1750 Smart WiFi Router (Archer A7) -Dual Band Gigabit Wireless Internet Router for Home, Works with Alexa, VPN Server',
    section: "electricalAccess",
    price: 61.838,
    image:
      "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFSMmE5cC12TkwuX0FDX1NMMTAwMF8uanBn.jpg",
    alt: "TP-Link AC1750 Smart WiFi Router",
    rating: 4,
  });
  addDoc(collection(db, "products", "electricalAccess", "electricalItems"), {
    id: getUID(),
    title: "ULTRALOQ Smart Lock U-Bolt Pro + Bridge WiFi Adaptor",
    description:
      'ULTRALOQ Smart Lock U-Bolt Pro + Bridge WiFi Adaptor, 6-in-1 Keyless Entry Door Lock with WiFi, Bluetooth, Fingerprint and Keypad, Smart Door Lock Front Door, ANSI Grade 1 Certified',
    section: "electricalAccess",
    price: 199.00,
    image:
      "https://i.pinimg.com/736x/87/98/24/8798246ac63d86147174e68c0948caa8.jpg",
    alt: "ULTRALOQ Smart Lock U-Bolt Pro + Bridge WiFi Adaptor",
    rating: 4,
  });
  addDoc(collection(db, "products", "electricalAccess", "electricalItems"), {
    id: getUID(),
    title: "Rachio 3 Smart Sprinkler Controller",
    description:
      'Rachio 3 Smart Sprinkler Controller, 8 Zone 3rd Generation, Alexa and Apple HomeKit Compatible with Hyperlocal Weather Intelligence Plus and Rain, Freeze and Wind Skip',
    section: "electricalAccess",
    price: 191.77 ,
    image:
      "https://i.pcmag.com/imagery/reviews/03zF2LelladFxJxOFR6CbBM-7..v1569480871.jpg",
    alt: "Rachio 3 Smart Sprinkler Controller",
    rating: 4,
  });
}
