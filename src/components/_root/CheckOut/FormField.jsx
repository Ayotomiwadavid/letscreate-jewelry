import React, { useState } from "react";
import { toast } from "react-toastify";
import Grid from "./ShippingDetails";

export default function FormField() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    town: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
  });
  const [isLoading, setLoading] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createUserAccount = async () => {
    // Your create user account logic here
  };

  return (
    <main className="flex flex-col md:flex-row gap-x-3 justify-center mx-auto my-[2cm] grid-cols-2 bg-white">
      <section className="px-5">
        <h1 className="text-3xl font-bold mb-5">Billing details</h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Akorede"
              className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Salaudeen"
              className="bg-gray-30 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Company Name (Option)</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium">Country / Region</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className="mb-4 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Street address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
            className="mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Town / City</label>
          <input
            type="text"
            name="town"
            value={formData.town}
            onChange={handleInputChange}
            className="mb-5 bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Province</label>
          <input
            type="text"
            name="province"
            value={formData.province}
            onChange={handleInputChange}
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Zip code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Phone</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-gray-30 text-sm rounded-md block w-full p-3.5 border border-gray-300"
            required
          />
        </div>
      </section>

      <section className="flex flex-col bg-white rounded-t-lg">
        <Grid
          createUserAccount={createUserAccount}
          isLoading={isLoading}
          shippingDetails={formData}
          isEdited={isEdited}
        />
      </section>
    </main>
  );
}