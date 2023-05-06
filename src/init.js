import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./dbTestHandler";
import app from "./server";

const PORT = process.env.PORT || 8080;

const handleListening = () => {
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);
};

app.listen(PORT, handleListening);
