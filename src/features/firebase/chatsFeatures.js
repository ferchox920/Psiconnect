import firebaseApp from "./firebase";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { setAllChats, setChat } from "../chatSlice";

const firestore = getFirestore(firebaseApp);

export async function getAllChatsOfUser({user, state}) {
  const collectionRef = collection(firestore, `chats/${user}/chat`);
  const chatsCifrados = await getDocs(collectionRef);
  const chats = chatsCifrados.docs.map((chatCifrado) => chatCifrado.data());
  state(setAllChats(chats))

}


export async function sendMessage({from, to, message, state } ) {
   const docuRef = doc(firestore, `chats/${from}/chat/${from}_${to}/message/${new Date().getTime()}`);
   setDoc(docuRef, {
      id: new Date().getTime(),
      from: from,
      to: to,
      message
    })
    getMessageOfChat({from,to, state})
}
export async function getMessageOfChat({from, to, state} ) {
  const collectionRef = collection(firestore, `chats/${from}/chat/${from}_${to}/message/`);
  const chatsCifrados = await getDocs(collectionRef);
  const message = chatsCifrados.docs.map((chatCifrado) => chatCifrado.data());
  state(setChat(message))
}



export async function createChat(user, professional) {
  const docuRef = doc(firestore, `chats/${user}/chat/${user}_${professional}`);
  setDoc(docuRef, {
    id: new Date().getTime(),
    nombre: `${user}_${professional}`,
  });
  
  const docuRefPsicoChat = doc(
    firestore,
    `chats/${professional}/chat/${professional}_${user}`
  );
  setDoc(docuRefPsicoChat, {
    id: new Date().getTime(),
    nombre: `${professional}_${user}`,
  });
}
