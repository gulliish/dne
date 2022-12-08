import Modal from 'react-bootstrap/Modal';
import ProfilePage from './Profile';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ProfilePage/>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;