import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Explore from "../components/Explore";

function HomeHeader() {
  return (
    <nav className={styles.nav}>
      <li>Home</li>
      <li>Table</li>
      <li>About Us</li>
    </nav>
  );
}

function IntroText() {
  return (
    <div className={styles.introText}>
      <main>
        <h1>Tinas Kitchen</h1>
        <h1>Dishes just for You</h1>
      </main>
      <main>
        <Image
          layout="fill"
          objectFit="cover"
          alt="image"
          src={require("../images/2.jpg")}
        />
      </main>
    </div>
  );
}

function DisplaySection() {
  return (
    <div className={styles.displaySection}>
      <section>
        <Image
          layout="fill"
          objectFit="cover"
          src={require("../images/2.jpg").default}
        />
      </section>
      <section>
        <div>
          <h1>
            You have got to try <br /> out our fish
          </h1>
        </div>
        <div>
          <section></section>
          <section></section>
        </div>
      </section>
    </div>
  );
}

function WelcomePage() {
  return (
    <div className={styles.container}>
      <IntroText />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <WelcomePage />
      <Explore />
      <DisplaySection />
    </div>
  );
}
