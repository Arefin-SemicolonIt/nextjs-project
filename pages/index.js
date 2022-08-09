import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Semicolon | Home</title>
        <meta name="keywords" content="semicolon"/>
      </Head>

      <div>
        <div className={styles.image}>
          <Image src="/home.jpg" width={1400} height={900}/>
        </div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          A rising Web Development Company, Semicolon IT Solutions has its ways
          around various types of web design and development. Creating a brand out
          of your business is of its many specialties. It has proven itself as an
          uprising Digital Marketing Agency in Bangladesh as well.
        </p>
        <p className={styles.text}>
          A rising software development company, Semicolon IT Solutions is a
          one-stop IT solutions company. It has been awarded ISO 9001:2015
          certification for proving itself in the following fields.
        </p>
        <Link href="/semicolon">
          <a className={styles.btn}>See all member</a>
        </Link>
      </div>
    </>
  );
}
