import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyC0cT5NSwaVEea2alSgbY0VIpkFvCdKZ88",
    authDomain: "cv-generator1.firebaseapp.com",
    projectId: "cv-generator1",
    storageBucket: "cv-generator1.firebasestorage.app",
    messagingSenderId: "450931232331",
    appId: "1:450931232331:web:3b9c0ee2210553420147ce",
    measurementId: "G-17RBTHEXTP"
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