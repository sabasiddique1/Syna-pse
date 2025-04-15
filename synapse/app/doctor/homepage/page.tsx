import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DoctorHomepage() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('/api/doctor')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching doctor data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Doctor's Homepage</h1>
            {data ? (
                <div>
                    <p>Welcome back, Dr. {data.name}!</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
