
import React, { useState } from 'react'
import Faq from './Faq';
const FaqSection = () => {

    const [open, setOpened] = useState(false);

    const toggle = (index) => {
        if (open === index) {
            return setOpened(null);
        }

        setOpened(index);
    }

    const data = [
        {
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
        {
            question: " How do I make a purchase on Livvy?            ",
            answer: "To make a purchase on Livvy, simply find the product you want to buy, add it to your cart, and check out using your preferred payment method. Livvy offers a variety of payment options, including credit cards, debit cards, UPI, and online banking           .",
        },
        {
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
        {
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },
        {
            question: "What is Livvy, and how does it work?",
            answer: "Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app.",
        },

    ]

    return (


        <div className="">
            <div className="py-16 mx-auto w-full px-4 max-w-4xl">
                <h3 className="mb-12 text-3xl text-center leading-0 font-extrabold tracking-light text-green-400 sm:text-4xl sm:leading-10">Frequently Asked Question</h3>
                <hr className='border-0 border-gray-100' />

                {data.map((item, index) => {
                    return <Faq key={index} open={index === open} title={item.question} desc={item.answer} toggle={() => toggle(index)} />

                })}


            </div>
        </div>
    )
}

export default FaqSection