import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";
import style from "/styles/Semicolon.module.css";
import Link from "next/link";

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { semicolons : data }
  }
}

const Semicolon = ({semicolons}) => {
  return (
    <>
      <Head>
        <title>Semicolon | Team</title>
      </Head>
      <h1 className={styles.title}>Management Board</h1>
      <div className={styles.team}>
        <div>
          <Image
            src="/img/Khondoker-Rashed-Manon.jpg"
            width={259}
            height={259}
          />
          <h3> Khondoker Rashed Manon</h3>
          <p> Managing Director</p>
        </div>

        <div>
          <Image src="/img/milon-hossain.jpg" width={259} height={259} />
          <h3>Milon Hossain</h3>
          <p>Director, Software Development</p>
        </div>        

        <div>
          <Image src="/img/biprodas-roy.jpg" width={259} height={259} />
          <h3>Biprodas Roy</h3>
          <p>Chief Operating Officer</p>
        </div>
      </div>
      <div>
        <h1 className={styles.title}>Semicolon Teams</h1>
        {
          semicolons.map(semicolon => (
            <Link href={'/semicolon/' + semicolon.id} key={semicolon.id}>
              <a className={style.single}>
                <h3>{semicolon.name}</h3>
              </a>
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default Semicolon;
