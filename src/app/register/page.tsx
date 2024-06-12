'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '../../components/Header';
import { register } from '%/src/services/app/user/UserService';

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [incomeRange, setIncomeRange] = useState('');

  const handleRegister = async () => {
    if (password !== passwordVerification) {
      alert('Passwords do not match');
      return;
    }

    try {
      await register(
        email,
        password,
        name,
        parseInt(age),
        gender as 'male' | 'female',
        parseInt(incomeRange)
      );
      router.push('/login');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <Header />
      <main className='container mx-auto px-8 py-8'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-semibold mb-4'>Register</h2>
          <form className='space-y-2'>
            <div>
              <label
                htmlFor='email'
                className='block font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                placeholder='email'
              />
            </div>
            <div>
              <label
                htmlFor='password'
                className='block font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600'
              />
            </div>
            <div>
              <label
                htmlFor='password-verification'
                className='block font-medium text-gray-700'
              >
                Password Verification
              </label>
              <input
                type='password'
                id='password-verification'
                name='password-verification'
                value={passwordVerification}
                onChange={(e) => setPasswordVerification(e.target.value)}
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600'
              />
            </div>
            <div>
              <label htmlFor='name' className='block font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Name'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600'
              />
            </div>
            <div>
              <label htmlFor='age' className='block font-medium text-gray-700'>
                Age
              </label>
              <input
                type='text'
                id='age'
                name='age'
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder='age'
                className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-blue-600 focus:border-blue-600'
              />
            </div>
            <div>
              <label className='block font-medium text-gray-700'>Gender</label>
              <div className='flex items-center'>
                <label className='flex items-center mr-4 mt-1 px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-blue-600 focus:border-blue-600'>
                  <input
                    type='radio'
                    name='gender'
                    value='male'
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className='ml-2'>Male</span>
                </label>
                <label className='flex items-center mr-4 mt-1 px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-blue-600 focus:border-blue-600'>
                  <input
                    type='radio'
                    name='gender'
                    value='female'
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <span className='ml-2'>Female</span>
                </label>
              </div>
            </div>
            <div>
              <label className='block font-medium text-gray-700'>
                Income Range
              </label>
              <div className='flex flex-col space-y-2'>
                {[
                  '0-30000',
                  '30001-60000',
                  '60001-100000',
                  '100001-150000',
                  '150001-200000',
                  '200001-300000',
                  '300001-500000',
                  '500001-1000000',
                  '1000001+',
                ].map((range) => (
                  <label
                    key={range}
                    className='flex items-center mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-2xl shadow-sm hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-blue-600 focus:border-blue-600'
                  >
                    <input
                      type='radio'
                      name='income'
                      value={range}
                      onChange={(e) => setIncomeRange(e.target.value)}
                    />
                    <span className='ml-2'>
                      {range === '1000001+'
                        ? '$1,000,001 and above'
                        : `$${range.replace('-', ' - $')}`}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </form>
          <div>
            <button
              className='px-3 py-1 rounded-lg bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
