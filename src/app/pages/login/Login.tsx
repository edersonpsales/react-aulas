import { useCallback, useEffect, useMemo, useState } from "react";

export const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEntrar = useCallback(() =>{
    console.log(email);
    console.log(password);
  },[email,password]);

  
  useEffect(()=>{
    alert('componente inicializou');
  },[]);
  
  useEffect(()=>{
    console.log(email);
  },[email]);


  const mailLength = useMemo(()=>{
    return Math.random();
  },[])

  //const mailLength =  Math.random();


  

  return (
    <div>
      <form>
        <p>qtd de caracterres : {mailLength}</p>
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
