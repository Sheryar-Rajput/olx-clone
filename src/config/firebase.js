// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { doc, setDoc,getFirestore, collection, addDoc,getDocs,getDoc } from "firebase/firestore"; 
import {getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBy7noTfJUxCH9_fxyy2uu7dKgyyQT6U4",
  authDomain: "newproject-3e512.firebaseapp.com",
  projectId: "newproject-3e512",
  storageBucket: "newproject-3e512.appspot.com",
  messagingSenderId: "1024483237186",
  appId: "1:1024483237186:web:21dd77cf448dcbff58fcdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore();
const storage = getStorage();


async function register(email, password,name,number,profileImage) {
     const user = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, `/profile/${profileImage[0].name}`);
      const response = await uploadBytes(storageRef, profileImage[0])
      const url = await getDownloadURL(response.ref)
      const uid = user.user.uid;      
setDoc( doc(db,"user",uid),{
  email,
  name,
  number,
  url,
  })
  }
       
async function login(email, password) {
const userobj =  await signInWithEmailAndPassword(auth, email, password)
    const docRef = doc(db, "user", userobj.user.uid);
    const docSnap = await getDoc(docRef);
      return docSnap.data()  
}

 async function postAdd(title,description,price,addImage){
  let urls = []
  for(let i = 0; i < addImage.length; i++) {
    const storageRef = ref(storage, `/sellImages/${addImage[i].name}`);
    const response = await uploadBytes(storageRef, addImage[i])
    const url = await getDownloadURL(response.ref)
    urls.push(url)
  }
  const docRef = await addDoc(collection(db, "postAdd"), {
    title,
    description,
    price,
    urls,
  });
}

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "postAdd"))
  const ads = []
  querySnapshot.forEach((doc) => {
  ads.push({ ...doc.data(), id: doc.id })
  })
  return ads
}

async function getAdDetails(adId) {
  try{
    const docRef = doc(db, "postAdd", adId);
    const addData = await getDoc(docRef);
    console.log(addData.data());
    const data =addData.data()
    return data
  }
  catch{}
}
    export {
      register,
      login,
      postAdd,
      getAds,
      getAdDetails,
      
    }
    