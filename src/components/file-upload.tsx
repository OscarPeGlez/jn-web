import firebase from 'firebase';
import React, { FC, useState } from 'react';

const FileUpload: FC = () => {
  const [picture, setPicture] = useState(null);
  const [uploadValue, setUploadValue] = useState(0);

  const handledUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      'state_changed',
      snapshot => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadValue(percentage);
      },
      error => {
        console.log(error.message);
      },
      () => {
        storageRef.getDownloadURL().then(ulr => {
          setPicture(ulr);
        });
        setUploadValue(100);
      },
    );
  };
  console.log(`picture ->> [${picture}], valor --> [${uploadValue}]`);
  return (
    <div>
      <input type="file" onChange={handledUpload} />
      <br />
      <img width={360} src={picture} alt={'picture'} />
      <br />
      <progress value={uploadValue} max={100} />
    </div>
  );
};

export default FileUpload;
