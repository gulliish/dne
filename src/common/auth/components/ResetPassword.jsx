import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAuthThunk } from "../LoginSlice";



const ResetPassword = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        old_password: '',
        new_password: '',
        new_password2: '',
    })
    return (
        <div className="paddingauto bg-secondary-soft" style={{ height: '100vh' }}>
            <div className="row mb-4 gx-4 resetPassword">
                <div
                    className="col-xl-6">
                    <div className=" px-4 py-4 rounded">
                        <div className="px-4">
                            <h4 className="my-4">Change Password</h4>
                            <div className="mb-4 ">
                                <label for="exampleInputPassword1" className="form-label required">Old password <p className="redtext">*</p></label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    onChange={(e) => setValue({ ...value, old_password: e.target.value })}
                                />
                            </div>
                            <div className="mb-4 ">
                                <label for="exampleInputPassword2" className="form-label required">New password <p className="redtext">*</p></label>
                                <input type="password" className="form-control" id="exampleInputPassword2"
                                    onChange={(e) => setValue({ ...value, new_password: e.target.value })}
                                />
                            </div>
                            <div className="">
                                <label for="exampleInputPassword3" className="form-label required">Confirm Password <p className="redtext">*</p></label>
                                <input type="password" className="form-control" id="exampleInputPassword3"
                                    onChange={(e) => setValue({ ...value, new_password2: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="px-4 ">
                        <button type="button" className="btn addAssignBtn btn-secondary"
                            onClick={() => {
                                dispatch(postAuthThunk(value));
                                console.log(value);
                            }}><a className="studentLink" href="/">Change Password</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;