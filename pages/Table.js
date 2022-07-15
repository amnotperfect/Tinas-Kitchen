import { useState } from "react";
import styles from "../styles/Table.module.css";

const Table = () => {
  const [items, setItems] = useState([
    {
      name: "Fish",
      price: "ksh 700",
    },
    {
      name: "Beef",
      price: "ksh 700",
    },
    {
      name: "Rice",
      price: "ksh 700",
    },
    {
      name: "Chapati",
      price: "ksh 700",
    },
    {
      name: "Fish",
      price: "ksh 700",
    },
    {
      name: "Fish",
      price: "ksh 700",
    },
  ]);

  return (
    <div className={styles.table}>
      <header>
        <h1>Our Meals</h1>
      </header>
      <ul>
        {items.map((item) => {
          return (
            <li key={Math.random()}>
              <p>{item.name}</p>
              <span>{item.price}</span>
            </li>
          );
        })}

        <li>
          <p>Fish</p>
          <span>sh 700</span>
        </li>
      </ul>
    </div>
  );
};

export default Table;
