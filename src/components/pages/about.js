
            
        
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import image from '../../assets/iiaw.PNG';




export default function MediaCard() {
  return (
    <div className="about">
    <Card sx={{ maxWidth: 400, backgroundColor: "#00bbf0"}}>
      <CardMedia
        sx={{ height: 320}}
        component="img" src={image}
        title="iia"
      />
      {/* <CardContent>
        <Typography gutterBottom variant="h3" component="div" fontFamily={"timesNewRoman"}>
          Iia Wolak
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I am a Linguistics undergraduate looking to put my love for language learning into language app development. I graduated from the University of Florida in 2018 and have been learning languages and practicing my specialty coffee skills ever since. I have a minor in Mandarin and I am learning German and Japanese in my free time. I started taking a Full Stack Web Development boot camp in the summer of 2022. My ultimate goal is to combine language learning with web development and create a program to help others who love to learn languages like I do!.
        </Typography>
      </CardContent> */}
    
    </Card>
    <Card className="row" sx={{ backgroundColor: "#00bbf0", flexDirection:"row", width: 450,}}>
     <CardContent>
        <Typography gutterBottom variant="h3" component="div" fontFamily={"timesNewRoman"}>
          Iia Wolak
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Hello there! I'm Iia, (pronounced ee-ya), and I am a UCF Coding Bootcamp graduate looking forward to pursuing my passion in programming and web development!<br></br>
        I currently live in the Orlando, FL area after moving around the state for school and work. I am a seasoned Barista and cannot get by without coffee. After working for a local Tallahassee
        coffee shop for three years after college, I decided that I wanted to explore other fields. I took UCF's coding bootcamp and fell in love with programming. At the University of Florida,
        I majored in Linguistics and learned Mandarin Chinese. I initially signed up for this bootcamp because I thought language learning and programming go hand in hand! The rest is history, 
        and now I am interested in furthering my career and cannot wait to learn so much more. 
        </Typography>
      </CardContent>
    </Card>
    
    </div>
    
    
    

    
  );

}


 
 
