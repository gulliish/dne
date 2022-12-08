import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GroupCards() {
  return (
    <>
      <Card className="text-center">
      <Card.Body>
        <Card.Title>FW_22</Card.Title>
        <img className='grouplogo' src='https://biconsult.ru/img/bi_portal/tb/33-2-1.png'/>
      </Card.Body>
      <Card.Footer className="text-muted">2 people
      <Button variant="outline-warning" className=''><a className='Link' href='/students'>Overview</a> </Button>
      </Card.Footer>
    </Card>
    </>
   
  );
}

export default GroupCards;