import React from "react";
import "./home.css";
import Product from "../product/Product";
import useContent from "../../hook/useContent";

const Home = () => {
  const response = useContent();

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      <>
        {response.map((items) => (
          <div className="home__section">
            <h2>{items?.caption}</h2>
              <div className="home__row">
            {items.data.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  alt={item.alt}
                  rating={item.rating}
                />
                ))}
              </div>
          </div>
        ))}
      </>
    </div>
  );
};
export default Home;
