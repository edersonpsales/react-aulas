import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLoging } from "./components/ButtonLogin";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputPassword = useRef<HTMLInputElement>(null);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);

    if (inputPassword.current !== null) {
      inputPassword.current.focus();
    }
  }, [email, password]);

  useEffect(() => {
    alert("componente inicializou");
  }, []);

  useEffect(() => {
    console.log(email);
  }, [email]);

  const mailLength = useMemo(() => {
    return Math.random();
  }, []);

  // const mailLength =  Math.random();

  return (
    <div>
      <form>
        <p>qtd de caracterres : {mailLength}</p>
        <InputLogin
          label="E-mail"
          value={email}
          onChange={(novoValor) => setEmail(novoValor)}
          onPressEnter={() => inputPassword.current?.focus()}
        />

        <InputLogin
          label="Senha"
          type="password"
          value={password}
          ref={inputPassword}
          onChange={(novoValor) => setPassword(novoValor)}
        />
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
        <ButtonLoging type="button" onClick={handleEntrar}>Cadastrar</ButtonLoging>
      </form>
      <span>{email}</span>
    </div>
  );
};
