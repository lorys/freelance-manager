import React,{ useState } from 'react';
import '../App.css';

function Button(props) {
    return (<div {...props}>{props.children}</div>);
}

function Menu(props) {
    const { navigate } = props;

    return (
        <div className="menu">
            <h3>Documents</h3>
            <Button onClick={() => navigate("documentdevis")}>Devis</Button>
            <Button onClick={() => navigate("documentfacture")}>Factures</Button>
            <Button onClick={() => navigate("documentclients")}>Clients</Button>
            <h3>Statistiques</h3>
            <Button onClick={() => navigate("statsresume")}>Résumé</Button>
            <Button onClick={() => navigate("statsclients")}>Clients</Button>
            <Button onClick={() => navigate("statsrevenu")}>Revenu</Button>
            <Button onClick={() => navigate("statsdevis")}>Devis</Button>
            <h3>Revenus</h3>
            <Button onClick={() => navigate("revenusresume")}>Résumé</Button>
            <Button onClick={() => navigate("revenusclients")}>Clients</Button>
            <Button onClick={() => navigate("revenusrevenu")}>Revenu</Button>
        </div>
    );
}

export default Menu;
