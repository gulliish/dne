import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Paper } from '@mui/material';


export default function Cards({ item }) {


  return (
    <div >
      <Card sx={{ minWidth: 550 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={item.title}
          subheader={item.owner}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.body_text}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon title="like" />
          </IconButton> {item.likes}
          <IconButton aria-label="add to favorites">
            <i className="bi bi-trash3-fill icon" title="Delete"></i>
          </IconButton>
          <IconButton aria-label="add to favorites">
            <i className="bi bi-pencil-square icon" title="Edit"></i>
          </IconButton>
        </CardActions>
        <div>
          <a href='{item.thread}'>groups</a>
        </div>
      </Card>
    </div>
  );
}
