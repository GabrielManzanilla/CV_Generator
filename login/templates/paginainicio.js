import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyB9SxFqkYR55cEuGuXsVIbZBm8DBTp5td4",
    authDomain: "cvgenerator-99c85.firebaseapp.com",
    projectId: "cvgenerator-99c85",
    storageBucket: "cvgenerator-99c85.appspot.com",
    messagingSenderId: "252413914431",
    appId: "1:252413914431:web:36db117534a61dde6bb78a",
    measurementId: "G-H0EZ1YXT2V"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Usuario autenticado:", user);
        // Muestra el correo del usuario autenticado
        document.getElementById('loggedUserEmail').innerText = user.email;
    } else {
        console.log("No hay usuario autenticado.");
        window.location.href = 'login.html'; // Redirige al login si no hay usuario
    }
});

  const logoutButton=document.getElementById('logout');

  logoutButton.addEventListener('click',()=>{
    signOut(auth)
    .then(()=>{
        console.log("Cierre de sesión exitoso.");
        window.location.href='login.html';
    })
    .catch((error)=>{
        console.error('Error al cerrar sesión:', error);
    })
  })