import express from "express";
import bfhlRoutes from "./routes/bfhlRoutes";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//For assignment purpose, allowing all origins
app.use(cors({ origin: "*" }));

app.use("/", bfhlRoutes);

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({
      is_success: false,
      error: "Something went wrong!",
    });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
