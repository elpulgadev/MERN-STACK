const dotenv = require("dotenv");

// config
dotenv.config({ path: "backend/config/config.env" });

const app = require("./app");
const connectDatabase = require("./config/database");

// connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
