import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"; // Añade esta línea para importar Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB9SxFqkYR55cEuGuXsVIbZBm8DBTp5td4",
  authDomain: "cvgenerator-99c85.firebaseapp.com",
  projectId: "cvgenerator-99c85",
  storageBucket: "cvgenerator-99c85.appspot.com",
  messagingSenderId: "252413914431",
  appId: "1:252413914431:web:36db117534a61dde6bb78a",
  measurementId: "G-H0EZ1YXT2V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//01. Sesion con google

const googleBtn = document.getElementById("google-register");

if (googleBtn) {
  googleBtn.addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        alert("¡Inicio de sesión con Google exitoso!\nUsuario: " + user.email);
        console.log("Usuario autenticado:", user);
        // Redirige si quieres, por ejemplo:
        window.location.href = 'paginainicio.html';
      })
      .catch((error) => {
        console.error("Error con Google:", error);
        alert("Error con Google: " + error.message);
      });
  });
}

//02. creacion de usuario con usuario y contraseña

const signUp = document.getElementById('submitSignUp');

signUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email-create').value;
    const password = document.getElementById('password-create').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then(cred => {
          alert ("Usuario creado exitosamente")
        }).catch(error => {
            const errorCode = error.code;

            if (errorCode == "auth/email-already-in-use") {
              alert("El correo ya esta en uso");
            } else if (errorCode == "auth/invalid-email") {
              alert("El correo no es valido");
            } else if ("auth/weak-password") {
              alert("La contraseña debe contener al menos 6 caracteres");              
            }
        });

});