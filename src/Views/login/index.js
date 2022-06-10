import { useContext, useState } from "react";
//
import ContextApi from "../../Context/ContextApi";
//

//
import "./style/style.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { getLogin } = useContext(ContextApi);

  console.log("Ola k ase, login o k ase");
  return (
    <div className="container-login">
      <div>
        <p>Para poder ingresar, necesta estar logeado</p>
      </div>
      <form className="form-login" typeof="submit">
        <input
          type="text"
          value={user}
          placeholder="Ingrese su usuario"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="Ingrese su contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setUser("");
              setPassword("");
              getLogin();
            }}
          >
            Enviar
          </button>
          <button>Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

/*
 */
