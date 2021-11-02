import { app } from "./controller/app";
import { createPartner } from "./controller/createPartner";
import { deletePartner } from "./controller/deletePartner";
import { getAllPartners } from "./controller/getAllPartners";

app.get("/partners", getAllPartners);
app.post("/partner", createPartner);
app.delete("/partner/:id", deletePartner);
