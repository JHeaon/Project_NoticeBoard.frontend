import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from "./pages/Main";
import Login from "./pages/Login";

function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;