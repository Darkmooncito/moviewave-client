import React, { useState } from "react";
import "./styles/login.sass";
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="title">
          Movie<span>Wave</span>
        </h1>
        <p className="subtitle">¡Bienvenido a la mejor plataforma de streaming!</p>
        <p className="text">Ingrese su correo y contraseña para acceder</p>

        <input type="email" placeholder="Email" className="input" />

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            className="input"
          />
          <img
            src={showPassword ? "../public/images/eyeopen.svg" : "../public/images/eyeclose.svg"}
            alt="Mostrar contraseña"
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button className="login-btn">Iniciar sesión</button>

        <a href="#" className="forgot">¿Olvidó su contraseña?</a>

        <button className="google-btn">
          <img src="/images/google.svg" alt="Google" />
          Continuar con Google
        </button>

        <p className="register">
          ¿No tiene cuenta? <Link to="/register">Regístrese</Link>
        </p>    

      </div>
    </div>
  );
};

export default Login;
