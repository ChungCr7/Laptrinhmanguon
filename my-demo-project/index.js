import express from "express";
import rootRoutes from "./routes/root.mjs";

const app = express();
const port = 3000;

// Cấu hình view engine là ejs
app.set("view engine", "ejs");

// Thiết lập thư mục chứa các view (thư mục views)
app.set("views", "./views");

// Sử dụng rootRoutes cho ứng dụng
app.use("/", rootRoutes);

// Sử dụng thư mục "public" để phục vụ các tệp tĩnh
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

