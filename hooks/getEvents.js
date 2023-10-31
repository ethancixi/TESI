import { getDocs, collection } from "firebase/firestore";
import { FIREBASE_FIRESTORE } from "../firebaseConfig";

const collection_name = "events";

const firestore = FIREBASE_FIRESTORE;

export const findEvents = async () => {
  const doc_refs = await getDocs(collection(firestore, collection_name));

  const res = [];

  doc_refs.forEach((event) => {
    res.push({
      id: event.id,
      ...event.data(),
    });
  });

  return res;
};
