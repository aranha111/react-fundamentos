function Saudacao(props) {
  return <h2>Olá, {props.nome}!</h2>;
}

export default function PropsExemplo() {
  return (
    <div>
      <Saudacao nome="Alan" />
      <Saudacao nome="Maria" />
    </div>
  );
}
