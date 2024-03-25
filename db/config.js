require("@dotenvx/dotenvx").config();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = process.env.DB_URL;

main().catch((err) => console.log(err));
async function main() {
  console.log(`Connecting to mongoDB server ${mongoDB}`);
  await mongoose.connect(mongoDB);
//   const value = await mongoose.get();
  console.log("Connected to mongoDB server");
}
