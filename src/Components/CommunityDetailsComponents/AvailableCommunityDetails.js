import React from 'react';
import './CommunityDetails.css'
import BasicTabs from './Tab.js';
import '../CommunityDetailsComponents/Tab.css';
import Card from '@mui/material/Card';
import json from "../../JustsmartCustomHomes.json"
export default function AvailableCommunityDetails(props) {
   
   const availablehouseurl = json.JustSmartCustomHomes.map((data, i) => data.availablehouses.map((data2, i) => data2.houseType))
   console.log("availablehouseurl",availablehouseurl)
   const maximumlengthofavailablehouseurl = availablehouseurl.map(a=>a.length).indexOf(Math.max(...availablehouseurl.map(a=>a.length)));
   console.log("maximumlengthofavailablehouseurl",maximumlengthofavailablehouseurl)
   const availablehouseurlss=availablehouseurl[maximumlengthofavailablehouseurl]
   console.log(availablehouseurlss)        

   return (
      <>
      <div className="wholedivision">
         <p className="communityname">Community name : {props.availableurl[0].name}</p>
         <div className='communitydescription'>{props.availableurl[0].mainDescr}</div>
         
         <div className="housescontainer">
            {props.availableurl[0].availablehouses.map((record1, i) =>{
                  return(
                  record1.image &&
               <div className='houses'key={i}>
                  <p className="housesname">{record1.name}</p>
                  <img className="housesimg" src={record1.image} alt="houseimg" onClick={()=>{window.open(availablehouseurlss[i],"_self")}}  />
                  <div className="descriptiontable">
                     <table>
                        <tbody>
                              {record1.descriptions.map((datas,i) =>
                                 <div className="tablebody" key={i}>
                                    <tr className="firstrow">
                                          <td >{datas.descriptitle1}:</td>
                                          <td >{datas.descripcontent1}</td>
                                    </tr>
                                    <tr className="secondrow">
                                          <td >{datas.descriptitle2}:</td>
                                          <td>{datas.descripcontent2}</td>
                                    </tr>
                                    <tr className="thirdrow">
                                          <td>{datas.descriptitle3}:</td>
                                          <td>{datas.descripcontent3}</td>
                                    </tr>
                                 </div>
                              )}
                        </tbody>
                     </table>
                  </div>
               </div>)})}
         </div>
         

         <Card className="backgroundcolor"></Card>

         <li className="mainhousename">{props.availableurl[0].name}</li>
         <img className="mainhouseimg" src={props.availableurl[0].availablehouses[0].image} alt="mainhouseimg" />
         <div className="communitypagebooking">For Details:<br />
         <span>
               <table>
                  <tbody>
                     {props.availableurl[0].booking.map((book, i) =>
                        <tr key={i}>
                           <td style={{paddingRight:"10px"}} >{book.name}</td>
                           <td>{book.number}</td>
                        </tr>
                     )}
                  </tbody>
               </table>
         </span>
         </div>
         


         <div className="features" id="features">
            Features:
            <div className="points">{props.availableurl[0].extraFeatures}</div>
         </div>
         {props.availableurl[0].nearby.map((near, i) =>
            <div className="nearby" id="nearbyplaces" key={i}>Near by:
               <ul>
                  <li>{near.place1}<br /></li>
                  <li>{near.place2}<br /></li>
                  <li>{near.place3}<br /></li>
                  <li>{near.place4}<br /></li>
               </ul>
            </div>)}
         <BasicTabs tabs={props.availableurl[0].tabs} />
         <div className="overview" >
            <p>Community Plan</p>
            <img src={props.availableurl[0].communityPlan} alt="communityplan"/>
         </div>
         <div className="location" id="location">
            <p>Location</p>
            <img src={props.availableurl[0].location} alt="location"/>
         </div>
         </div>
    </>
   );

}
