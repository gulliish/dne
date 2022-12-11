import { IconButton } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import { postAvatarThunk } from './PhotoSlice';

function checking() {
    return alert('Check your email')
}

function ProfileModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const [value, setValue] = useState({
        detail: '',
    })

    const photo = useSelector(state => state.photoSlice.photo)


    return (
        <>
            <IconButton aria-label="add to favorites">
                <i className="bi bi-person-fill icon" onClick={() => handleShow()} title={'My profile'} style={{ fontSize: "2rem" }}></i>{' '}
            </IconButton>
            <Modal
                size="lg"
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClose}

            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className="file-upload">
                                <div className="row mb-5 gx-5">
                                    <div className="col-xxl-4">
                                        <div className="bg-secondary-soft px-4 py-5 rounded">
                                            <div className="row g-3">
                                                <div className="text-center">
                                                    <div className="square position-relative display-2 mb-3">
                                                        {/* {
                                                            photo.map(item => (
                                                                <img item={item.detail} />
                                                            ))
                                                        } */}
                                                        <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                                    </div>
                                                    <input type="file" id="customFile" name="file" hidden=""
                                                        onChange={(e) => setValue({ ...value, detail: e.target.value })}
                                                    />
                                                    <label className="btn btn-outline-warning btn-block" for="customFile">Upload</label>
                                                </div>
                                                <div className="bg-secondary-soft px-4 py-5 rounded">
                                                    <div className="row g-3 bg-secondary-soft " >
                                                        <h4 className="mb-4 mt-0">Contact detail</h4>
                                                        <div className="col-md-6">
                                                            <label className="form-label">First Name *</label>
                                                            <input type="text" className="form-control" placeholder="" aria-label="First name" value="Scaralet" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label">Last Name *</label>
                                                            <input type="text" className="form-control" placeholder="" aria-label="Last name" value="Doe" />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label for="inputEmail4" className="form-label">Email *</label>
                                                            <input type="email" className="form-control" id="inputEmail4" value="example@homerealty.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-8 mb-5 mb-xxl-0 text-center">
                                        <button type="button" className="btn addAssignBtn  btn-secondary" onClick={checking}>Change Password</button>
                                    </div>
                                    <div className="gap-3 d-md-flex justify-content-md-end">
                                        <button type="submit" className="btn addAssignBtn btn-secondary" onClick={() => {
                                            dispatch(postAvatarThunk(value));
                                        }}>Update profile</button>
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