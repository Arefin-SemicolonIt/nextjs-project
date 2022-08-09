import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((member) => {
    return {
      params: { id: member.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { semicolon: data },
  };
};

const Details = ({ semicolon }) => {



  return (
    <>
      <Head>
        <title>Semicolon | Team members</title>
        
      </Head>
      
      <div>
        <h1>{semicolon.name}</h1>
        <p>{semicolon.email}</p>
        <p>{semicolon.website}</p>
        <p>{semicolon.address.city}</p>
      </div>
    </>
  );
};

export default Details;
