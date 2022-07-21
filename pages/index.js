import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Link from "next/link";

function HomeHeader() {
  return (
    <nav className={styles.nav}>
      <li>Home</li>
      <li>
        <Link href="/Table">Table</Link>
      </li>
      <li>
        <Link href="/ContactUs">Contact Us</Link>
      </li>
    </nav>
  );
}

function IntroText() {
  return (
    <div className={styles.introText}>
      <main>
        <h1>Tinas Kitchen</h1>
        <p>
          Welcome to tinas kitchen we hope to serve <br />
          you with the best of dishes
        </p>

        <button>
          <Link href="/ContactUs">Contact Us</Link>
        </button>
      </main>
      <main>
        <Image
          layout="fill"
          objectFit="cover"
          alt="image"
          src={require("../images/4.jpg")}
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

function ContactUsDiv() {
  return (
    <div className={styles.contactUsDiv}>
      <button>
        <Link href="/ContactUs">Contact Us</Link>
      </button>
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
      <Footer />
    </div>
  );
}

//https://github.com/amnotperfect/Tinas-Kitchen.git
