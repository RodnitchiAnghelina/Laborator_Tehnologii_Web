import React, { useState, useEffect } from 'react';
import { useStore } from './MyStore';
import './index.css';

function MyComponent() {
    const store = useStore();

    const [localData, setLocalData] = useState<any>({ nume: '', prenume: '',facultatea:'', grupa: '' });
    const myData = store.myData;

    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(-1);

    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!localData.nume || !localData.prenume || !localData.facultatea || !localData.grupa) {
            alert('Introduceti toate campurile.');
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            store.addObject(localData);
            localStorage.setItem('myData', JSON.stringify(store.myData));
            setIsLoading(false);
        }, 2000);

    };


    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ nume: '', prenume: '',facultatea:'', grupa: '' });
        localStorage.setItem('myData', JSON.stringify(store.myData));
    };

    const handleUpdateObject = (index: number, newData: any) => {
        store.updateObject(index, newData);
        setIsLoading(true);
        setTimeout(() => {
            localStorage.setItem('myData', JSON.stringify(store.myData));
            setIsLoading(false);
        }, 2000);

        // setează valorile din obiectul myData în starea localData
        const dataToUpdate = store.myData[index];
        setLocalData({ nume: dataToUpdate.nume, prenume: dataToUpdate.prenume, facultatea: dataToUpdate.facultatea, grupa: dataToUpdate.grupa });
        setIsEditing(false);
        setEditingIndex(-1);
    };

    const handleEditObject = (index: number) => {
        const dataToUpdate = store.myData[index];
        setLocalData({ nume: dataToUpdate.nume, prenume: dataToUpdate.prenume, facultatea: dataToUpdate.facultatea, grupa: dataToUpdate.grupa });
        setIsEditing(true);
        setEditingIndex(index);
    };

    const handleSaveObject = () => {
        if (editingIndex >= 0) {
            handleUpdateObject(editingIndex, localData);
        }
    };

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('myData');
        if (data) {
            store.setMyData(JSON.parse(data));
        } else {
            localStorage.setItem('myData', JSON.stringify(store.myData));
        }
    }, [store]);

    useEffect(() => {
        if (!isLoading) {
            const data = localStorage.getItem('myData');
            if (data) {
                store.setMyData(JSON.parse(data));
            }
        }
    }, [isLoading, store]);

    return (

        <div className="container">
            <h1 className="title">Registru</h1>
    
              
            <form className="form" onSubmit={handleAddObject}>
                <input
                    className="input"  type="text" placeholder="Nume" defaultValue={localData.name} onChange={(e) => setLocalData({ ...localData, nume: e.target.value })}
                />
                <input
                    className="input" type="text" placeholder="Prenume" defaultValue={localData.address} onChange={(e) => setLocalData({ ...localData, prenume: e.target.value })}
                />
                <input
                    className="input" type="text" placeholder="Facultatea" defaultValue={localData.phone} onChange={(e) => setLocalData({ ...localData, facultatea: e.target.value })}
                />
                 <input
                    className="input"  type="text" placeholder="Grupa" defaultValue={localData.name} onChange={(e) => setLocalData({ ...localData, grupa: e.target.value })}
                />
                <button className="button" type="submit">{isLoading ? 'Se incarca...' : 'Adauga'}</button>

            </form>
            <table className="table">
                <thead>
                <tr>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Facultatea</th>
                    <th>Grupa</th>
                </tr>
                </thead>
                <tbody>
                {myData.map((item: any, index: number) => (
                    <tr key={index}>
                        <td>{item.nume}</td>
                        <td>{item.prenume}</td>
                        <td>{item.facultatea}</td>
                        <td>{item.grupa}</td>
                        <td>
                            <button className="button edit" onClick={() => handleEditObject(index)}>
                                Editeaza
                            </button>
                            <button className="button delete" onClick={() => handleDeleteObject(index)}>
                                Sterge
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {isEditing && (
                <div className="edit-form">
                    <h2>Editare</h2>
                    <form onSubmit={handleSaveObject}>
                        <input
                            className="input"
                            type="text"
                            placeholder="Nume"
                            value={localData.nume}
                            onChange={(e) => setLocalData({ ...localData, nume: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Prenume"
                            value={localData.prenume}
                            onChange={(e) => setLocalData({ ...localData, prenume: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Facultatea"
                            value={localData.facultatea}
                            onChange={(e) => setLocalData({ ...localData, facultatea: e.target.value })}
                        />
                        <input
                            className="input"
                            type="text"
                            placeholder="Grupa"
                            value={localData.grupa}
                            onChange={(e) => setLocalData({ ...localData, grupa: e.target.value })}
                        />
                        <div className="edit-form-buttons">
                            <button className="button save" type="submit">
                                Salveaza
                            </button>
                            <button className="button cancel" onClick={() => setIsEditing(false)}>
                                Anuleaza
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default MyComponent;