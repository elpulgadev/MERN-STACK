const dotenv = require("dotenv");

// Config
dotenv.config({ path: "backend/config/config.env" });

const app = require("./app");
const connectDatabase = require("./config/database");

// Connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
