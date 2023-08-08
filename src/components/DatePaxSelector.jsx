import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/DateAndPaxSelector.css';

const DateAndPaxSelector = () => {
    const [selectedRoomType, setSelectedRoomType] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [adultCount, setAdultCount] = useState(1); // Default to 1 adult
    const [childCount, setChildCount] = useState(0); // Default to 0 children

    const handleRoomTypeChange = (event) => {
        setSelectedRoomType(event.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleAdultChange = (event) => {
        setAdultCount(parseInt(event.target.value));
    };

    const handleChildChange = (event) => {
        setChildCount(parseInt(event.target.value));
    };

    return (
        <div className="date-pax-selector container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex align-items-center">
                    <label style={{ color: "black" }}>Room Type</label>
                    <select className='room-type form-select' value={selectedRoomType} onChange={handleRoomTypeChange}>
                        <option value=""></option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                    </select>
                    <label style={{ color: "black", marginLeft: "10px" }}>Select Date:</label>
                    <DatePicker selected={selectedDate} onChange={handleDateChange} className="form-control" />
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <label style={{ color: "black" }}>Adult:</label>
                    <input
                        type="number"
                        value={adultCount}
                        onChange={handleAdultChange}
                        min="1"
                        max="10"
                    />
                    <label style={{ color: "black", marginLeft: "7px" }}>Child:</label>
                    <input
                        type="number"
                        value={childCount}
                        onChange={handleChildChange}
                        min="0"
                        max="10"
                    />
                    <button className='btn btn-secondary ms-4 w-25'>Go</button>
                </div>
            </div>
        </div>
    );
};

export default DateAndPaxSelector;
