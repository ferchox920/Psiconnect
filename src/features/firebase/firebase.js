// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyDMdcBHWtAa_LoOgw9otWza0TWu2ZlVhPY",
    authDomain: "sublime-seat-376303.firebaseapp.com",
    projectId: "sublime-seat-376303",
    storageBucket: "sublime-seat-376303.appspot.com",
    messagingSenderId: "299389682703",
    appId: "1:299389682703:web:8989d8972d14e8e0198f7a",
    measurementId: "G-LJTDNRBSDQ"
  };
// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;