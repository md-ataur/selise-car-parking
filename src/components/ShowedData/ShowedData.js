import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Table from '../Snippets/Table/Table';

const ShowedData = () => {
    const [vehicles, setVehicles] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();

    useEffect(() => {
        const oldData = JSON.parse(localStorage.getItem('vehicles') || '[]');
        if (oldData) {
            setVehicles(oldData);
        }

        if (oldData.length < 1) {
            setMessage('No data found');
        }
    }, []);

    let fields;
    if (vehicles) {
        fields = vehicles?.map((vehicle) => (
            <tr key={vehicle.id}>
                <td>{vehicle.owner_name}</td>
                <td>{vehicle.car_type}</td>
                <td>{vehicle.license_number}</td>
                <td>{vehicle.time_of_car_entry}</td>
                <td>{vehicle.time_of_car_exit}</td>
                <td>{vehicle.status}</td>

                <td>
                    <div className="action-btn">
                        <Link to={`/update/${vehicle.id}`} className="edit-icon">
                            <FiEdit />
                        </Link>
                        <button className="delete-icon">
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                </td>
            </tr>
        ));
    }

    const columns = [
        'Owner name',
        'Vehicle type',
        'License no',
        'Entry time',
        'Exit time',
        'Status',
        'Action'
    ];

    return (
        <div className="main-area">
            <div className="table-main-box">
                <div className="table-top-title">
                    {!message && (
                        <div>
                            <h2>Parking List</h2>
                        </div>
                    )}

                    {message && <h2>{message}</h2>}
                </div>
                <Table isLoading={isLoading} fields={fields} columns={columns} />
            </div>
        </div>
    );
};

export default ShowedData;
