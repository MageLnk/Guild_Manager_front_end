import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Style
import "./style/style.css";
// App
const Login = ({ handleLogin, auth, loginStatus, setLoginStatus }) => {
  // Variables login
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // Login logic
  const navigate = useNavigate();
  const loginInternalStatus = () => {
    if (loginStatus === "Loading...") {
      return "status-log-in-loading";
    }
    if (auth === false) {
      return "status-log-in-error";
    }
    return "status-log-in";
  };
  useEffect(() => {
    loginInternalStatus();
  }, [loginStatus]);
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
              setLoginStatus("Loading...");
              if (auth === true) {
                navigate("/");
              }
            }}
          >
            Enviar
          </button>
          <button>Registrar</button>
        </div>
        <div className={loginInternalStatus()}>
          <p>{!loginStatus ? `    ` : loginStatus}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
