import React from "react";

import "./Menu.css";

const products = [
  {
    id: 1,
    name: "Espresso",
    price: "$2.5",
    desc: "small black strong coffee",
    type: "coffee"
  },
  {
    id: 2,
    name: "Double Espresso",
    price: "$4",
    desc: "large black very strong coffee",
    type: "coffee"
  },
  {
    id: 3,
    name: "Cappuccino",
    price: "$2.8",
    desc: "small milk coffee",
    type: "coffee"
  },
  {
    id: 4,
    name: "Double Cappuccino",
    price: "$4.3",
    desc: "big milk coffee",
    type: "coffee"
  },
  {
    id: 5,
    name: "Americana",
    price: "$3.2",
    desc: "large, black, classic coffee with cream",
    type: "coffee"
  },
  {
    id: 6,
    name: "Latte mocca",
    price: "$2.9",
    desc: "latte with the addition of hot chocolate",
    type: "coffee"
  },
  {
    id: 7,
    name: "Latte",
    price: "$3.5",
    desc: "latte on a double espresso",
    type: "coffee"
  },
  {
    id: 8,
    name: "Cream coffee",
    price: "$3.7",
    desc: "aromatic, strong coffee with milky cream foam",
    type: "coffee"
  },
  {
    id: 9,
    name: "Grand coffee",
    price: "$4.5",
    desc: "coffee served with advocate liqueur and whipped cream",
    type: "coffee"
  },

  {
    id: 10,
    name: "Frappe ",
    price: "$4.2",
    desc:
      "iced coffee mixed with ice cream and syrup, served with whipped cream",
    type: "coffee"
  },
  {
    id: 11,
    name: "Frappe Ice",
    price: "$4.5",
    desc: "Iced coffee served with a scoop of ice cream and whipped cream",
    type: "coffee"
  },
  {
    id: 12,
    name: "Coffee in Viennese",
    price: "$2.8",
    desc: "black coffee with whipped cream",
    type: "coffee"
  },
  {
    id: 13,
    name: "Irish coffe",
    price: "$3.5",
    desc: "black coffee with Jameson whiskey",
    type: "coffee"
  },
  {
    id: 14,
    name: "White coffee ",
    price: "$2.9",
    desc: "small coffee with large milk",
    type: "coffee"
  },
  {
    id: 15,
    name: "Caramel coffee",
    price: "$3.6",
    desc: "coffee with sweet caramel and whipped cream",
    type: "coffee"
  },
  {
    id: 16,
    name: "Black Tea",
    price: "$2.6",
    desc: "black traditional tea, served with honey and lemon",
    type: "tea"
  },
  {
    id: 17,
    name: "Black Tea Raspberry",
    price: "$2.9",
    desc: "black tea with raspberry and blackberry juice",
    type: "tea"
  },
  {
    id: 18,
    name: "Earl Grey",
    price: "$2.6",
    desc: "Ceylon black tea with aromatic bergamot",
    type: "tea"
  },
  {
    id: 19,
    name: "Indian Tea",
    price: "$3.2",
    desc: "Ceylon black tea with ginger, cinnamon, cloves and orange",
    type: "tea"
  },
  {
    id: 20,
    name: "Green Tea",
    price: "$2.8",
    desc: "classic green leaf tea sencha",
    type: "tea"
  },
  {
    id: 21,
    name: "Chinese Tea",
    price: "$3.3",
    desc: "a blend of Chinese teas with a distinctive taste",
    type: "tea"
  },
  {
    id: 22,
    name: "Bancha Tea",
    price: "$3.6",
    desc:
      "a composition of green Japanese tea with orange peel, pineapple and hibiscus",
    type: "tea"
  },
  {
    id: 23,
    name: "Ice Tea",
    price: "$2.9",
    desc: "green iced tea with grapefruit and lemon juice",
    type: "tea"
  },
  {
    id: 24,
    name: "Herbal Tea",
    price: "$2.7",
    desc: "herbal tea with camomile, hibiscus, orange and melisa",
    type: "tea"
  },
  {
    id: 25,
    name: "Herbal Tea",
    price: "$3.4",
    desc: "herbal tea with camomile, hibiscus, orange and melisa",
    type: "tea"
  },
  {
    id: 26,
    name: "Citrus Yerba Mate",
    price: "$4.2",
    desc: "South American tea with addition refreshing lemongrass",
    type: "tea"
  },
  {
    id: 27,
    name: "Ginger Tea",
    price: "$3.9",
    desc:
      "ayurvedic herbal mix with ginger, lemongrass, licorice, peppermint and red pepper",
    type: "tea"
  },
  {
    id: 28,
    name: "Viennese cheesecake",
    price: "$4.5",
    desc: "classic fluffy cheesecake with raisins and cranberries",
    type: "deserts"
  },
  {
    id: 29,
    name: "Apple Pie",
    price: "$4.7",
    desc: "Hot apple pie served with vanilla ice cream",
    type: "deserts"
  },
  {
    id: 30,
    name: "Yeast cake",
    price: "$3.5",
    desc: "traditional cake with raisins and orange peel",
    type: "deserts"
  },
  {
    id: 31,
    name: "Cocoa Cake",
    price: "$3.9",
    desc: "Cake with chocolate syrup and cream ice cream",
    type: "deserts"
  },
  {
    id: 32,
    name: "Black Forest cake",
    price: "$4.2",
    desc:
      "a chocolate sponge cake with layers of cherry jam and whipped cream and topped with chocolate icing",
    type: "deserts"
  },
  {
    id: 33,
    name: "Muffins",
    price: "$3.9",
    desc: "to choose: with blackcurrant, apples, chocolate, advocate",
    type: "deserts"
  },
  {
    id: 34,
    name: "Chocolate cake",
    price: "$4.1",
    desc: "based on Belgian chocolate with the addition of marzipan",
    type: "deserts"
  },
  {
    id: 35,
    name: "fruitcake",
    price: "$3.9",
    desc: "with a lot of dried fruits, based on a sponge cake",
    type: "deserts"
  },
  {
    id: 36,
    name: "Ice cream dessert with nuts and raisins",
    price: "$4.2",
    desc:
      "three scoops of ice cream with caramelized apricot, plum, almonds, raisins and nuts, served with whipped cream",
    type: "deserts"
  },
  {
    id: 37,
    name: "Raspberry ice cream",
    price: "$4.5",
    desc:
      "vanilla ice cream with Advocaat 30ml, combined with warm raspberries and whipped cream",
    type: "deserts"
  },
  {
    id: 38,
    name: "Ice cream with strawberries",
    price: "$4.3",
    desc:
      "a combination of vanilla ice cream with hot strawberries and fluffy whipped creama",
    type: "deserts"
  },
  {
    id: 39,
    name: "pistachio chocolate",
    price: "$3.7",
    desc:
      "original combination of chocolate with pistachio syrup and whipped cream",
    type: "deserts"
  }
];

