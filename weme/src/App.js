import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Post from "./pages/Post";
import Detail from "./pages/Detail";

function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/post" element={<Post />} />
                    <Route path="/detail" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;