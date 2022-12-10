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
            extra={<p className='pLink' onClick={onClick}>{isVisible ? 'Less' : 'More'}</p>}
        >
            {
                isVisible
                    ?
                    <div>
                        {item.news_text}
                        <p className="ptext">{item.date_posted}</p>
                        <i class="bi bi-trash3-fill icon"></i>
                        <i class="bi bi-pencil-square icon"></i>
                    </div>
                    :
                    null
            }
            
        </Card>
    );
};

export default NewCard;