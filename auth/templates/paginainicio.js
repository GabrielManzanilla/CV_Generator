import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC0cT5NSwaVEea2alSgbY0VIpkFvCdKZ88",
    authDomain: "cv-generator1.firebaseapp.com",
    projectId: "cv-generator1",
    storageBucket: "cv-generator1.firebasestorage.app",
    messagingSenderId: "450931232331",
    appId: "1:450931232331:web:3b9c0ee2210553420147ce",
    measurementId: "G-17RBTHEXTP"
};
// Inicialización de Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

// Verifica el estado de autenticación del usuario
onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {
        console.log("Usuario autenticado:", user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    // Actualiza la interfaz con los datos del usuario
                    document.getElementById('loggedUserFName').innerText = userData.firstName;
                    document.getElementById('loggedUserEmail').innerText = userData.email;
                    document.getElementById('loggedUserLName').innerText = userData.lastName;
                } else {
                    console.error("No se encontró un documento que coincida con el ID proporcionado.");
                }
            })
            .catch((error) => {
                console.error("Error al obtener el documento:", error);
            });
    } else {
        console.warn("ID de usuario no encontrado en el almacenamiento local.");
    }
});

// Manejo del botón de cierre de sesión
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
        .then(() => {
            console.log("Cierre de sesión exitoso.");
            window.location.href = 'login.html';
        })
        .catch((error) => {
            console.error("Error al cerrar sesión:", error);
        });
});