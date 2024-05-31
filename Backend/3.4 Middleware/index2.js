import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("common"));

// app.use((req, res, next) => {
//   console.log("Requesting method: ", req.method);
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello Dk");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
