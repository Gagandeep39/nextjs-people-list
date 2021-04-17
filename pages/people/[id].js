import Head from 'next/head';

export const getStaticPaths = async () => {
  // Provide all users so NextJS will know the no. of pages to be generate for users
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((person) => {
    return {
      params: { id: person.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { person: data },
  };
};

const Details = ({ person }) => {
  return (
    <>
      <Head>
        <title>People List | Details</title>
      </Head>
      <div>
        <h1>{person.name}</h1>
        <h2>{person.email}</h2>
        <h2>{person.phone}</h2>
      </div>
    </>
  );
};

export default Details;
