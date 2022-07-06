import styles from "../styles/Home.module.css";
import Image from "next/image";
import { useState } from "react";

function ImageCont({ item }) {
  return (
    <div className={styles.imageCont}>
      <div className={styles.imageIn}>
        <Image
          layout="fill"
          objectFit="cover"
          alt={item.id}
          src={require(`../images/${item.image}.jpg`)}
        />
      </div>

      <div className={styles.imageDes}>
        <span>{item.name}</span>
        <p>{item.des}</p>
      </div>
    </div>
  );
}

function ImageDiv() {
  const [items, setItems] = useState([
    {
      id: 5,
      name: "Fish",
      des: "Test the sweetness of the see",
      image: "2",
    },
    {
      id: 2,
      name: "Beef",
      des: "Enjoy Our beef ",
      image: "2",
    },
    {
      id: 7,
      name: "Rice",
      des: "Cant wait to have this",
      image: "2",
    },
  ]);

  return (
    <div className={styles.imageDiv}>
      {items.map((item) => {
        return <ImageCont key={item.id} item={item} />;
      })}
    </div>
  );
}

const Explore = () => {
  return (
    <div className={styles.explore}>
      <ImageDiv />
    </div>
  );
};

export default Explore;

//https://github.com/amnotperfect/Tinas-Kitchen.git
