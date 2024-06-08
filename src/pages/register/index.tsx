import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';


interface RegisterForm {
    email: string;
    password: string;
    passwordVerification: string;
    name: string;
    age: string;
    incomeRange: string;
  }

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Header/>
        <main className="container mx-auto px-8 py-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-semibold mb-4">Register</h2>
                <form className="space-y-2">
                    <div>
                        <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600"
                        placeholder="email"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600"/>
                    </div>
                    <div>
                        <label htmlFor="password-verification" className="block font-medium text-gray-700">Password Verification</label>
                        <input type="password" id="password-verification" name="password-verification"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600"/>
                    </div>
                    <div>
                        <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600"/>
                    </div>
                    <div>
                        <label htmlFor="age" className="block font-medium text-gray-700">Age</label>
                        <input type="text" id="age" name="age" placeholder="age"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600"/>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700">Gender</label>
                        <div className="flex items-center">
                            <div className="flex items-center mr-4 mt-1 px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600">
                                <input type="radio" name="gender" id="gender"
                                />Male
                            </div>
                            <div className="flex items-center mr-4 mt-1 px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600">
                                <input type="radio" name="gender" id="gender"
                                />Female
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block font-medium text-gray-700">Income Range</label>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600">
                                <input type="radio" name="income" id="income1"
                                />Range 1 start value - Range 1 end value
                            </div>
                            <div className="flex items-center mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600">
                                <input type="radio" name="income" id="income2"
                                />Range 2 start value - Range 2 end value
                            </div>
                            <div className="flex items-center mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600">
                                <input type="radio" name="income" id="income3"
                                />Range 3 start value - Range 3 end value
                            </div>
                        </div>
                    </div>
                </form>
                <div>
                    <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">Register</button>
                </div>
            </div>
        </main>
    </div>
  );
}
