import { PORT } from "./config";
import app from "./server";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
