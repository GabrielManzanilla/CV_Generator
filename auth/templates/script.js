import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

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
        // window.location.href = "dashboard.html";
      })
      .catch((error) => {
        console.error("Error con Google:", error);
        alert("Error con Google: " + error.message);
      });
  });
}
