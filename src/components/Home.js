import React,{ useState } from 'react';
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
    if (!fs.existsSync("./data/customers/"))
        return (<div><h2>Vous n'avez aucun clients pour l'instant.</h2></div>);
    return (<div></div>);
}

function AddClient() {
    return (
        <form>
            <TextField id="standard-basic" label="Entreprise" />
            <TextField id="standard-basic" label="Siret" />
            <TextField id="standard-basic" label="rue" />
        </form>
    );
}

function Home({ navigate }) {
    const [addClient , setAddClient] = useState(0);
    return (
        <div className="homescreen xcenter">
            <h1>Clients <Icon onClick={() => { setAddClient(!addClient); }}>add_circle</Icon></h1>
            <hr/>
            {(addClient) ? <AddClient /> : ""}
            <ClientList />
            <h1>Devis</h1>
            <hr/>
            <DevisList />
        </div>
    );
}

export default Home;
