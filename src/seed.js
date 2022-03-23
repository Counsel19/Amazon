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

  const ebooks = collection(db, "products", getUID(), "phones");
  
  addDoc(phones, {
    id: getUID(),
    title: "The Lean Startup",
    description:
      'Samsung Galaxy A12 (128GB, 4GB) 6.5" HD+, 48MP Quad Camera, All Day Battery, Dual SIM GSM Unlocked Global 4G Volte (T-Mobile, AT&T, Metro) International Model A127M/DS (w/Fast Car Charger, Red).',
    section: "phones",
    price: 191.77,
    image: "https://www.u-buy.com.ng/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODF0OGtRUDZPUUwuX0FDX1NMMTUwMF8uanBn.jpg",
    alt: "Samsung Galaxy A12 (128GB, 4GB)",
    rating: 4,
  });


    
}

