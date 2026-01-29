import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXiVtrHW-HOVwDCxls8TKgm_Wj95Gp-qc",
  authDomain: "mvpdesign-55f2b.firebaseapp.com",
  projectId: "mvpdesign-55f2b",
  storageBucket: "mvpdesign-55f2b.firebasestorage.app",
  messagingSenderId: "1028317176739",
  appId: "1:1028317176739:web:6a4bded0967bce93acb016",
  measurementId: "G-59GCKS2R7X"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
