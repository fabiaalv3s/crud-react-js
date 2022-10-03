import React from "react";
import "./aircraft.css";
import FormDialog from "../dialog/dialog";

export default function Aircraft(props) {
    const [open,setOpen] = React.useState(false);

    const handleClickAircraft = () => {
        setOpen(true);
    }

    return (
        <>
            <FormDialog 
                open = {open} 
                setOpen = {setOpen} 
                name = {props.name}
                listAircraft = {props.listAircraft}
                setListAircraft = {props.setListAircraft}
                id = {props.id}
            />
            <div className="aircraft--container" onClick={() => handleClickAircraft()}>
                <h1 className="aircraft--title">{props.name}</h1>
            </div>
        </>
    );
}