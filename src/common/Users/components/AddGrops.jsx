import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postGruopThunk } from '../GroupSlice';
// import FormExample from './AssignValidation';

function AddGroups(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [value, setValue] = useState({
    name: '',
    students: '',
  })

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
                            <h4 class="mb-4 mt-0">Add group</h4>
                            <div class="col-md-12">
                              <label class="form-label">Name *</label>
                              <input type="text" class="form-control" placeholder="Enter name of group" aria-label="First name" onChange={(e) => setValue({ ...value, name: e.target.value })} />
                            </div>
                            <div class="col-md-12 ">
                              <label class="form-label">Students *</label>
                              <input type="text" class="form-control" placeholder="Enter last students" aria-label="Last name" onChange={(e) => setValue({ ...value, students: e.target.value })} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="gap-3 d-md-flex justify-content-md-end">
                    <button type="submit" class="btn addAssignBtn btn-secondary" onClick={() => {
                      handleClose();
                      dispatch(postGruopThunk(value));
                      console.log(test)
                    }}>Add student</button>
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
export default AddGroups;