import { IconButton } from '@mui/material';
import { Card } from 'antd';
import React, { useState } from 'react';

const NewCard = ({ item }) => {
    const [isVisible, setVisible] = useState(true);
    const onClick = () => setVisible(!isVisible);
    return (
        <Card
            style={{
                marginTop: 16,
            }}
            type="inner"
            title={item.name}
            extra={<IconButton className='font15'><p className='pLink' onClick={onClick}>{isVisible ? 'Less' : 'More'}</p></IconButton>}
        >
            {
                isVisible
                    ?
                    <div>
                        {item.news_text}
                        <p className="ptext">{item.date_posted}</p>
                        <IconButton aria-label="add to favorites">
                            <i className="bi bi-trash3-fill icon" title="Delete"></i>
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <i className="bi bi-pencil-square icon" title="Edit"></i>
                        </IconButton> </div>
                    :
                    null
            }

        </Card>
    );
};

export default NewCard;