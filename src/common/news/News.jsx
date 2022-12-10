import React, {  useEffect } from "react";
import { Card } from 'antd';
import AppLayout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getNewsThunk, postNewsThunk } from "./newsSlice";
import NewCard from "./components/NewCard";
import NewsModal from "./components/NewsModal";


function News() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        dispatch(getNewsThunk())
    }, []);
    useEffect(() => {
        dispatch(postNewsThunk())
    }, [])

const news = useSelector(state => state.newsSlice.news)

    return (
    <AppLayout>
        <NewsModal/>
        <Card title="News">
            {
                news.map(item => (
                    <NewCard item={item}/>
                ))
            }
        </Card>
        
    </AppLayout>
    );
};
export default News;