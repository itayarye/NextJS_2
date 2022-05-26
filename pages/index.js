import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css'

export const getServerSideProps = async (context) => {
  const { query, res, req } = context;
  //
  const { data: { name } } = await axios({ method: "get", url: "http://localhost:3000/api/hello" });
  return {
    props: {
      date: new Date().toString(),
      name
    }
  }
}
export default function Home({ date, name }) {
  const [myDate, setMyDate] = useState(null);
  useEffect(() => {
    setMyDate(new Date().toString());
  }, []);
  return (
    <div className={styles.container}>
      <p>Home</p>
      <p>this is my name: {name}</p>
      <p>this is date {date}</p>
      <p>this is my date {myDate}</p>
    </div>
  )
}
