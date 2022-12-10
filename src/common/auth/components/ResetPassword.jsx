import React, { useState } from "react";


const ResetPassword = () => {
    const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  return (
          <div className="paddingauto bg-secondary-soft">
            <div class="row mb-5 gx-5 resetPassword">
                <div
                    class="col-xxl-6">
                    <div class=" px-4 py-5 rounded">
                        <div class="">
                            <h4 class="my-4">Change Password</h4>
                            <div class="">
                                <label for="exampleInputPassword2" class="form-label">New password *</label>
                                <input type="password" class="form-control" id="exampleInputPassword2" />
                            </div>
                            <div class="">
                                <label for="exampleInputPassword3" class="form-label">Confirm Password *</label>
                                <input type="password" class="form-control" id="exampleInputPassword3" />
                            </div>
                        </div>
                    </div>
                    <div class="px-4 ">
                                <button type="button" class="btn addAssignBtn btn-secondary"><a className="studentLink" href="/">Change Password</a></button>
                            </div>
                </div>
            </div>
        </div>
  );
};

export default ResetPassword;