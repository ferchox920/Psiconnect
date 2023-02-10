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

export default firestore;

export async function getAllChatsOfUser({ user, state }) {
  const collectionRef = collection(firestore, `chats/${user}/chat`);
  const chatsCifrados = await getDocs(collectionRef);
  const chats = chatsCifrados.docs.map((chatCifrado) => chatCifrado.data());
  state(setAllChats(chats));
  return chats;
}

export async function sendMessage({ from, to, message, state }) {
  const docuRef = doc(
    firestore,
    `chats/${from}/chat/${from}_${to}/message/${new Date().getTime()}`
  );
  setDoc(docuRef, {
    id: new Date().getTime(),
    from: from,
    to: to,
    message,
  });
  const docuRefProfessional = doc(
    firestore,
    `chats/${to}/chat/${to}_${from}/message/${new Date().getTime()}`
  );
  setDoc(docuRefProfessional, {
    id: new Date().getTime(),
    from: from,
    to: to,
    message,
  });
  getMessageOfChat({ from, to, state });
}
export async function getMessageOfChat({ from, to, state }) {
  const collectionRef = collection(
    firestore,
    `chats/${from}/chat/${from}_${to}/message/`
  );
  const chatsCifrados = await getDocs(collectionRef);
  const message = chatsCifrados.docs.map((chatCifrado) => chatCifrado.data());
  state(setChat(message));
}

export async function createChat({ user, professional, state }) {
  // validamos que no exista este chat
  const allChatsOfUser = await getAllChatsOfUser({ user:user.id, state });
  const ExistingChat = await allChatsOfUser.find(
    (chat) => chat.name === `${user.id}_${professional.id}`
  );
  if (ExistingChat) return null;
  // si no existe creamos ambas tabla para ambos usuarios
  const docuRef = await doc(
    firestore,
    `chats/${user.id}/chat/${user.id}_${professional.id}`
  );
  await setDoc(docuRef, {
    id: new Date().getTime(),
    name: `${user.id}_${professional.id}`,
    to:professional.name,
    idOfTo:professional.id,
    avatarOfTo:professional.avatar,
  });

  const docuRefPsicoChat = await doc(
    firestore,
    `chats/${professional.id}/chat/${professional.id}_${user.id}`
  );
  await setDoc(docuRefPsicoChat, {
    id: new Date().getTime(),
    name: `${professional.id}_${user.id}`,
    to: user.name,
    idOfTo:user.id,
    avatarOfTo:user.avatar,

  });
  getAllChatsOfUser({ user:user.id, state });
}
