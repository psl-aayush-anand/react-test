import React from "react";

import {useState} from 'react';
import axios from 'axios';
import { Center } from "@mantine/core";

function Uploads() {
    const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }
    
    return (
    // <><div className="m-3">
    //         <label>Upload Model</label><br />
    //         <label className="mx-3">Choose file: </label>
    //         <input className="d-none" type="file" />
    //         <button className="btn btn-outline-primary">Upload</button>
    //     </div>
        
    //     <div className="m-3">
    //             <label>Upload Model Loader</label><br />
    //             <label className="mx-3">Choose file: </label>
    //             <input className="d-none" type="file" />
    //             <button className="btn btn-outline-primary">Upload</button>
    //         </div>
            
    //         <div className="m-3">
    //   <label>Upload Test Data(optional)</label><br/>
    //   <label className="mx-3">Choose file: </label>
    //   <input className="d-none" type="file" />
    //   <button className="btn btn-outline-primary">Upload</button>
    // </div>

    //         </>
    
//     <div className="uploads-container">
//     <input
//       type="text"
//       placeholder="First Name..."
//       value={formData.firstName}
//       onChange={(e) => {
//         setFormData({ ...formData, firstName: e.target.value });
//       }}
//     />
//     <input
//       type="text"
//       placeholder="Last Name..."
//       value={formData.lastName}
//       onChange={(e) => {
//         setFormData({ ...formData, lastName: e.target.value });
//       }}
//     />
//     <input
//       type="text"
//       placeholder="Username..."
//       value={formData.username}
//       onChange={(e) => {
//         setFormData({ ...formData, username: e.target.value });
//       }}
//     />
//   </div>

<div className="uploads-container">
<form onSubmit={handleSubmit}>
  <label>Upload Model:</label>
  <input type="file" onChange={handleChange} accept=".h5" required/>
  <br/>  <br/>


  <label>Upload Model Loader:</label>
  <input type="file" onChange={handleChange} accept=".py" required/>
  <br/>  <br/>


  <label>Upload Test Data:</label>
  <input type="file" onChange={handleChange} accept="" />
  <br/>  <br/>


  <Center><button type="submit">Upload</button></Center>
</form>
</div>
    

    )
}

export default Uploads;