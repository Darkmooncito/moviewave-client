import React from "react";
import "../styles/register.sass";
import { Link } from "lucide-react";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-box">
        <h1 className="title">Crea tu cuenta</h1>

        <div className="input-group">
          <img src="../images/user.svg" alt="Usuario" className="icon" />
          <input type="text" placeholder="Nombre" className="input" />
        </div>

        <div className="input-group">
          <img src="../images/user.svg" alt="Apellido" className="icon" />
          <input type="text" placeholder="Apellido" className="input" />
        </div>

        <div className="input-group">
          <img src="../images/email.svg" alt="Correo" className="icon" />
          <input type="email" placeholder="Correo" className="input" />
        </div>

        <div className="input-group">
          <img src="../images/key.svg" alt="Contraseña" className="icon" />
          <input type="password" placeholder="Contraseña" className="input" />
        </div>

        <div className="input-group">
          <img src="../images/key.svg" alt="Confirmar" className="icon" />
          <input
            type="password"
            placeholder="Confirme su contraseña"
            className="input"
          />
        </div>

        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Estoy de acuerdo con los <a href="#">términos y condiciones</a>
          </label>
        </div>

        <button className="register-btn">Registrarse</button>

        <button className="google-btn">
          <img src="../images/google.svg" alt="Google" />
          Continuar con Google
        </button>

        <p className="register">
          ¿Ya tiene cuenta? <Link to="/">Inicie sesión</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
