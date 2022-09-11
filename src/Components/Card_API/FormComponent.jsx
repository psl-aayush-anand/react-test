import React, { useState } from "react";
import axios,  {Axios} from "axios";
import { Button } from "bootstrap";
const FormComponent = () => {

    const url = ""
    const [data, setData] = useState({
        project_name: "",
        experiment_name: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            project_name: data.project_name,
            experiment_name: data.experiment_name
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }


    return (
        <div>
            <form onSubmit={(e) => {
                submit(e)
            }}>
                <div>
                    <input onChange={(e) => handle(e)} id="project_name" value={data.project_name} placeholder="Project Name" type="text"></input>
                    <input type="submit" />
                </div>
                <div>
                    <input onChange={(e) => handle(e)} id="experiment_name" value={data.experiment_name} placeholder="Experiment Name" type="text"></input>
                    <input type="submit"></input>
                </div>
            </form>
        </div>
    );
}

export default FormComponent