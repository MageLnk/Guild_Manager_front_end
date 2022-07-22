import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Style
import "./style/style.css";
// App
const Login = ({ handleLogin, auth, errorMessage, loginLoadingStatus }) => {
  // Variables login
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loadingProgress, setloadingProgress] = useState("");
  // Login logic
  const navigate = useNavigate();
  const loginProgress = () => {
    if (loginLoadingStatus === true) {
      return "status-log-in-loading";
    }
    if (auth === false && loginLoadingStatus === false) {
      return "status-log-in-error";
    }
    return "status-log-in";
  };
  const loginResponse = () => {
    if (loginLoadingStatus) {
      return loadingProgress;
    }
    if (loginLoadingStatus === false && auth === false) {
      return errorMessage;
    }
  };
  useEffect(() => {
    loginProgress();
  }, [loginLoadingStatus]);
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
              setloadingProgress("Loading...");
              if (auth === true) {
                navigate("/");
                setloadingProgress("");
              }
            }}
          >
            Enviar
          </button>
          <button>Registrar</button>
        </div>
        <div className={loginProgress()}>
          <p>{loginResponse()}</p>
        </div>
      </form>
    </div>
  );
};

export default Login;
