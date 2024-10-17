import React, {useState , useEffect} from 'react';
import { Button, Form, form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Livres from './Livres';
import {v4 as uuid} from "uuid"
import {Link,useNavigate} from 'react-router-dom'

function Edit() {
    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');
    const[id, setId]= useState('');
    let history = useNavigate();

    var index = Livres.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) =>{
        e.preventDefault();
       let a = Livres[index];
       a.Titre = titre;
       a.Auteur = auteur;       
        history("/");
    }

    useEffect(() => {
        setTitre(localStorage.getItem('Titre'));
        setAuteur(localStorage.getItem('Auteur'));
        setId(localStorage.getItem('Id'));

    },[])
      

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
                <Form.Group className="mb-3" controlId="formTitre">
                    <Form.Control
                        type="text"
                        placeholder="Entrer le titre"
                       value={titre}
                        onChange={(e) => setTitre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuteur">
                    <Form.Control
                        type="text"
                        placeholder="Entrer l'auteur"
                        value={auteur}
                        onChange={(e) => setAuteur(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">
                    Éditer
                </Button>
            </Form>
        </div>
    );
}

export default Edit;
