import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

function checking(){
    return alert ('Check your email') 
}

function ProfileModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <>
         <i className="bi bi-person-fill icon" onClick={() => handleShow()} title={'My profile'} style={{ fontSize: "2rem" }}></i>{' '}
    <Modal
      size="lg"
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
       <div class="container">
            <div class="row">
                <div class="col-12">
                    <form class="file-upload">
                        <div class="row mb-5 gx-5">
                            <div class="col-xxl-4">
                                <div class="bg-secondary-soft px-4 py-5 rounded">
                                    <div class="row g-3">
                                        <div class="text-center">
                                            <div class="square position-relative display-2 mb-3">
                                                <i class="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                            </div>
                                            <input type="file" id="customFile" name="file" hidden="" />
                                            <label class="btn btn-outline-warning btn-block" for="customFile">Upload</label>
                                            <button type="button" class="btn btn-outline-danger">Remove</button>
                                        </div>
                                        <div class="bg-secondary-soft px-4 py-5 rounded">
                                            <div class="row g-3 bg-secondary-soft " >
                                                <h4 class="mb-4 mt-0">Contact detail</h4>
                                                <div class="col-md-6">
                                                    <label class="form-label">First Name *</label>
                                                    <input type="text" class="form-control" placeholder="" aria-label="First name" value="Scaralet" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label class="form-label">Last Name *</label>
                                                    <input type="text" class="form-control" placeholder="" aria-label="Last name" value="Doe" />
                                                </div>
                                                <div class="col-md-6">
                                                    <label for="inputEmail4" class="form-label">Email *</label>
                                                    <input type="email" class="form-control" id="inputEmail4" value="example@homerealty.com" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-8 mb-5 mb-xxl-0 text-center">
                                <button  type="button" class="btn addAssignBtn  btn-secondary" onClick={checking}>Change Password</button>
                            </div>
                            <div class="gap-3 d-md-flex justify-content-md-end">
                            <button type="submit" class="btn addAssignBtn btn-secondary">Update profile</button>
                        </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </Modal>
    </>
  );
}

export default ProfileModal;