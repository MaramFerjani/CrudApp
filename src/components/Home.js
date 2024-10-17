import React, { Fragment } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Livres from './Livres';
import {Link,useNavigate} from 'react-router-dom'

function Home(){
    let history = useNavigate();

    const  handleEdit=(id, titre, auteur) => {
localStorage.setItem('Titre',titre);
localStorage.setItem('Auteur',auteur);
localStorage.setItem('Id',id);
    }
    const handleDelete = (id) => {
        var index = Livres.map(function(e){
            return e.id
        }).indexOf(id);
        Livres.splice(index,1);
       history('/');

    }

    return (

        <Fragment>
            <div style={{margin:"10rem"}}>
            <h1>Application de gestion de livres éléctroniques </h1> <br></br>

                 <Table striped bordered hover size="sm" >
                    <thead>
                        <tr>
                          <th>Titre</th>
                          <th>Auteur</th>
                          <th>Editer</th>
                          <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Livres && Livres.length > 0
                            ?
                            Livres.map((item) =>{
                                return(
                                    <tr>
                                        <td>{item.Titre}</td>
                                        <td>{item.Auteur}</td>
                                        <td><Link to={`/edit`}><button onClick={() => handleEdit(item.id, item.Titre, item.Auteur)}>Editer</button></Link></td>
                                        <td><button onClick={() => handleDelete(item.id)}>Supprimer</button></td>
                                    </tr>
                                )
                            })
                            :
                            "Aucune donnée trouvée"
                        }
                    </tbody>
                 </Table>
                 <br>
                 </br>
                 <Link className='d-grid gap-2' to="/create">
                 <Button size="lg">Ajouter un livre</Button>
                 </Link>

            </div>
        </Fragment>
    )
}


export default Home;