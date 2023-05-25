import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

interface Icon {
  id: string;
  name: string;
  image: string;
  created_at: firebase.firestore.Timestamp;
}

function IconList(): JSX.Element {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    const db = firebase.firestore();
    const iconsRef = db.collection('icons');

    iconsRef
      .orderBy('created_at', 'desc')
      .get()
      .then((querySnapshot) => {
        const newIcons = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Icon[];

        setIcons(newIcons);
      })
      .catch((error) => {
        console.error('Error fetching icons: ', error);
      });
  }, []);

  return (
    <div>
      {icons.map((icon) => (
        <div key={icon.id}>
          <img src={icon.image} alt={icon.name} />
          <p>{icon.name}</p>
        </div>
      ))}
    </div>
  );
}
