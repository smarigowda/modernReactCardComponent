import React from 'react';

const ApprovalCard = ({ children }) => {
    return (
        <div className="approval-card">
            {children}
            <div className="buttons-container">
                <button type="text" className="button approve">Approve</button>
                <button type="text" className="button reject">Reject</button>
            </div>
        </div>
    )
}

export default ApprovalCard;