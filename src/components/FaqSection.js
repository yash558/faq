
import React, { useState } from 'react'

const Faq = ({ bgColor }) => {
   
    const [open, setOpened] = useState(false);
   
    const toggle = (i) => {
        if (open === i) {
            return setOpened(null);
        }

        setOpened(i);
    }

    const data = [
        { 
            id: 1,
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
        {
            id: 2,
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
        {
            id: 3,
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
        {
            id: 4,
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
        {
            id: 5,
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
    
    ]
    
    return (


        <div className="px-[40px] max-w-[800px]">
            <div className="py-16 mx-auto w-full px-4 max-w-4xl">
                <h3 className="mb-12 text-3xl text-center leading-0 font-extrabold tracking-light text-white sm:text-4xl sm:leading-10">Frequently Asked Question</h3>
                <hr className='border-0 border-gray-100' />
            
                {data.map((item, index) => {
                    return(
                    <Faq key={index}  open={index === open} title={data.question} desc={data.answer} toggle={() => toggle(index)}/>
                    )
                })}


            </div>
        </div>
    )
}

export default Faq