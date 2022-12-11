import React from 'react';

function checking() {
    return (
        alert("Please check your email!")
    );
}
export default function ProfilePage() {




    return (
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
                                                <i className="fas fa-fw fa-user position-absolute top-50 start-50 translate-middle text-secondary"></i>
                                            </div>
                                            <input type="file" id="customFile" name="file" hidden="" />
                                            <label className="btn btn-outline-warning btn-block" for="customFile">Upload</label>
                                            <button type="button" className="btn btn-outline-danger">Remove</button>
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
                                <button type="submit" className="btn addAssignBtn btn-secondary">Update profile</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}