import firebaseApp from "./firebase";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

export async function getAllChats(name) {
  const collectionRef = collection(firestore,`chats`);
  const chatsCifrados = await getDocs(collectionRef);
  const chats = chatsCifrados.docs.map((chatCifrado) => chatCifrado.data());
  console.log(chats);
  
}
export async function createChat(name) {
    const docuRef = doc(firestore, `chats/${name}/mensajes/${new Date().getTime()}`);
      setDoc(docuRef, {
        id: new Date().getTime(),
        nombre: name,
        data:{
            name
        }
      });
  
}
