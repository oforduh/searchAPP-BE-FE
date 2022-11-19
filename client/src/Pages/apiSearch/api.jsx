import React, { useState } from "react";
import styles from "./styles.module.scss";
import Table from "../component/table";
import { useEffect } from "react";

const Api = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const url = `http://localhost:8000/?query=${query}`;
      const request = await fetch(url);
      const { users } = await request.json();
      setData(users);
    };
    fetchUsers();
  }, [query]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="search.."
        className={styles.search}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {<Table data={data} query={query.toLowerCase()} />}
    </div>
  );
};

export default Api;
