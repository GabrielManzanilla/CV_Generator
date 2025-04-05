import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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

//02. Sesion con correo y contraseña


const signIn = document.getElementById('submitSignIn');


signIn.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Inicio de sesión exitoso', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUserId', user.uid);
            window.location.href = '/request_info';
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-credential') {
                alert('Correo o contraseña incorrectos', 'signInMessage');
            } else {
                alert('La cuenta no existe', 'signInMessage');
            }
        });
});

