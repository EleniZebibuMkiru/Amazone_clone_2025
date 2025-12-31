import React, { useEffect, useContext } from "react";
import Routing from "./Routing";
import { DataContext } from "./components/Dataprovider/Dataprovider";
import { auth } from "./Utility/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Type } from "./Utility/action.type";

function App() {
  const [, dispatch] = useContext(DataContext);

  // Firebase auth listener — runs once globally
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      dispatch({
        type: Type.SET_USER,
        user: authUser || null,
      });
    });
    return () => unsubscribe();
  }, [dispatch]);

  return <Routing />;
}

export default App;
