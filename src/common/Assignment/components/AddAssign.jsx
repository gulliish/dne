import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './AssignModal';

function AddAssign() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className='AddAssign' >
      <Button className='addAssignBtn' variant="secondary" onClick={() => setModalShow(true)}>Добавить задание</Button>{' '}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default AddAssign;