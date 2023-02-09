import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkEmailUnreadRoundedIcon from '@mui/icons-material/MarkEmailUnreadRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SchoolIcon from '@mui/icons-material/School';


const Footer = () => {
  const [value, setValue] = React.useState(0);
  

  
  return (
    <div>

      <Box >

        <BottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#005792', opacity: "0.7" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >


         
          <BottomNavigationAction className="botnav" sx={{color:"#f96d00"}} href='https://api.badgr.io/public/assertions/LTzoRY-tTcCCD_ZRMuxqYA?identity__email=wolaki96%40gmail.com' label="School" icon={<SchoolIcon />} />
          <BottomNavigationAction className="botnav" sx={{color:"#f96d00"}} href='https://github.com/wolaki96' label="Github" icon={<GitHubIcon />} />
          <BottomNavigationAction className="botnav" sx={{color:"#f96d00"}} href='https://www.linkedin.com/in/iiawolak/' label="LinkedIn" icon={<LinkedInIcon />} />
          <BottomNavigationAction className="botnav" sx= {{ color: "#f96d00"}} href={`mailto:$this.props.iia.wolak@gmail.com}`}label="Email Me" icon={<MarkEmailUnreadRoundedIcon />} />
          <BottomNavigationAction className="botnav" sx={{ color: "#f96d00"}} onClick={() => window.location = 'tel:8505910565'} label="Call Me" icon={<PhoneInTalkIcon />} />


        </BottomNavigation>
       

      </Box>

      

    </div >
  );
}



export default Footer;

