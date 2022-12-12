import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSheduleThunk, postSheduleThunk } from "../scheduleSlice";

const Appoinment = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        dispatch(getSheduleThunk())
    }, []);
    useEffect(() => {
        dispatch(postSheduleThunk())
    }, [])

    const appointments = ({item}) => [
        {
          title: item.course,
          startDate: item.start_time,
          endDate: new Date(2018, 5, 25, 11, 30),
          id: item.id,
          location: item.weekday,
        },]

    const shedule = useSelector(state => state.sheduleSlice.shedule)
    return ( shedule.map(item => (
                    appointments( item = { item })
                )))
};

export default Appoinment;