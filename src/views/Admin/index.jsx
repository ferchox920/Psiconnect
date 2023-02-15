// import Form from "./scenes/form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Scenes/Dashboard/Dashboard";
import SideBar from "./Scenes/Global/SideBar";
import Topbar from "./Scenes/Global/TopBar";
import { ColorModeContext, useMode } from "./thema";
import './admin.css'
import Products from "./Scenes/Data/Products";
import Brands from "./Scenes/Data/Brand";
import Category from "./Scenes/Data/Category";
import CreateProduct from "./Scenes/CreateData/CreateProduct";
import EditProduct from "./Scenes/EditData/EditProduct";
// import Calendar from "./scenes/calendar/calendar";

function Admin() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="index">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/products" element={<Products />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/categories" element={<Category />} />
              <Route path="/createProduct" element={<CreateProduct />} />
              <Route path="/editProduct/:id" element={<EditProduct />} /> */}
              {/* <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Admin;