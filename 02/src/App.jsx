

import UserProfil from "./components/UserProfil"

function App() {
  const UserList = [
   { id: 1, name: "Dior Massamba Sylla", age: 21, isOnline: true },
    { id: 2, name: "Mamy Fall", age: 39, isOnline: false },
    { id: 3, name: "Massamba sylla", age: 53, isOnline: true },
    { id: 4, name: "Cheikh Tidiane sall", age: 8, isOnline: false },
    { id: 5, name: "Youssoufa Ndjie", age: 0, isOnline: true },

  ]
  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des utilisateurs</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {
          UserList.map((user) => (
            <UserProfil name={user.name} age={user.age} isOnline={user.isOnline} key={user.id}></UserProfil>
          ))
        }
      </div>

    </div>
  )
}

export default App
