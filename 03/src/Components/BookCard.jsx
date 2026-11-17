export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div
      style={{
        border: "1px solid #999",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>{titre}</h3>
      <p>{auteur}</p>

      <p>{estDisponible ? "🟢 Disponible" : "🔴 Emprunté"}</p>

      <button onClick={onClickEmprunt}>
        {estDisponible ? "Emprunter" : "Rendre"}
      </button>
    </div>
  );
}

