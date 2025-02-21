import { useEffect, useState, useRef } from "react";
import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

const useGetData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const readCountRef = useRef(0); 
  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    const fetchData = async () => {
      try {
        readCountRef.current += 1;
        console.log("Number of Firestore reads:", readCountRef.current);

        const querySnapshot = await getDocs(collectionRef);
        const fetchedData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      readCountRef.current = 0;
    };
  }, [collectionName]);

  return { data, loading };
};

export default useGetData;