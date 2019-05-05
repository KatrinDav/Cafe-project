import React from "react";
import img11 from "../img/widok.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <h1>About Coffee Ideas</h1>
        <p>
          Our cafe has existed for over 2 years. This is a unique place, created
          and run by coffee enthusiasts. Our baristas serve the best coffee -
          always prepared in accordance with the art ofbrewing, freshly ground
            grains of noble Arabica with an admixture of stimulating robusta,
          guaranteeing intense taste.{" "}
        </p>{" "}
        <br />
        <p>
          We prepare coffee only from grains smoked in a period not longer than
          two weeks. Thanks to this obtained the taste of coffee is clear and
          noble. We use the seeds that come from different regions: from Brazil,
          India or Guatemala, in the area of ​​which the best coffee in the
          world is grown - guatemala red geisha.{" "}
        </p>{" "}
        <br />
        <p>
          Continually we follow the latest trends and improve the way of
          preparing coffee for our guests.
        </p>{" "}
        <br />
        <p>
          Our offer also includes proposals for tea lovers. We serve high
          quality deciduous tea derived from the best Chinese, Ceylon and Indian
          plantations and Japanese. To get the best taste of tea we use filtered
          spring water. In order to enrich and diversify the brewed aroma tea -
          according to the order - we add citrus fruits, blackberries, honey and
          herbs. We can make each tea according to the individual wishes -
          regardless of the items presented in the Menu. perfect complemented
          with coffee and tea are delicious, homemade cakes, prepared and baked
          according to verified recipes. We offer: cheesecake, apple pie, yeast
          cake, cake, grandmother and fruit cake. We are open every day, from
          8:00 PM. Come and visit Us!
        </p>
      </section>
      <section id="foto">
        <img src={img11} alt="obrazek" />
      </section>
    </>
  );
};

export default About;
