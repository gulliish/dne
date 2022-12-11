// import { Eventcalendar, Select, CalendarNav, CalendarPrev, CalendarNext, CalendarToday, momentTimezone } from '@mobiscroll/react';
// import moment from 'moment-timezone';

// // setup Mobiscroll Timezone plugin with Moment
// momentTimezone.moment = moment;

// function App() {
//     const [timezone, setTimezone] = React.useState('utc');
//     const myEvents = React.useMemo(() => {
//         return [{
//             start: '2022-12-08T07:00',
//             end: '2022-12-08T09:00',
//             title: 'Stakeholder mtg.',
//             color: '#408cff'
//         }, {
//             start: '2022-12-09T18:00',
//             end: '2022-12-09T19:30',
//             title: 'Wrapup mtg.',
//             color: '#ecbc72'
//         }, {
//             start: '2022-12-10T14:00',
//             end: '2022-12-10T18:00',
//             title: 'Business of Software Conference',
//             color: '#ff6d42'
//         }, {
//             start: '2022-12-11T20:00',
//             end: '2022-12-11T21:50',
//             title: 'Product Team mtg.',
//             color: '#913aa7'
//         }, {
//             start: '2022-12-12T13:00',
//             end: '2022-12-12T15:00',
//             title: 'Decision Making mtg.',
//             color: '#5bb7c5'
//         }, {
//             start: '2022-12-13T13:00',
//             end: '2022-12-13T14:00',
//             title: 'Quick mtg. with Martin',
//             color: '#fd002f'
//         }, {
//             start: '2022-12-14T12:00',
//             end: '2022-12-14T16:00',
//             color: '#50b166',
//             title: 'Team-Building'
//         }]
//     }, []);
    
//     const timezones = React.useMemo(() => {
//         return [{
//             text: 'America/Los Angeles',
//             value: 'America/Los_Angeles'
//         }, {
//             text: 'America/Chicago',
//             value: 'America/Chicago'
//         }, {
//             text: 'America/New York',
//             value: 'America/New_York'
//         }, {
//             text: 'UTC',
//             value: 'utc'
//         }, {
//             text: 'Europe/London',
//             value: 'Europe/London'
//         }, {
//             text: 'Europe/Berlin',
//             value: 'Europe/Berlin'
//         }, {
//             text: 'Europe/Bucharest',
//             value: 'Europe/Bucharest'
//         }, {
//             text: 'Asia/Shanghai',
//             value: 'Asia/Shanghai'
//         }, {
//             text: 'Asia/Tokyo',
//             value: 'Asia/Tokyo'
//         }]
//     }, []);
    
//     const view = React.useMemo(() => {
//         return {
//             schedule: { type: 'week' }
//         };
//     }, []);

//     const onChange = React.useCallback((ev) => {
//         setTimezone(ev.value);
//     }, []);
    
//     const myHeader = () => {
//         return <React.Fragment>
//             <CalendarNav className="md-timezone-nav" />
//             <div className="md-timezone-header">
//                 <CalendarPrev/>
//                 <CalendarToday />
//                 <CalendarNext />
//                 <Select data={timezones} inputStyle="box" touchUi={false} display="anchored" value={timezone} onChange={onChange} />
//             </div>
//         </React.Fragment>;
//     }

//     return (
//         <Eventcalendar
//             theme="ios" 
//             themeVariant="light"
//             dataTimezone="utc"
//             displayTimezone={timezone}
//             timezonePlugin={momentTimezone}
//             data={myEvents}
//             view={view}
//             dragToCreate={true}
//             dragToMove={true}
//             dragToResize={true}
//             renderHeader={myHeader}
//        />
//     ); 
// }
