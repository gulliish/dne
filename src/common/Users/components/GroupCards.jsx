import { IconButton } from '@mui/material';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GroupCards({ item }) {
  return (
    <>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">{item.students}
          <Button variant="outline-warning" className=''><a className='Link' href='/students'>Overview</a> </Button>
        </Card.Footer>
        <IconButton aria-label="add to favorites">
          <i className="bi bi-trash3-fill icon" title="Delete"></i>
        </IconButton>
        <IconButton aria-label="add to favorites">
          <i className="bi bi-pencil-square icon" title="Edit"></i>
        </IconButton>
      </Card>
    </>

  );
}

export default GroupCards;