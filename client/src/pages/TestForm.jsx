import React, { useState } from 'react';
import DefaultInput from '../component/Form/DefaultInput';
import DateInput from '../component/Form/DateInput'
import Dropdown from '../component/Form/Dropdown';
import FileInput from '../component/Form/FileInput';
import TextAreaInput from '../component/Form/TextAreaInput';
import DefaultButton from '../component/Buttons/DefaultButton';

const TestForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        role: '',
        notes: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form submitted! Check console for data.");
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Restaurant Test Form
            </h2>
            <form onSubmit={handleSubmit}>
                <DefaultInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                />

                <DefaultInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                />

                <DateInput
                    label="Reservation Date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <Dropdown
                    label="Table Type"
                    name="role"
                    onChange={handleChange}
                    required
                    options={[
                        { value: 'indoor', label: 'Indoor' },
                        { value: 'outdoor', label: 'Outdoor' },
                        { value: 'vip', label: 'VIP Lounge' },
                    ]}
                />

                <TextAreaInput
                    label="Special Requests"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any food allergies or preferences?"
                />

                <FileInput
                    label="Upload Proof (Optional)"
                    name="file"
                    onChange={handleChange}
                    accept=".jpg,.png,.pdf"
                />

                <DefaultButton type="submit" label="Submit Reservation" />
            </form>
        </div>
    );
};

export default TestForm;
