import Login from './components/Login/Login.tsx';
import { Route, Routes } from 'react-router-dom';
import NotFound from "./components/Error/NotFound.tsx";
import Main from "./components/Main/Main.tsx";
const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<Main />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App;