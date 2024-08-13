import React, { useState } from 'react';
import "./Example.css"
import design1 from "../../assets/images/designs/design-1.PNG";
import design2 from "../../assets/images/designs/design-2.PNG";
import design3 from "../../assets/images/designs/design-3.PNG";
import design4 from "../../assets/images/designs/design-4.PNG";


const data = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

const data2 = [
    {
      src: design1,
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
    },
    {
      src: design2,
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
    },
    {
      src: design3,
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
    },
  ];
function Example() {

 

  return (
    // <img src="https://picsum.photos/id/123/1200/400" alt="image" className='slide'/>
   <div className="carousel">
    {/* <img src={ava04} alt="image" className='slides'/>
    <img src={ava04} alt="image" className='slides'/> */}
    {data2.map((item,index)=>{
        return(
            <img src={item.src} alt={item.altText} key={index} className='slide'/>
        )
    })

    }
   </div> 
  );
}

export default Example;