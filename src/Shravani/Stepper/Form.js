import React, {useState} from "react";
import Model from "./model";
import Uploads from "./uploads";

function Form() {

    const [step,setStep]=useState(0);
    const [formData, setFormData] = useState();

    const FormTitles = ["Model details","Uploads"];

    const StepDisplay = () => {
        if (step === 0) {
            //return <Model />;
            return <Model formData={formData} setFormData={setFormData} />;
        } else {
            //return <Uploads />;
            return <Uploads formData={formData} setFormData={setFormData} />;
        } 
    };

    return (
        <div className="form">
            <div className="progress">
                <div style={{width: step === 0? "50%" : "100%"}}></div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[step]}</h1>
                </div>
                <div className="body">{ StepDisplay()}</div>
                <div className="footer">
                    {/* previous button
                    <button
                    disabled={step == 0}
                    onClick={() => {
                    setStep((currentStep) => currentStep - 1);}}   
                    >
                        Prev
                    </button> */}
                    <button
                      onClick={() => {
                      if (step === FormTitles.length - 1) {
                      alert("FORM SUBMITTED");
                      console.log(formData);
                      } else {
                      setStep((currentStep) => currentStep + 1);
                      }

                      }}
                    >
                    {step === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form