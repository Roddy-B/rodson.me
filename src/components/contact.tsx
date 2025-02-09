"use client"

import React, { useState } from 'react';
import type { NextPage } from 'next';

export default function Contacto() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., sending data to an API
    console.log('Form submitted:', formData);
    // Reset form after submission (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      description: '',
    });
  };

  return (
    <div className="container mx-auto pb-10 ">
        <h2 className="text-2xl font-semibold mb-4">
                Contacto
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-2 border-gray rounded-lg p-8">

        {/* Left side: Form */}
        <div>
          
          <p className="mb-6 text-gray-500">
            We are deeply committed to delivering unparalleled service and unwavering support to ensure your experience exceeds expectations.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Submit
            </button>
          </form>
        </div>

        {/* Right side: Contact Information */}
        <div className=" rounded p-6">
          <div className="mb-4 border-2 border-gray-200 rounded-lg p-2 bg-gray-100">
            <h3 className="font-bold mb-2">Numero</h3>
            <p>861111111<br />8429999999</p>
          </div>
          <div className="mb-4 border-2 border-gray-200 rounded-lg p-2 bg-gray-100">
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Talk to us and see how we can work<br />1800-14-0147</p>
          </div>
          <div className="mb-4 border-2 border-gray-200 rounded-lg p-2 bg-gray-100">
            <h3 className="font-bold mb-2">Email</h3>
            <p>teste123@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}