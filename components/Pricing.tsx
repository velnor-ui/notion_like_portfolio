"use client"

import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { motion } from 'motion/react'

const PRICE = [
    {
        title: "Starter",
        price: 0,
        description: "Perfect for small businesses or those just getting started with predictive analytics. The Starter Plan provides essential tools to help you make data-driven marketing decisions.",
        features: [
            "Campaign Insights",
            "Single User Access",
            "Basic AI Recommendations",
            "Email Support",
            "Audience Segmentation",
            "Weekly Data Updates",
            "Standard Dashboard",
            "Essential Integrations"
        ]
    },
    {
        title: "Growth - Popular",
        isPopular: true,
        price: 100,
        description: "Designed for growing teams, the Growth Plan offers advanced analytics and more robust predictive insights to help drive engagement and optimize campaigns effectively.",
        features: [
            "Advanced Campaign Insights",
            "Up to 5 Users",
            "Enhanced AI Recommendations",
            "Priority Email & Chat",
            "Advanced Segmentation",
            "Daily Data Updates",
            "Customizable Dashboard",
            "Enhanced Integrations"
        ]
    },
    {
        title: "Enterprise",
        price: 200,
        description: "For large organizations, the Enterprise Plan delivers full-scale predictive analytics, custom AI models, and dedicated support to drive data-driven marketing strategies at scale.",
        features: [
            "Comprehensive Analytics",
            "Unlimited Users",
            "Custom AI Models",
            "Dedicated Account Manager",
            "In-Depth Segmentation",
            "Real-Time Updates",
            "Advanced Reporting & Export",
            "API & Enterprise Integrations"
        ]
    }
]
const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)
    return (
        <div className="py-20 max-w-7xl mx-auto">
            <div className="flex mb-20 justify-center  items-center">
                <div className="relative w-48 h-8 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute top-0 h-full w-1/2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full"
                        animate={{ x: isYearly ? '100%' : '0%' }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                    <div className="flex w-full h-full bg-black/5 dark:bg-white/5 rounded-full relative z-10">
                        <button
                            className={`flex-1 ${!isYearly ? 'text-white' : 'text-muted-foreground'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`flex-1 ${isYearly ? 'text-white' : 'text-muted-foreground'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 my-8">
                {PRICE.map((price) => (
                    <div key={price.title} className="bg-gradient-to-b from-black/5 dark:from-white/5 via-white dark:via-black dark:to-black rounded-3xl p-3 border-[0.5px]">
                        <div className="">
                            <div className="relative border-b p-6 bg-white dark:bg-black rounded-t-xl">
                                {isYearly &&
                                    <motion.div className="bg-gradient-to-br from-purple-600 to-blue-600 bg-clip-text text-transparent absolute top-6 right-4"
                                        initial={{ opacity: 0, translateY: -20 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                    >
                                        -20%
                                    </motion.div>
                                }
                                <h2 className="uppercase bg-gradient-to-br font-light from-purple-600 to-blue-600 bg-clip-text text-transparent">{price.title}</h2>
                                <motion.p
                                    className="text-lg font-medium my-3"
                                    initial={{ opacity: 0, translateY: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, translateY: 0, scale: 1 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                >
                                    <motion.span
                                        key={isYearly ? 'yearly' : 'monthly'}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    >
                                        ${isYearly ? price.price * 12 * 0.8 : price.price}
                                    </motion.span>
                                    <motion.span
                                        className="text-muted-foreground text-xs font-inter font-light"
                                        initial={{ opacity: 0, translateY: -10 }}
                                        animate={{ opacity: 1, translateY: 0 }}
                                        transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.1 }}
                                    >
                                        {isYearly ? '/month - pay yearly' : '/month - pay monthly'}
                                    </motion.span>
                                </motion.p>
                                <p className="text-muted-foreground text-xs font-light">{price.description}</p>
                                <button className={price.isPopular ? "bg-gradient-to-br from-purple-600 to-blue-600 text-white py-3 px-4 rounded-full mt-6 w-full text-sm" : "bg-black dark:bg-white dark:text-black text-white py-3 px-4 rounded-full mt-4 w-full text-sm"}>Get this Plan</button>
                            </div>
                            <div className="p-6 bg-white dark:bg-black">
                                <ul className="space-y-3 mt-4">
                                    {price.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-muted-foreground font-light text-xs">
                                            <Check className="w-5 h-5 mr-2" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing