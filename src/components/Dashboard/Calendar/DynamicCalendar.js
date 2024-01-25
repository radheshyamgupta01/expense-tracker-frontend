import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
const localizer = momentLocalizer(moment);

const DynamicCalendar = () => {

  const fullCalendarEvents = [
    // ... FullCalendar events
  ];

  
  const bigCalendarEvents = [
    // ... BigCalendar events
  ];

  return (
    <div>
      <h2>FullCalendar</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek',
        }}
        events={fullCalendarEvents}
      />

    
    </div>
  );
};

export default DynamicCalendar
