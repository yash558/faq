import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons'
const Faq = ({question, answer}) => {
    const [expand, setExpand] = useState(false);
    const expandClass = expand ? 'display': 'hidden';
    const ansClass = `${expandClass} p-4`
    return (
        
        <div className="shadow rounded border border-gray-100 border-t-0 bg-white mt-5">
            <div className="p-4 text-xl relative font-medium">
                <div className="w-5/6">
                    {question}
                </div>
                <button aria-label='question-expanded' className='text-xl absolute top-0 right-0 p-4 focus:outline-none' onClick={() => setExpand(!expand)}>
                    {expand ? <FontAwesomeIcon icon={faChevronUp} className='w-5' /> : <FontAwesomeIcon icon={faChevronDown} /> }
                </button>
            </div>

            <div className={ansClass}>
                {answer}
            </div>
        </div>
    )
}

export default Faq