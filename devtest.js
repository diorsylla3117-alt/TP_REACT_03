const users=[
    {prenom: 'Mareme', nom:'SECK', statut: 0, age: 20, role:'ADMIN'},
    {prenom: 'Fatou', nom:'SOW', statut: 1, age: 21, role:'USER'},
    {prenom: 'Malick', nom:'KA', statut: 0, age: 30, role:'ADMIN'},
    {prenom: 'Soma', nom:'CISSE', statut: 0, age: 20, role:'ADMIN'},
    {prenom: 'Alphonse', nom:'SANE', statut: 1, age: 35, role:'USER'},
];
// creer une fontion flechee nommee getadmins qui prends en paranetre le tableau et retourne un tableau contenant tous les utilisateurs ayant le role admin.
//faite l'appel de la fonction pour afficher le resultat

let getadmins = (users) =>{
    return users.filter(user=> user.role==='ADMIN');
};
console.log(getadmins(users));

let user={
     prenom: 'Mareme', 
     nom:'SECK', 
     statut: 0, 
     age: 20, 
     role:'ADMIN'
};
// recuper le nom le prenom et le role de l'objet et les afficher
let pnom = user.prenom;
let nom1 = user.nom;
let role1 = user.role;
console.log(pnom, nom1, role1);

//Destructuration
const {prenom, nom, role}=user;//c'est la mm chose avec la recuperation
console.log(prenom, nom, role);

//utilisation du map
//.map permet de creer un autre tableau sans pour autant changer le tableau qu'on avait avant c'est a dire ce nouveau tableau n'ecrase pas l'autre tableau
let usermap= users.map(( {prenom, role})=>{
    return {
        p:prenom,
        r:role
    }
});
console.log(usermap);

//recuperer le premier utilisateur et le mettre dans une variable appelée user1 et le troisieme user3 tout en ignorant le user 
console.log(users[0]);
let [user1] = users;
console.log(users[2]);
let [user3] = users;

// creer un tableau appele equipe contenant toutes les donnees du premier utilisateur plus un nouvel utilisateur a la fin sans utiliser push 
const equipe=[
      {prenom: 'Mareme', nom:'SECK', statut: 0, age: 20, role:'ADMIN'},
];
//pour qjouter auelaue chose a lq fin d'un tableau sans pour autant utiliser le push on fait les spread c'est a dire le trois points puis le nom de l'endroit c'est a dire la ou on veut l'ajouter
//puis on mets les cles qu'on veut 
const nouvelutilisateur= [...users,{prenom: 'Samba', nom:'SALL', statut: 0, age: 20, role:'ADMIN'}];
console.log(nouvelutilisateur);

//Modification du statut du deuxieme utilisateur du tableau users
if(users[1].statut===0){
    users[1].statut=1;
}else{
    users[1].statut=0;
};
console.log(users);