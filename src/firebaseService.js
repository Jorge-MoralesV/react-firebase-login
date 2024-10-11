import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { db } from "./firebase"

export const createUserWithQuestionnaire = async (userId, userData, questionnaireData) => {
    await setDoc(doc(db, "usuarios", userId), {
        ...userData, contestado: false
    });
    const cuestionariosRef = collection(db, "usuarios", userId, "cuestionarios");
    await setDoc(doc(cuestionariosRef, "cuestionarioID"), questionnaireData);
};

export const createUserDocument = async (user) => {
    const userRef = doc(db, "usuarios", user.uid);
    await setDoc(userRef, {
      email: user.email,
      contestado: false
    });
  };

export const updateContestado = async (userId, contestado) => {
    const userRef = doc(db, "usuarios", userId);
    await updateDoc(userRef, {
        contestado: contestado
    });
}

export const checkIfContestado = async (userId) => {
    const userRef = doc(db, "usuarios", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
        return userDoc.data().contestado;
    } else {
        console.log("No such document!");
        return false;
    }
};