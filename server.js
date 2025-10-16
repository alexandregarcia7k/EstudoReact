import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age,
    },
  });


});
app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();
});

app.listen(3000);
