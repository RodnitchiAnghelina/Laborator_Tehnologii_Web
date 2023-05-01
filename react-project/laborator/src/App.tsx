import React, { useState } from 'react';
import { useStore } from './MyStore';
import './index.css';

function MyComponent() {
    const store = useStore();

    // local state
    const [localData, setLocalData] = useState<any>({ nume: '', prenume: '',facultatea:'', grupa: '' });

    // folosim datele din MobX store
    const myData = store.myData;

    // refresh la date
    // adaugam un obiect nou  la MobX store
    const handleAddObject = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        
        store.addObject(localData);
        setLocalData({ nume: '', prenume: '', facultatea:'',grupa: '' });
    };


// stergem obiectul din MobX store si  facem update la  local state
    const handleDeleteObject = (index: number) => {
        store.deleteObject(index);
        setLocalData({ nume: "", prenume: "",facultatea:"", grupa: "" });
    };


    return (

        <div className="container">
            <h1 className="title">Registru</h1>
            <form className="form" onSubmit={handleAddObject}>
                <input className="input" type="text" placeholder="Nume" value={localData.nume} onChange={e => setLocalData({ ...localData, nume: e.target.value })} />
                <input className="input" type="text" placeholder="Prenume" value={localData.prenume} onChange={e => setLocalData({ ...localData, prenume: e.target.value })} />
                <input className="input" type="text" placeholder="Facultatea" value={localData.facultatea} onChange={e => setLocalData({ ...localData, facultatea: e.target.value })} />
                <input className="input" type="text" placeholder="Grupa" value={localData.grupa} onChange={e => setLocalData({ ...localData, grupa: e.target.value })} />
                <button className="button" type="submit">Trimite</button>
            </form>
            <div>
                <div className="grid">
                    {myData.map((data: any, index: number) => (
                        <div key={index} className="object">
                            <p>Nume: {data.nume}</p>
                            <p>Prenume: {data.prenume}</p>
                            <p>Facultatea: {data.facultatea}</p>
                            <p>Grupa: {data.grupa}</p>
                            <button onClick={() => handleDeleteObject(index)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyComponent;