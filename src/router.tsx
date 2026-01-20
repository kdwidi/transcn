import { BrowserRouter, Route, Routes } from "react-router";

import Dashboard from "./routes/dashboard";
import Login from "./routes/login";
import { Toaster } from "sonner";
import Providers from "./components/providers";
import MasterUser from "./routes/master-user";
import MasterItem from "./routes/master-item"; 
import Transaction from "./routes/transaction";
import Report from "./routes/report"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Providers>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/master-user" element={<MasterUser />} />
            <Route path="/master-item" element={<MasterItem />} />
            <Route path="/transaksi" element={<Transaction />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </Providers>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors />
    </>
  )
}
