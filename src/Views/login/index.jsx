import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Style
import "./style/style.css";
// App
const Login = ({ handleLogin, auth }) => {
  // Variables login
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // Login logic
  const navigate = useNavigate();
  return (
    <div className="container-login">
      <div>
        <p>Para poder ingresar, necesita estar logeado</p>
      </div>
      <form className="form-login" typeof="submit">
        <input
          type="text"
          value={userName}
          placeholder="Ingrese su usuario"
          onChange={(e) => {
            setUserName(e.target.value);
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
              handleLogin({ userName, password });
              if (auth === true) {
                navigate("/");
              }
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
