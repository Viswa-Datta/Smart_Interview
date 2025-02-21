import Container from "@/components/container"
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
    return (
        <div className="flex-col w-full pb-24">
            <Container>
                {/* Hero Section */}
                <div className="text-center py-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
                        Our <span className="text-indigo-600">Services</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Elevate your interview skills with our AI-powered platform. Choose a plan that fits your needs and start preparing smarter today!
                    </p>
                </div>

                {/* Pricing Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Free Plan */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center border-2 border-indigo-600">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Free Trial</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            One-time AI-powered interview preparation.
                        </p>
                        <p className="mt-4 text-4xl font-extrabold text-indigo-600">$0</p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                            <li>✅ 1 AI-powered interview session</li>
                            <li>✅ Basic feedback on your responses</li>
                            <li>❌ No certification</li>
                            <li>❌ No premium insights</li>
                        </ul>
                        <Button asChild className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                            <Link to="/contact">Get Started</Link>
                        </Button>
                    </div>

                    {/* Premium Plan */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center border-2 border-yellow-500">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Unlimited Access</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Unlimited AI-driven interview practice.
                        </p>
                        <p className="mt-4 text-4xl font-extrabold text-yellow-500">$4.99</p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                            <li>✅ Unlimited AI-powered interviews</li>
                            <li>✅ Advanced feedback and analysis</li>
                            <li>✅ Personalized interview tips</li>
                            <li>❌ No certification</li>
                        </ul>
                        <Button asChild className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                            <Link to="/contact">Subscribe</Link>
                        </Button>
                    </div>

                    {/* Ultimate Plan */}
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center border-2 border-green-500">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Ultimate Package</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                            Get certified & enhance your career profile.
                        </p>
                        <p className="mt-4 text-4xl font-extrabold text-green-500">$7.99</p>
                        <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                            <li>✅ Unlimited AI-powered interviews</li>
                            <li>✅ Premium feedback & AI insights</li>
                            <li>✅ Personalized improvement plan</li>
                            <li>✅ Official certification from CareerSquad</li>
                        </ul>
                        <Button asChild className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white">
                            <Link to="/contact">Go Premium</Link>
                        </Button>
                    </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Why Choose Smart Hire AI?</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        CareerSquad’s AI-driven platform helps you master your interviews with personalized feedback, expert insights, and real-world simulations.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-indigo-600">🚀 AI-Powered Interviews</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Simulate real interview scenarios with AI-generated questions.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-yellow-500">📊 Instant Feedback</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Get real-time insights on your performance and improve instantly.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-green-500">🎓 Career Certifications</h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Earn certifications that add value to your resume and LinkedIn profile.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Services