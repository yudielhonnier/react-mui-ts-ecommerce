import { useState } from 'react';

interface IconUploaderProps {
  saveCustomIcon: (iconFile: File) => void;
}

function IconUploader({ saveCustomIcon }: IconUploaderProps): JSX.Element {
  const [iconFile, setIconFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setIconFile(file || null);
  };

  const handleSaveClick = () => {
    if (iconFile) {
      saveCustomIcon(iconFile);
    }
  };

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      {iconFile && (
        <div>
          <img src={URL.createObjectURL(iconFile)} alt={iconFile.name} />
          <button onClick={handleSaveClick}>Save Icon</button>
        </div>
      )}
    </div>
  );
}
