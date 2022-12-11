import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';


const CoursCard = ({ item }) => {

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
    };

    
  const icon = (
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box>
        {item.materials}
      </Box>
    </Box>
);

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {item.duration}
            </Typography>
            <Typography variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {item.teacher}
            </Typography>
            <Typography variant="body2">
                {item.groups}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small"  checked={checked} onClick={handleChange}>Learn More</Button>
        </CardActions> 
        <Collapse in={checked} collapsedSize={0}>
            {icon}
          </Collapse>
            </Card>
        </Box>
    );
};

export default CoursCard;