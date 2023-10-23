import React from 'react';

export default function Calender() {
    return (
        <div className="calender-container">
            <h1 style={{color: '#d6481e'}}>Calendario</h1>
            <hr />
            <br />
            <div className="calender-google">
                <div className="calendar-responsive-container">
            <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23d6481e&ctz=America%2FLos_Angeles&hl=es&showPrint=0&src=Z3J1cG90ZW1wZXN0YWRvZmljaWFsQGdtYWlsLmNvbQ&color=%23039BE5" 
            width= "100%" 
            height="600" 
            frameborder="0" 
            title="Calendar">
            </iframe>
            </div>  
            </div>
        </div>
    )
}