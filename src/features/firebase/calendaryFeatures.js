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

export async function createContext({ professionalId, freeDays, workingHours }) {
    const docuRef = doc(
      firestore,
      `context/${professionalId}/times/${professionalId}`
    );
    await setDoc(docuRef, {
      id: new Date().getTime(),
      freeDays,
     workingHours
    });
  }
export async function createConsults({ professionalId, hours }) {
    const docuRef = doc(
      firestore,
      `context/${professionalId}/consults/${professionalId}`
    );
    console.log(docuRef);
    await setDoc(docuRef, {
      hours:['Thu Feb 23 2023 16:49:07 GMT-0300 (hora estándar de Argentina) 9:00 am']
    });
  }
export async function getContextProfessional({professionalId, state}) {
  const collectionRef = collection(firestore, `context/${professionalId}/times`);
  const constextCifrados = await getDocs(collectionRef);
  const context = constextCifrados.docs.map((contextCifrado) => contextCifrado.data());
  state(context[0]);
  return context;
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

