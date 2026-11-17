export default function UserProfil({ name, age, isOnline }) {
  return (
    <div
      style={{
        padding: "15px",
        border: "2px solid white",
        borderRadius: "10px",
        width: "200px",
        margin: "10px ",
      }}
    >
      <h2>{name}</h2>
      <p>Age:{age} ans</p>
      <p>Statut :{isOnline ? "🟢 En ligne" : "🔴 Hors ligne"}</p>
      <button style={{
        backgroundColor:" green",
        border: "2px solid white",
        borderRadius:"5px"
      }}> {isOnline ? "Déconnecter" : "Connecter"}</button>
    </div>
  );
}
