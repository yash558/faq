import React from 'react'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Collapse } from "react-collapse";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Faq = ({ open, toggle, title, desc }) => {
    return (
        <div className='d-flex items-center'>
            <div className="shadow rounded border border-gray-100 border-t-0 bg-white mt-5">
                <div className="p-4 text-xl relative font-medium">
                    <div className="w-5/6" onClick={toggle}>
                        {title}
                    </div>
                    <button aria-label='question-expanded' className='text-xl absolute top-0 right-0 p-4 focus:outline-none' onClick={toggle}>
                        {open ? <FontAwesomeIcon icon={faChevronUp} className='w-5' /> : <FontAwesomeIcon icon={faChevronDown} />}
                    </button>
                </div>

                <Collapse isOpened={open}>
                    {desc}
                </Collapse>
            </div>
        </div>
    )
}

export default Faq