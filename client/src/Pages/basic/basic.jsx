import React, { useState } from "react";
import { Users } from "../../users";
import styles from "./basic.module.scss";
import Highlighter from "react-highlight-words";
const Basic = () => {
  const [query, setQuery] = useState("");

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
      <ul className={styles.list}>
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user, idx) => (
          <li key={idx}>
            <Highlighter
              textToHighlight={user.first_name}
              searchWords={[query]}
              autoEscape={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Basic;
