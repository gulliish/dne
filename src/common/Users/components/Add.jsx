import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
// import FormExample from './AssignValidation';

function Add(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(2);
  const [value, setValue] = useState({
    key: '',
    name: '',
    lastname: '',
    email: ''
  })

  const handleAdd = () => {
    const newData = {
      key: count,
      name: ` ${count}`,
      age: '',
      address: ` ${count}`,
    };
    setValue([...value, newData]);
    setCount(count + 1);
  };
  return (
    <>
      <Button className='addAssignBtn' variant="secondary" onClick={() => handleShow()}>Добавить </Button>{' '}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
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
                        <div class="bg-secondary-soft px-4 py-5 rounded">
                          <div class="row g-3 bg-secondary-soft " >
                            <h4 class="mb-4 mt-0">Add Student</h4>
                            <div class="col-md-6">
                              <label class="form-label">First Name *</label>
                              <input type="text" class="form-control" placeholder="Enter name" aria-label="First name" onChange={(e) => setValue({ ...value, name: e.target.value })} />
                            </div>
                            <div class="col-md-6">
                              <label class="form-label">Last Name *</label>
                              <input type="text" class="form-control" placeholder="Enter last name" aria-label="Last name"  onChange={(e) => setValue({ ...value, lastname: e.target.value })} />
                            </div>
                            <div class="col-md-6">
                              <label for="inputEmail4" class="form-label">Email *</label>
                              <input type="email" onChange={(e) => setValue({ ...value, email: e.target.value })} class="form-control" id="inputEmail4" value="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gap-3 d-md-flex justify-content-md-end">
                    <button type="submit" class="btn addAssignBtn btn-secondary" onClick={{handleAdd}}>Add student</button>
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
export default Add