import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function useContent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const phoneItemsRef = collection(db, "products", "phones", "phoneItems");
    const laptopsItemsRef = collection(
      db,
      "products",
      "laptops",
      "laptopsItems"
    );
    const shoeItemsRef = collection(db, "products", "shoes", "shoeItems");
    const tvItemsRef = collection(db, "products", "tv", "tvItems");
    const booksItemsRef = collection(db, "products", "books", "booksItems");
    const electricalItemsRef = collection(
      db,
      "products",
      "electricalAccess",
      "electricalItems"
    );

    const getData = async (ref) => {
      const snapShot = await getDocs(ref);
      const response = snapShot.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }))

      return response;
    }

    const setData = async (
      phoneItemsRef,
      laptopsItemsRef,
      shoeItemsRef,
      tvItemsRef,
      booksItemsRef,
      electricalItemsRef
    ) => {
      try {
        
        const phoneResponse = await getData(phoneItemsRef)
        setContent((current) => [
          ...current,
          {caption: "PHONE", data: phoneResponse}
         
        ]);
        const laptopsResponse = await getData(laptopsItemsRef);
        setContent((current) => [
          ...current,
          {caption: "LAPTOPS", data: laptopsResponse}
        ]);
        const sheoResponse = await getData(shoeItemsRef);
        setContent((current) => [
          ...current,
          {caption: "SHOES", data: sheoResponse}
        ]);
        const tvResponse = await getData(tvItemsRef);
        setContent((current) => [
          ...current,
          {caption: "TELEVISION", data: tvResponse}
        ]);
        const bookResponse = await getData(booksItemsRef);
        setContent((current) => [
          ...current,
         {caption: "BOOKS", data: bookResponse}
        ]);
        const electricalResponse = await getData(electricalItemsRef);
        setContent((current) => [
          ...current,
          {caption: "ELECTRICAL ACCESSORIES", data: electricalResponse}
          
        ]);
      } catch (e) {
        console.log(e.message);
      }
    };
    setData(
      phoneItemsRef,
      laptopsItemsRef,
      shoeItemsRef,
      tvItemsRef,
      booksItemsRef,
      electricalItemsRef
    );
  }, []);

  return content;
}
