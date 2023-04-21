import React from 'react'
import Faq from './Faq.js'

const FaqSection = ({ bgColor }) => {
    return (
        <div className={bgColor}>
            <div className="py-16 mx-auto w-full px-4 max-w-4xl">
                <h3 className="mb-12 text-3xl text-center leading-0 font-extrabold tracking-light text-white sm:text-4xl sm:leading-10">Frequently Asked Question</h3>
                <hr className='border-0 border-gray-100' />
                <Faq question="What is Livvy, and how does it work?
" answer="Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app."/>
                <Faq question="How do I make a purchase on Livvy?
" answer="To make a purchase on Livvy, simply find the product you want to buy, add it to your cart, and check out using your preferred payment method. Livvy offers a variety of payment options, including credit cards, debit cards, UPI, and online banking."/>
                <Faq question="Is it safe to make purchases on Livvy?" answer="Yes, Livvy takes the security and privacy of its users very seriously. All transactions on the app are securely processed through our payment partners, and your personal and payment information is kept confidential."/>
               
                <Faq question="What is Livvy, and how does it work?
" answer="Livvy is a LIVE social commerce platform that allows you to shop for products directly from your favourite creators and influencers live. You can browse a wide range of products, watch product demos and reviews, and make purchases within the app."/>
                <Faq question="How do I make a purchase on Livvy?
" answer="To make a purchase on Livvy, simply find the product you want to buy, add it to your cart, and check out using your preferred payment method. Livvy offers a variety of payment options, including credit cards, debit cards, UPI, and online banking."/>
                <Faq question="Is it safe to make purchases on Livvy?" answer="Yes, Livvy takes the security and privacy of its users very seriously. All transactions on the app are securely processed through our payment partners, and your personal and payment information is kept confidential."/>
               
                
            </div>
        </div>
    )
}

export default FaqSection