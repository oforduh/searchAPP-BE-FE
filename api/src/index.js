import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Users } from "./users.js";
const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// SendTestEmail();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  const { query } = req.query;
  const keys = ["first_name", "last_name", "email"];

  let inputValue = query.toLowerCase();

  const keySearch = (data) => {
    return data.filter((user) =>
      keys.some((key) => user[key].toLowerCase().includes(inputValue))
    );
  };
  const first10 = keySearch(Users).splice(0, 10);
  res.json({ users: first10 });
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
