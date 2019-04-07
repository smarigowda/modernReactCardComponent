import React from 'react';

const ApprovalCard = ({ children }) => {
    console.log(children);
    return (
        <div className="approval-card">
            <h2>Warning !</h2>
            <h1 className="confirm">Are you sure ?</h1>
            {children}
            <div className="buttons-container">
                <button type="text" className="button approve">Approve</button>
                <button type="text" className="button reject">Reject</button>
            </div>
        </div>
    )
}

export default ApprovalCard;