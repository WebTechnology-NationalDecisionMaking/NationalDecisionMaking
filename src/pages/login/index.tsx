import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Link from 'next/link';

import Header from '../../components/Header';


interface LoginForm {
    email: string;
    password: string;
  }

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Header/>
        <main className="container mx-auto px-8 py-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-semibold mb-4">Log in</h2>
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
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600"
                        placeholder="password"/>
                    </div>
                </form>
                <div className="space-x-4">
                    <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">Log in</button>
                    <Link href="/register">
                        <button className="px-3 py-1 rounded-lg bg-blue-600 text-white">Register</button>
                    </Link>
                </div>
            </div>
        </main>
    </div>
  );
}
