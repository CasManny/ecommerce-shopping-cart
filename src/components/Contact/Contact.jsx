import React from 'react'
import './contactstyle.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Contact = () => {
    return (
        <div className="contact__container">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className='contact__info'>Email:</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        chukwusabastine2018@gmail.com
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className='contact__info'>Customer service</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        24hr order line: 09156264044
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    )
}

export default Contact
