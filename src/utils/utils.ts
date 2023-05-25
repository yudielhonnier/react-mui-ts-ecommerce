export const getCategoriesIDArray = (p) => {
  const list = [];
  p.category.forEach((c) => {
    list.push(c.id);
  });
  return list;
};

export function saveCustomIcon(iconFile: File): void {
  const db = firebase.firestore();
  const iconsRef = db.collection('icons');

  const reader = new FileReader();
  reader.readAsDataURL(iconFile);
  reader.onload = (event: ProgressEvent<FileReader>) => {
    const imageData = event.target?.result as string;

    iconsRef
      .add({
        name: iconFile.name,
        image: imageData,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log('Icon saved with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error saving icon: ', error);
      });
  };
}
