import path from "path";
import {fileURLToPath} from "url";

function homeController (req, res) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const filePath = path.join(__dirname, './index.html');
  res.sendFile(filePath);
}

export default homeController;