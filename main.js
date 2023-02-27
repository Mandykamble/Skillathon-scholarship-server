const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const scholarshipRoute = require("./routes/scholarships.js");
const organisationRoute = require("./routes/organisations.js");
const cors=require("cors");
dotenv.config();

const PORT = 3000 || process.env.PORT;



const corsOptions = {
  origin: "http://127.0.0.1:5173",
};

const app = express();
// app.use(cors(corsOptions));


app.use(cors());
// Body-parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// connecting db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.URI, () => {
  console.log("Db connected");
});
console.log(mongoose.connection.readyState);

// const getUser = () => undefined;



//middleware
// app.use(errorHandler);
app.use("/api/scholarship/",scholarshipRoute);
app.use("/api/organisation/",organisationRoute);

app.use(cookieParser());

// listining port
app.listen(PORT, (req, res) => {
  console.log(`server is listining on port http://localhost:${PORT}`);
});
