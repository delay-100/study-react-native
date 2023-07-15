import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import config from "../firebase.json";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// import { uploadImage } from "../firebase";
// import "firebase/firestore";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const app = initializeApp(config);

const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};
const uploadImage = async (uri) => {
  if (uri.startsWith("https")) {
    return uri;
  }

  const response = await fetch(uri);
  const blob = await response.blob();

  const { uid } = auth.currentUser;
  const storage = getStorage(app);
  const storageRef = ref(storage, `/profile/${uid}/photo.png`);
  await uploadBytes(storageRef, blob, {
    contentType: "image/png",
  });

  return await getDownloadURL(storageRef);
};
export const signup = async ({ name, email, password, photo }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const photoURL = await uploadImage(photo);
  await updateProfile(user, { displayName: name, photoURL });

  // await user.updateProfile(auth.currentUser, { displayName: name, photoURL });

  return user;
};

export const getCurrentUser = () => {
  const { uid, displayName, email, photoURL } = auth.currentUser;
  return { uid, name: displayName, email, photo: photoURL };
};

export const updateUserInfo = async (photo) => {
  const photoURL = await uploadImage(photo);
  await updateProfile(auth.currentUser, { photoURL });
  return photoURL;
};

export const signout = async () => {
  await auth.signOut();
  return {};
};

// const db = firebase.firestore(app);
const db = getFirestore(app);

export const createChannel = async ({ title, desc }) => {
  const channelCollection = collection(db, "channels");
  // const newChannelRef = db.collection("channels").doc();
  const newChannelRef = doc(channelCollection);
  const id = newChannelRef.id;
  const newChannel = {
    id,
    title,
    description: desc,
    createdAt: Date.now(),
  };
  // await newChannelRef.set(newChannel);
  await setDoc(newChannelRef, newChannel);
  return id;
};

export const createMessage = async ({ channelId, message }) => {
  // return await db
  //   .collection("channels")
  //   .doc(channelId)
  //   .collection("messages")
  //   .add({ text: message, createdAt: Date.now() });
  // gifted-chat 적용 전
  // const docRef = doc(db, `channels/${channelId}/messages`, message);
  // await setDoc(docRef, { text: message, createdAt: Date.now() });

  const docRef = doc(db, `channels/${channelId}/messages`, message._id);
  await setDoc(docRef, { ...message, createdAt: Date.now() });
};
