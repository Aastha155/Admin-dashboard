// src/pages/Calendar.js
import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Meeting',
    start: new Date(),
    end: new Date(moment().add(1, "hours").toDate())
  }
];

const Calendar = () => {
  return <BigCalendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />;
};

export default Calendar;
