import firebaseApp from "./firebase";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
} from "firebase/firestore";

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
      `context/${professionalId}/consults/${hours}`
    );
    await setDoc(docuRef, {
      id: new Date().getTime(),
      hours
    });
  }
export async function getContextProfessional({professionalId, state}) {
  const collectionRef = collection(firestore, `context/${professionalId}/times`);
  const constextCifrados = await getDocs(collectionRef);
  const context = constextCifrados.docs.map((contextCifrado) => contextCifrado.data());
  state(context[0]);
  return context;
  }
  
export async function getConsultsProfessional({professionalId, state}) {
  const collectionRef = collection(firestore, `context/${professionalId}/consults`);
  const contextCifrados = await getDocs(collectionRef);
  const context = contextCifrados.docs.map((contextCifrado) => contextCifrado.data());
  const data = await context.map(e => e?.hours)
  console.log(data);
  state(data);
  return context;
  }
  
