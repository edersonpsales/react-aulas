import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
        <label>
          <span>e-mail</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? inputPassword.current?.focus() : undefined
            }
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            ref={inputPassword}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
      <span>{email}</span>
    </div>
  );
};
