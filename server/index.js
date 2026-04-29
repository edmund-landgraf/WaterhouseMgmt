import cors from "cors";
import express from "express";
import { waterhouseModel } from "./data/waterhouse.js";

const app = express();
const port = Number(process.env.PORT ?? 4173);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, service: "waterhouse-ops-map" });
});

app.get("/api/waterhouse", (_request, response) => {
  response.json(waterhouseModel);
});

app.get("/api/waterhouse/business-lines/:id", (request, response) => {
  const businessLine = waterhouseModel.businessLines.find((line) => line.id === request.params.id);

  if (!businessLine) {
    response.status(404).json({ error: "Business line not found" });
    return;
  }

  response.json(businessLine);
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Waterhouse API listening at http://127.0.0.1:${port}`);
});
