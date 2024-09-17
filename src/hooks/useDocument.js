import React, { cloneElement } from "react"
import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    //realtime data for the document
    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)

        const unsubscribe = ref.onSnapshot((snapshot) => {
            if (snapshot.exists) {
                setDocument({ ...snapshot.data(), id: snapshot.id });
                setError(null);
              } else {
                setError("This project does not exist yet.");
              }
            },
            (err) => {
              console.log(err.message);
              setError("Failed to get project");
            }
          );

        return () => unsubscribe()

    }, [collection, id])

    return { document, error }
}