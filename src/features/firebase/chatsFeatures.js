import firebaseApp from "./firebase";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

export async function getAllChatsOfUser() {
  const collectionRef = collection(firestore,`chats`);
  const chatsCifrados = await getDocs(collectionRef);
  const chats = chatsCifrados.docs.map((chatCifrado) => chatCifrado.data());
  console.log(chats);
  
}
export async function createChat(user, professional) {


    const docuRef = doc(firestore, `chats/${user}/chat/${user}_${professional}`);
    setDoc(docuRef, {
        id: new Date().getTime(),
        nombre: `${user}_${professional}`,
  
      })
    const docuRefPsicoChat = doc(firestore, `chats/${professional}/chat/${professional}_${user}`);
    setDoc(docuRefPsicoChat, {
        id: new Date().getTime(),
        nombre: `${professional}_${user}`,
  
      })
    
  
}
