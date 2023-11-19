// ProctorComponent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarFullTime from '../layout/NavbarFullTime';

const Proctor = () => {
    const [proctors, setProctors] = useState([]);
    const [newProctorName, setNewProctorName] = useState('');

    useEffect(() => {
        // Fetch proctors from the backend on component mount
        axios.get('http://localhost:8080/api/proctors')
            .then(response => setProctors(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleCreateProctor = () => {
        // Create a new proctor
        axios.post('http://localhost:8080/api/proctors', { name: newProctorName })
            .then(response => {
                setProctors([...proctors, response.data]);
                setNewProctorName('');
            })
            .catch(error => console.error(error));
    };

    return (
        <>
       
        <NavbarFullTime/>
        <div style={{margin:'200px'}}>
            <h1>Proctor List</h1>
            <ul>
                {proctors.map(proctor => (
                    <li key={proctor.id}>{proctor.name}</li>
                ))}
            </ul>

            <div>
                <h2>Create New Proctor</h2>
                <input
                    type="text"
                    placeholder="Proctor Name"
                    value={newProctorName}
                    onChange={e => setNewProctorName(e.target.value)}
                />
                <button onClick={handleCreateProctor}>Create</button>
            </div>
            </div>
        </>
    );
};

export default Proctor;
