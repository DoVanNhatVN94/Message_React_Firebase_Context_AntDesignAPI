/** @format */
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./components/login/login";
import ChatRoom from "./components/chatRoom/chatRoom";
import 'antd/dist/antd.min.css';
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ChatRoom />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
