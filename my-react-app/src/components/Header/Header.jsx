import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faHotel } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import './Header.css'; // Ensure CSS file is correctly linked

export default function Header({type}) {
  const[openDate,setOpenDate] = useState(false)
  const [initialDateRange, setInitialDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

const handleOption = (name,operation)=>{
  setOptions(prev=>{
    return{
    ...prev,[name]:operation==="i"?options[name]+1:options[name]-1,
    }
  })
}
  return (
    <div className='header'>
      <div className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }> 
    <div className="headerList">
      <div className="headerListItem active">
      <FontAwesomeIcon icon={faHotel} />
      <span>Stays</span>
      </div>
      <div className="headerListItem active">
      <FontAwesomeIcon icon={faPlane} />
      <span>Flights</span>
      </div>
      <div className="headerListItem active">
      <FontAwesomeIcon icon={faCar} />
      <span>Car Rentals</span>
      </div>
      <div className="headerListItem active">
      <FontAwesomeIcon icon={faHotel} />
      <span>Attractions</span>
      </div>
      <div className="headerListItem active">
      <FontAwesomeIcon icon={faTaxi} />
      <span>Taxis</span>
      </div>
    </div>
    {type!=="list" && (
    <>
    <h1 className="headerTitle">One Stop For Cheap Travel</h1>
    <p className="headerDescription">MindBlowing Discounts And Cheap Rates</p>
    <button className="headerBtn"> Sign In / Register</button>
    <div className="headerSearch">
      <div className="headerSearchItem">
      <FontAwesomeIcon icon={faHotel} className='headerIcon'/>
      <input type="text"
             placeholder="Where Are You Going?"
             className='headerSearchInput'
      
      />
      </div>
      <div className="headerSearchItem">
      <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
      <span onClick ={()=>setOpenDate(!openDate)}className='headerSearchText'>{`${format(initialDateRange[0].startDate, "MM/dd/yyyy")} to
      ${format(
        initialDateRange[0].endDate,
        "MM/dd/yyyy"
      )}
      `}</span>
      {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setInitialDateRange([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={initialDateRange}
              key="dateRange"
              className='date'
            />}
     
      </div>
      <div className="headerSearchItem">
      <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
      <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
      
      { openOptions && <div className="options">
        <div className="optionItem">
          <span className="optionText">Adult</span>
          <div className="optionCounter">
          <button className="optionCounterButton" disabled={options.adult<=1} onClick={()=>handleOption("adult","d")}>-</button>
          <span className="optionCounterNumber">{options.adult}</span>
          <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
          </div>
        </div>
        <div className="optionItem">
          <span className="optionText">Children</span>
          <div className="optionCounter">
          <button className="optionCounterButton" disabled = {options.children<=0} onClick={()=>handleOption("children","d")}>-</button>
          <span className="optionCounterNumber">{options.children}</span>
          <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
          </div>
        </div>
        <div className="optionItem">
          <span className="optionText">Room</span>
          <div className="optionCounter">
          <button className="optionCounterButton" disabled = {options.room<=1}onClick={()=>handleOption("room","d")}>-</button>
          <span className="optionCounterNumber">{options.room}</span>
          <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
          </div>
        </div>
      </div>}
      </div>
      <div className="headerSearchItem">
        <button className="headerBtn">Search</button>
      
   
      </div>
    </div>
    </>
    )}
    </div>
    </div>
  )

}