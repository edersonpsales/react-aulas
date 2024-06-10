import { Route, Routes} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Dashboard, Login } from "../pages";
import { Navigate } from "react-router-dom";

export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/entrar" element={<Login/>} />
                <Route path="/pagina-inicial" element={<Dashboard/>} />
                <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
            </Routes>
        </BrowserRouter>
    );
};
