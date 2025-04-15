// 'use client';
//
// import React, { useState } from 'react';
// import axios from 'axios';
// import { login, register } from '@/lib/actions/user.actions';
// import { useRouter } from 'next/navigation';
//
// const AuthForm: React.FC = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const router = useRouter();
//
//     // const handleSubmit = async (e: React.FormEvent) => {
//     //     e.preventDefault();
//     //     try {
//     //         if (isLogin) {
//     //             const data = await login(email, password);
//     //             localStorage.setItem('token', data.access_token);
//     //             console.log('Login successful!');
//     //         } else {
//     //             await register(email, password, name);
//     //             console.log('Registration successful!');
//     //         }
//     //         router.push('/dashboard');
//     //     } catch (error) {
//     //         if (axios.isAxiosError(error)) {
//     //             console.error('Axios error:', error.response?.data, error.response?.status);
//     //         } else {
//     //             console.error('Unexpected error:', error);
//     //         }
//     //     }
//     // };
//
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         // Basic client-side validations
//         if (!email.includes('@')) {
//             return alert('Please enter a valid email address.');
//         }
//         if (password.length < 6) {
//             return alert('Password must be at least 6 characters long.');
//         }
//         if (!isLogin && name.trim() === '') {
//             return alert('Name cannot be empty.');
//         }
//
//         try {
//             if (isLogin) {
//                 const data = await login(email, password);
//                 localStorage.setItem('token', data.access_token);
//                 console.log('Login successful!');
//             } else {
//                 await register(email, password, name);
//                 console.log('Registration successful!');
//             }
//             router.push('/homepage');
//         } catch (error) {
//             if (axios.isAxiosError(error)) {
//                 console.error('Axios error:', error.response?.data, error.response?.status);
//                 alert(error.response?.data?.message || 'An error occurred');
//             } else {
//                 console.error('Unexpected error:', error);
//             }
//         }
//     };
//
//     return (
//         // <div>
//         //     <form onSubmit={handleSubmit} className="space-y-4">
//         //         <input
//         //             type="email"
//         //             value={email}
//         //             onChange={(e) => setEmail(e.target.value)}
//         //             placeholder="Email"
//         //             required
//         //             className="w-full p-2 border rounded text-black"
//         //         />
//         //         <input
//         //             type="password"
//         //             value={password}
//         //             onChange={(e) => setPassword(e.target.value)}
//         //             placeholder="Password"
//         //             required
//         //             className="w-full p-2 border rounded text-black"
//         //         />
//         //         {!isLogin && (
//         //             <input
//         //                 type="text"
//         //                 value={name}
//         //                 onChange={(e) => setName(e.target.value)}
//         //                 placeholder="Name"
//         //                 required
//         //                 className="w-full p-2 border rounded text-black"
//         //             />
//         //         )}
//         //         <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
//         //             {isLogin ? 'Login' : 'Register'}
//         //         </button>
//         //     </form>
//         //     <div className="mt-4 text-center">
//         //         <button
//         //             onClick={() => setIsLogin(!isLogin)}
//         //             className="text-blue-500 hover:underline"
//         //         >
//         //             {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
//         //         </button>
//         //     </div>
//         // </div>
//       <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 rounded-lg shadow-md">
//           <h1 className="text-2xl font-semibold text-center mb-6">
//               {isLogin ? 'Login' : 'Register'}
//           </h1>
//           <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email"
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               {!isLogin && (
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   placeholder="Name"
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               )}
//               <button
//                 type="submit"
//                 className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
//               >
//                   {isLogin ? 'Login' : 'Register'}
//               </button>
//           </form>
//           <div className="mt-4 text-center">
//               <button
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="text-blue-500 hover:underline"
//               >
//                   {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
//               </button>
//           </div>
//       </div>
// );
// };
//
// export default AuthForm;




'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login, register } from '@/lib/actions/user.actions';

const AuthForm: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic client-side validations
        if (!email.includes('@')) {
            return alert('Please enter a valid email address.');
        }
        if (password.length < 6) {
            return alert('Password must be at least 6 characters long.');
        }
        // if (!isLogin && name.trim() === '') {
        //     return alert('Name cannot be empty.');
        // }

        try {
            if (isLogin) {
                const data = await login(email, password);
                localStorage.setItem('access_token', data.access_token);
                console.log('Login successful!');
                router.push('/homepage');
            } else {
                await register(email, password, name);
                console.log('Registration successful!');
                router.push('/login')
            }
        } catch (error: any) {
            console.error('Error:', error.response?.data || error.message);
            alert(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
      <div className="max-w-md mx-auto mt-10 p-8 border border-gray-200 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold text-center mb-6">
              {isLogin ? 'Login' : 'Register'}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {/*{!isLogin && (*/}
              {/*  <input*/}
              {/*    type="text"*/}
              {/*    value={name}*/}
              {/*    onChange={(e) => setName(e.target.value)}*/}
              {/*    placeholder="Name"*/}
              {/*    required*/}
              {/*    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"*/}
              {/*  />*/}
              {/*)}*/}
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                  {isLogin ? 'Login' : 'Register'}
              </button>
          </form>
          <div className="mt-4 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline"
              >
                  {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
              </button>
          </div>
      </div>
    );
};

export default AuthForm;
