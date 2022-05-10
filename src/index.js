import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Batching from "./newfitchs/batching";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Налаштування маршрутів; навігація по сайту
  // BrowserRouter підключення до URL адреси
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="batching" element={<Batching />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />}>
      {/* індексний маршрут, дочірній маршрут по замовчуванню для батьківського,
      відображається на шляху до батькііського маршруту,
       поки не зроблений вибір*/}
      <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Виберіть рахунок</p>
          </main>
        }
      />
         {/* Invoice дочірній елемент від Invoices */}
        <Route path=":invoiceId" element={<Invoice />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>"Тут нічого не має!"</p>
          </main>
        }
      ></Route>
    </Routes>
  </BrowserRouter>
);
