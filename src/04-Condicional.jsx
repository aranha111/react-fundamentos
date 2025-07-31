export default function Condicional() {
  const logado = true;

  return (
    <div>
      {logado ? <p>Bem-vindo(a)!</p> : <p>Por favor, faça login.</p>}
    </div>
  );
}
