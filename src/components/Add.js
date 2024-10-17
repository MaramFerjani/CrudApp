import React, {useState} from 'react';
import { Button, Form, form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Livres from './Livres';
import {v4 as uuid} from "uuid"
import {Link,useNavigate} from 'react-router-dom'


function Add(){
    const [titre, setTitre] = useState('');
    const [auteur, setAuteur] = useState('');

    let history = useNavigate();
    const handleSubmit =(e) =>{
        e.preventDefault();
        const ids= uuid();
        let uniqueId=ids.slice(0,8);
        let a = titre,
        b = auteur;
        Livres.push({id: uniqueId, Titre: a , Auteur:b});
        history("/");
    }

    return (
    <div>
<Form className='d-grid gap-2' style={{margin:"15rem"}}>
<Form.Group className='mb-3' controlId="formTitre">
<Form.Control type="text" placeholder="Entrer le titre" required onChange={(e) => setTitre(e.target.value)}></Form.Control>
</Form.Group>
<Form.Group className='mb-3' controlId="formAuteur">
<Form.Control type="text" placeholder="Entrer l'auteur " required onChange={(e) => setAuteur(e.target.value)}></Form.Control>
</Form.Group>
<Button onClick={(e) => handleSubmit(e)} type="submit">Créer</Button>
</Form>
    </div>
)
}
export default Add;