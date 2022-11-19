import React, { useState } from "react";
import { Users } from "../../users";
import styles from "./advance.module.scss";
import Table from "../component/table";

const Advance = () => {
  const [query, setQuery] = useState("");
  const keys = ["first_name", "last_name", "email"];

  //   to search for multiple field
  //   const multiSearch = (data) => {
  //     let inputValue = query.toLowerCase();
  //     return data.filter(
  //       (user) =>
  //         user.first_name.toLowerCase().includes(inputValue) ||
  //         user.last_name.toLowerCase().includes(inputValue) ||
  //         user.email.toLowerCase().includes(inputValue)
  //     );
  //   };
  // const search = (data) => {
  //   let inputValue = query.toLowerCase();
  //   return data.filter((user) =>
  //     user.first_name.toLowerCase().includes(inputValue)
  //   );
  // };

  //   to search for multiple field suing keys
  const keySearch = (data) => {
    let inputValue = query.toLowerCase();
    return data.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(inputValue))
    );
  };
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
      {<Table data={keySearch(Users)} query={query.toLowerCase()} />}
    </div>
  );
};

export default Advance;
