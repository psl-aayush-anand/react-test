import React,{useState} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//import { useForm } from 'react-hook-form';

function Model() {
    const [model, setModel] = useState(true);
    const [expD, setExpD] = useState(true);

    const handleChange=()=>{
        setModel(!model);
        setExpD(!expD);
    };

    const handleChange1 = () => {
        setModel('Tenser Flow');
    };
    
    const handleChange2 = () => {
        setModel('Py Torch');
    };

    const handleChange3 = () => {
        setExpD('Image Classification');
    };
    
    const handleChange4 = () => {
        setExpD('Image Segmentation');
    };

    const RadioButton = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="radio" checked={value} onChange={onChange} />
            {label}
          </label>
        );
      };
    return (

    <div className="model-container">
      <label>Model Type:</label>
      <>
      <RadioButton
        label="Tenser Flow"
        value={model==='Tenser Flow'}
        onChange={handleChange1}
      />
      <RadioButton
        label="Py Torch"
        value={model==='Py Torch'}
        onChange={handleChange2}
      />
      </>

      <>
      <label>Experiment Domain:</label>
      <RadioButton
        label="Image Classification"
        value={expD==='Image Classification'}
        onChange={handleChange3}
      />
      <RadioButton
        label="Image Segmentation"
        value={expD==='Image Segmentation'}
        onChange={handleChange4}
      />
      </>
    </div>

    

    

    
    

    


    ) 

}

export default Model;