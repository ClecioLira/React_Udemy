import { useEffect, useState } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";

const Register = () => {
  // VALORES FORMULARIO
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // ERROS
  const [error, setError] = useState("");
  // HOOKS
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // cria usuario
    const user = {
      displayName,
      email,
      password,
    };

    // valida senha
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário e compartilhe suas histórias.</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Insira sue nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

        <label>
          <span>Email: </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Insira seu email válido"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <label>
          <span>Confirmação de Senha: </span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        {!loading && <button className="btn">Cadastrar</button>}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
