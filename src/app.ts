import express, { Request, Response } from "express";
import globalError from "./ErrorHandlers/GlobalError";
import { routeError } from "./ErrorHandlers/RouteError";
import cors from "cors";
import router from "./Router";

const app = express();

//parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000","https://cms-siscotek.vercel.app"],
    credentials: true,
  })
);


app.use("/api/v1", router);
app.get("/", async (req: Request, res: Response, next) => {
  try {
    res.send("CMS Siscotek server is running!");
  } catch (err) {
    console.log(err);
    next(err);
  }
});



app.use("*", routeError);
app.use(globalError);
export default app;
