import React, {  useEffect } from "react";
import { Card } from 'antd';
import AppLayout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getNewsThunk, postNewsThunk } from "./newsSlice";
import NewCard from "./components/NewCard";
import NewsModal from "./components/NewsModal";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';


export default function News() {
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
        <div role="presentation" className='presentation'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Главная
        </Link>
      </Breadcrumbs>
    </div>
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