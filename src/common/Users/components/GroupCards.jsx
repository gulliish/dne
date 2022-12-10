import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GroupCards({item}) {
  return (
    <>
      <Card className="text-center">
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted">{item.students}
      <Button variant="outline-warning" className=''><a className='Link' href='/students'>Overview</a> </Button>
      </Card.Footer>
    </Card>
    </>
   
  );
}

export default GroupCards;