import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Utils/Button";
import { FaDownload } from "react-icons/fa";

import EditForm from "./components/EditForm/EditForm";
import PrevForm from "./components/PrevForm/PrevForm";

const App = () => {
  const [isEditing, setIsEditing] = useState(true);
  const [photoUploaded, setPhotoUploaded] = useState(null);

  const onUploadPhoto = (e) => {
    console.log(e.target.files[0]);
    setPhotoUploaded(e.target.files[0]);
  };
  
  return (
    <>
      <Header />
      <Button
        text="EditPrev"
        onClick={() => {
          console.log("Edit");
          setIsEditing(true);
        }}
      >
        Edit
      </Button>
      <Button
        text="EditPrev"
        onClick={() => {
          console.log("Preview");
          setIsEditing(false);
        }}
      >
        Preview
      </Button>
      {!isEditing && (
        <Button text="Download" onClick>
          PDF <FaDownload />
        </Button>
      )}
      {isEditing ? (
        <EditForm onChange={onUploadPhoto}></EditForm>
      ) : (
        <PrevForm photo={photoUploaded}></PrevForm>
      )}
      <Footer />
    </>
  );
};

export default App;
