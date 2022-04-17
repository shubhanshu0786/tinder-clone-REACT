import React, { useState } from 'react'
import './TinderCards.css'
import kakashi from './images/kakashihatake.jpeg'
import TinderCard from 'react-tinder-card';
import { SwipeDown } from '@mui/icons-material';

function TinderCards() {
    const [people,setPeople] =useState([
{
    name : "KAKASHI HATAKE",
     url: "https://www.syfy.com/sites/syfy/files/styles/scale--1200/public/2019/08/kakashi-hatake-naruto.jpeg"
    
},
 {
     name : "OBITO",
     url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJt025gpciCzJogYhUuvstSbI-lFSr6OibpA&usqp=CAU"
    
 }
   ]);
//    const [people,setPeople] =useState([]);
//    useEffect(() => {
//        async function fetchData(){
//            const req=await axios.get('/tinder/cards');
//            setPeople(req.data);
//        }

//        fetchData();
//    } ,[]);


//    console.log(people);

const swiped=(direction,nameToDelete)=> {
    console.log("removing:" + nameToDelete);
};
const outOfFrame=(name) => {
    console.log(name+ "left the screen");
};

   return (
    <div className='tinderCards'>
    <div className='tinderCards__cardContainer'>
    
    {people.map((person) => (
        <TinderCard
        className='swipe'
        key={person.name}
        preventSwipe={["up","down"]}
        onSwipe={(dir) => swiped(dir,person.name)}
        onCardLeftScreen={() => outOfFrame(person.name)}
        >
        <div
       style={{backgoundImage: `url( ${person.url})` }}
        className="card"
        >

        <h3>{person.name}</h3>

        </div>
            
        </TinderCard>
    ))}

    </div>
    </div>
  )
}

export default TinderCards
