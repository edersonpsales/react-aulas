import { Link } from "react-router-dom"; 
import { Login } from "../login/Login";

const Botao = () => {
    return <button>Botao teste</button>
}

export const Dashboard = () => {
    return (
        <div>
            <p>Dashboard xpto 123</p>
            <Botao/><br/>
            <Link to="/entrar">Login</Link>
        </div>
    );
}