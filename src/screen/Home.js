import React,{ useEffect, useState } from 'react';
import { Icon, TextField } from '@material-ui/core';
import '../App.css';

const { ipcRenderer, remote } = window.require('electron');
const fs = remote.require("fs");

function DevisList() {
    if (!fs.existsSync("./data/devis/"))
        return (<div><h2>Vous n'avez aucun devis pour l'instant.</h2></div>);
    return (<div></div>);
}

function ClientList() {
    const [ clientsExists, setClientsExists ] = useState(0);
    const [ clientsList, setClientsList ] = useState(0);

    useEffect(() => {
        fs.readdir("./data/customers/", (err, files) => {
            if (files.length) {
                setClientsExists(1);
                setClientsList(files);
                // console.log(files);
            }
        });
        return (() => {  });
    });

    if (!fs.existsSync("./data/customers/") || !clientsExists)
        return (<div><h2>Vous n'avez aucun clients pour l'instant.</h2></div>);
    return (<div></div>);
}

function AddClient({ closeModal }) {
    return (
        <React.Fragment>
            <div className="background-modal" onClick={closeModal}></div>
            <div className="modal">
                <h3>Ajouter un client</h3>
                <input type="text" placeholder="Entreprise" id="companyName"/>
                <input type="text" placeholder="Adresse Postale" id="postalAdress"/>
                <input type="mail" placeholder="Adresse Mail" id="MailAdress"/>
                <input type="number" placeholder="Téléphone" id="phoneNumber"/>
                <button onClick={() => {
                    if (!fs.existsSync("./data/customers/"))
                        fs.mkdirSync("./data/customers/");
                    const companyName = document.getElementById('companyName').value;
                    const postalAdress = document.getElementById('postalAdress').value;
                    const mailAdress = document.getElementById('MailAdress').value;
                    const phoneNumber = document.getElementById('phoneNumber').value;
                    fs.writeFile('./data/customers/'+companyName+".json", JSON.stringify({companyName, postalAdress, mailAdress, phoneNumber}), function (err) {
                        if (err) throw err;
                    });
                }}>Enregistrer</button>
            </div>
        </React.Fragment>
    );
}

function Home({ navigate }) {
    const [addClient , setAddClient] = useState(0);

    if (!fs.existsSync("./data/"))
        fs.mkdirSync("./data");

    return (
        <React.Fragment>
        {(addClient) ? <AddClient closeModal={() => { setAddClient(false); }}/> : ""}
        <div className="homescreen xcenter">
            <h1>Clients <Icon onClick={() => { setAddClient(!addClient); }}>add_circle</Icon></h1>
            <hr/>
            <ClientList />
            <h1>Devis <Icon onClick={() => { navigate("devis"); }}>create</Icon></h1>
            <hr/>
            <DevisList />
        </div>
        </React.Fragment>
    );
}

export default Home;
