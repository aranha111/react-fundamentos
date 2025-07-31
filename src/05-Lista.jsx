export default function Lista() {
  const frutas = ["Maçã", "Banana", "Laranja"];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}
