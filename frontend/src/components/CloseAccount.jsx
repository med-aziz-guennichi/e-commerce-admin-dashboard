import React from 'react'
import { useState } from 'react'
import DeleteModel from './DeleteModel';

const CloseAccount = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <p className="accountCloseText">Are you sure you want to delete your account?</p>
            <button className='closeBtn' onClick={(e) =>setOpen(true)}>Close Account</button>
            {open && <DeleteModel setOpen={setOpen} />}
        </>
    )
}

export default CloseAccount