import { Link } from "react-router-dom"; 
import { useRef } from "react";

const Botao = () => {
    return <button>Botao teste</button>
}

export const Dashboard = () => {

    const counterRef = useRef({counter:0});
    return (
        <div>
            <p>Dashboard xpto 123</p>
            <p>Contador: {counterRef.current.counter}</p>
            <button onClick={()=>counterRef.current.counter++}>Somar</button>
            <button onClick={()=>console.log(counterRef.current.counter)}>Logar</button>

            <Botao/><br/>
            <Link to="/entrar">Login</Link>
        </div>
    );
}