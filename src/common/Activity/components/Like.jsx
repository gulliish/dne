import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React, { useState } from 'react';
import { useDispatch,  } from 'react-redux';
import { postMessageThunk } from '../ActivitySlice';



const Like = (item) => {
    const [likes, setLikes] = useState(100);
    const [isClicked, setIsClicked] = useState(false);

    const dispatch = useDispatch();
    

    const handleClick = () => {
        if (isClicked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsClicked(!isClicked);
    };
    const [value, setValue] = useState({
        likes: '',
    })
    const onClick = () => setValue(value.likes + 1)
    

    return (
        <div>
            <IconButton aria-label="add to favorites" className={`like-button ${isClicked && 'liked'}`}
              onClick={() => {
                handleClick();
                dispatch(postMessageThunk(value));
                onclick()
            }}>
                <FavoriteIcon title="like" className="likes-counter"></FavoriteIcon>
            </IconButton>{item.likes}
        </div>
    );
};

export default Like;