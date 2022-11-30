import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        axios
            .post("https://638703d5e399d2e473f21676.mockapi.io/crud-operations" , {
                name: name,
                email: email,
            })
            .then(() => {
                history("/read");
            });
        };


    return  (
    <>
    <div className="d-flex justify-content-between m-3">
        <h2>Insert</h2>
        <Link to = "/read">
        <button className="btn btn-primary">Show Array Data</button>
        </Link>
        </div>
        <form>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input 
            type="text" 
            className="form-control"
            onChange={(e) => setName(e.target.value)}
        />

        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input 
            type="email" 
            className="form-control" 
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>


        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Submit
        </button>
        </form>
  </>
  );
};

export default Create