import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Style
import "./style/style.css";
// App
const Login = ({ authenticate }) => {
  // Variables login
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // Login logic
  const navigate = useNavigate();
  const handlerLogin = () => {
    authenticate();
    navigate("/");
  };
  return (
    <div className="container-login">
      <div>
        <p>Para poder ingresar, necesita estar logeado</p>
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
              handlerLogin();
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
