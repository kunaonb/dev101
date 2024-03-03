import React from "react";

function UpdateUser(){
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form >
                <h2>Add User</h2>
                <div className='mb-2'></div>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" className="form-control" />
                <div className='mb-2'></div>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" className="form-control" />
                <div className='mb-2'></div>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Age" className="form-control" />
                    <button className="btn btn-success mt-2">Submit</button>  
            </form>

        </div>
    </div>
    )
}

export default UpdateUser;