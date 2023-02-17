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
  
