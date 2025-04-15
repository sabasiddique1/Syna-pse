// app/patient/homepage/page.js

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PatientHomepage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/patient')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching patient data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Patient's Homepage</h1>
            {data ? (
                <div>
                    <p>Welcome back, {data.name}!</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
