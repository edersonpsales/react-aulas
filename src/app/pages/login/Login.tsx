import { useEffect, useState } from "react";

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEntrar = () =>{
    alert(email);
  }

  useEffect(()=>{
    alert('componente inicializou');
  },[]);

  useEffect(()=>{
    console.log(email);
  },[email]);

  return (
    <div>
      <form>
        <label>
          <span>e-mail</span>
          <input value={email} onChange={ e => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={ e => setPassword(e.target.value)}/>
        </label>
        <button type="button" onClick={handleEntrar}>Entrar</button>
      </form>
      <span>{email}</span>
    </div>
  );
};
