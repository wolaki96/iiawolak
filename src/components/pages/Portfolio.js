import React from 'react';


import Brews from '../../assets/Homepage.png'
import PassWord from '../../assets/password.PNG'
import Jate from '../../assets/jate1.PNG'
import Inventory from '../../assets/inventory.PNG'
import Schedule from '../../assets/schedule.png'
import Haunted from '../../assets/haunted.png'

// export default function Portfolio() {

//   const project = [
//       {
//           name: 'Novel Sips',
//           description: 'Provide a short description...',
//           link: "https://mmllively.github.io/Novel_Sips/",
//           repo: "https://github.com/mmllively/Novel_Sips/",
//           img: NovelSips
          
//       },
//         {
//             name: 'Brews On Your Block',
//             description: 'Provide a short description...',
//             link: "https://mmllively.github.io/Brews_and_Cruise/",
//             repo: "https://github.com/mmllively/Brews_and_Cruise",
//             img: Brews
//         },
//         {
//         name: 'PassWord',
//         description: 'Provide a short description...',
//         link: "https://wolaki96.github.io/password_generator/",
//         repo: "https://github.com/wolaki96/password_generator",
//         img: PassWord  
//         },
//         {
//             name: 'Jate',
//             description: 'Provide a short description...',
//             link: "https://mysterious-fjord-62323.herokuapp.com/",
//             repo: "https://github.com/wolaki96/Text_Editor",
//             img: Jate   
//             },
//             {
//                 name: 'Inventory',
//                 description: 'Provide a short description...',
//                 link: "https://github.com/wolaki96/Object_Relational_Mapping/",
//                 repo: "https://github.com/wolaki96/Object_Relational_Mapping",
//                 img: Inventory   
//                 }, 
//                 {
//                     name: 'Schedule',
//                     description: 'Provide a short description...',
//                     link: "https://wolaki96.github.io/Study_Scheduler/",
//                     repo: "https://github.com/wolaki96/Study_Scheduler",
//                     img: Schedule   
//                     },
//                     {
//                         name: 'Haunted Holidays',
//                         description: 'Provide a short description...',
//                         link: "https://boiling-ridge-27905.herokuapp.com/",
//                         repo: "https://github.com/KSoto18/Haunted-Holidays",
//                         img: Haunted  
//                         },
//     ];


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Link from '@mui/material/Link';



export default function TitlebarBelowImageList() {
  return (
    <ImageList className="projects">
      {itemData.map((item) => (
        <ImageListItem key={item.img}>  
                           
          <img 
          alt={item.title}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            
            loading="lazy"
            
           
          />
            <Link   href={item.link} target="_blank" rel="noreferrer"
       > 
          <ImageListItemBar
            title={item.title}
            subtitle={<span>Check Me Out!</span>}
            position="below"
          />
          </Link>
        </ImageListItem>
        
      ))}
    </ImageList>
  );
}
const itemData = [
  {
    img: Brews,
    title: 'Brews On Your Block',
    link: "https://mmllively.github.io/Brews_and_Cruise/"
    
  },
  {
    img: PassWord,
    title: 'Password Generator',
    link: "https://wolaki96.github.io/password_generator/"
    
  },
  {
    img: Jate,
    title: 'Just Another Text Editor',
    link: "https://mysterious-fjord-62323.herokuapp.com/"
    
  },
  {
    img: Inventory,
    title: 'Shopping Inventory',
    link: "https://github.com/wolaki96/Object_Relational_Mapping/"
    
  },
  {
    img: Schedule,
    title: 'Work Day Scheduler',
    link: "https://wolaki96.github.io/Study_Scheduler/"
    
  },
  {
    img: Haunted,
    title: 'Haunted Holidays',
    link: "https://boiling-ridge-27905.herokuapp.com/"
  
    
  }]


