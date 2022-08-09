import Head from "next/head";
import styles from "../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Semicolon | About</title>
      </Head>

      <div>
        <h1 className={styles.title}>About us</h1>
        <p>
          We are committed to offering unrivaled business automation consultation
          and automated solutions in addition to unique technical support to our
          valuable clients.
        </p>
        <p>
          In any industry, the people behind a company are as important as the
          company itself. Semicolon IT Solutions is no exception. This rising
          software company in uprising based on the dedication, hard work, and
          brainpower of its employees.
        </p>
        <p>
          A rising software development company, Semicolon IT Solutions is a
          one-stop IT solutions company. It has been awarded ISO 9001:2015
          certification for proving itself in the fields of IT-enabled services.
        </p>
      </div>
    </>
  );
};

export default About;
