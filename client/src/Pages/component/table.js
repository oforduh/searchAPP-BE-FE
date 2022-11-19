import Highlighter from "react-highlight-words";
const Table = ({ data, query }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              {" "}
              <Highlighter
                textToHighlight={item.first_name}
                searchWords={[query]}
                autoEscape={true}
              />
            </td>
            <td>
              <Highlighter
                textToHighlight={item.last_name}
                searchWords={[query]}
                autoEscape={true}
              />
            </td>
            <td>
              <Highlighter
                textToHighlight={item.email}
                searchWords={[query]}
                autoEscape={true}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
