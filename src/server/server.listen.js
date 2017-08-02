const PORT = 3000;

export default function (app) {
  app.listen(PORT, () => {
    console.log(`Servicio ejecutandose en http://localhost:${PORT}`);
  })
}