import Login from "./components/login.jsx";
import StaffPanel from "./components/staffPanel.jsx";
import StudentPanel from "./components/StudentPanel.jsx";
import AdminPanel from "./components/AdminPanel.jsx";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./components/config/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isAdmin, setAdmin] = useState(false);
  const [isStudent, setStudent] = useState(false);
  const [isStaff, setStaff] = useState(false);
  const [uid, setuid] = useState(0);
  const [num, setNum] = useState(0);

  const get = async () => {
    const docRef = doc(db, "admin", uid);
    const docRefSt = doc(db, "Student", uid);
    const docRefStaff = doc(db, "Staff", uid);
    const docSnap = await getDoc(docRef);
    const docSnapSt = await getDoc(docRefSt);
    const docSnapStaff = await getDoc(docRefStaff);

    if (docSnap.exists()) {
      setAdmin(true);
    } else if (docSnapSt.exists()) {
      setStudent(true);
    } else if (docSnapStaff.exists()) {
      setStaff(true);
    }
  };

  onAuthStateChanged(auth, (user) => {
    // console.log(user);

    setuid(user?.uid);
    get();
    if (user && isAdmin) {
      setNum(1);
    } else if (user && isStaff) {
      setNum(2);
    } else if (user && isStudent) {
      setNum(3);
    }
  });

  useEffect(() => {
    get();
  }, []);

  switch (num) {
    case 0:
      return <Login />;
    case 1:
      return <AdminPanel />;
    case 2:
      return <StaffPanel />;
    case 3:
      return <StudentPanel />;
  }

  return <></>;
}

export default App;
