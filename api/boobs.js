export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.dorratz.com/nsfkw/tetae");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader("Content-Type", "image/jpeg");
    res.send(buffer);
  } catch (err) {
    res.status(500).send("Error fetching image: " + err.message);
  }
}