const Item = ({ product }) => (
  <li>
    <strong>
      {product.name} / {product.price}
    </strong>{" "}
    <br />
    {product.desc}
  </li>
);

const Gallery = () => {
  return (
    <>
      <h1>Gallery</h1>
      <div />
    </>
  );
};

class Menu extends React.Component {
  state = {
    select: "coffee",
    products: products
  };

  handleProductsFilter(option) {
    this.setState({
      select: option
    });
  }

  productsList = () => {
    let products = this.state.products;
    switch (this.state.select) {
      case "coffee":
        products = products.filter(product => product.type === "coffee");
        return products.map(product => (
          <Item product={product} key={product.id} />
        ));
      case "tea":
        products = products.filter(product => product.type === "tea");
        return products.map(product => (
          <Item product={product} key={product.id} />
        ));
      case "deserts":
        products = products.filter(product => product.type === "deserts");
        return products.map(product => (
          <Item product={product} key={product.id} />
        ));
      default:
        return "nie działa, sorry...";
    }
  };

  render() {
    return (
      <>
        <section className="menu">
          <h1>Our Delicious Menu</h1>
          <button onClick={this.handleProductsFilter.bind(this, "coffee")}>
            Coffee
          </button>
          <button onClick={this.handleProductsFilter.bind(this, "tea")}>
            Tea
          </button>
          <button onClick={this.handleProductsFilter.bind(this, "deserts")}>
            Deserts
          </button>
        </section>
        <div className="content">
          <ul>{this.productsList()}</ul>
        </div>
        <section className="foto">
          <Gallery />
        </section>
      </>
    );
  }
}

export default Menu;
