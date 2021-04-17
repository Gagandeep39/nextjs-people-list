import Head from 'next/head';
import styles from '../../styles/People.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { people: data },
  };
};

const People = ({ people }) => {
  return (
    <>
      <Head>
        <title>People List | People</title>
      </Head>
      <div>
        <h1>People</h1>
        {people.map((person) => (
          <div key={person.id}>
            <a className={styles.single}>
              <h3> {person.name} </h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default People;
