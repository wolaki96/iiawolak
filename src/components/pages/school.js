import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='school'>
      <Accordion  sx= {{color: '#005792'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary sx= {{color: '#005792'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: '#005792'}}>
            Education
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx= {{color: '#005792', fontWeight: 'bold'}}>
            University of Central Florida Coding Boot Camp <br>
            </br>2022<br>
            </br>
            <br>
            </br>
            University of Florida B.A. Linguistics<br>
            </br> GPA 3.6<br>
            </br>
            Minor: East Asian Languages - Mandarin<br>
            </br>
            TESL Certification <br>
            </br>
            2014-2018
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary sx= {{color: '#005792'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: '#005792' }}>Skills</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx= {{color: '#005792', fontWeight: 'bold'}}>
          JavaScript ES6+, CSS3, HTML5, NoSQL, GitHub, MongoDB, MySQL, Express, React,
Node, Handlebars, jQuery, Bootstrap
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary sx= {{color: '#005792'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: '#005792'}}>
            Experience
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx= {{color: '#005792', fontWeight: 'bold'}}>
            I am a new developer and always working on new things to polish up my skills. I have prior experience as a Lead Barista at a coffee shop local to Tallahassee, Florida.<br></br>
            I am currently working on learning <i>Python</i> and using <a href="www.freecodecamp.com">freecodecamp.com</a> to polish up on projects and skills.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary sx= {{color: '#005792'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, color: '#005792' }}>Personal Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx= {{color: '#005792', fontWeight: 'bold'}}>
            Please feel free to contact me by any of the methods linked down below! I will follow up with you shortly. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}