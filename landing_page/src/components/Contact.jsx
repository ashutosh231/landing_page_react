import React from 'react';
import { useState } from 'react';
import PrevKey from './prevKey';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    
    const handleChange = (e) => {
        // setFormData({//
        //     ...formData,// Spread the existing form data
        //     [e.target.name]: e.target.value// Update the specific field that changed
        // });
        //use filter function to update the form data
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();// Prevent the default form submission behavior
        console.log(formData);
        alert("Form Submitted Successfully!");
        // Reset form after submission
        setFormData({
            name: "",
            email: "",
            message: ""
        });
    };

    const sectionStyle = {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f9fafb"
    };

    const containerStyle = {
        maxWidth: "600px",
        width: "100%",
        backgroundColor: "white",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    };

    const headingStyle = {
        fontSize: "2rem",
        fontWeight: "bold",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#333"
    };

    const labelStyle = {
        display: "block",
        marginBottom: "0.5rem",
        fontWeight: "600",
        color: "#555"
    };

    const inputStyle = {
        width: "100%",
        padding: "0.75rem",
        marginBottom: "1rem",
        border: "1px solid #ddd",
        borderRadius: "4px",
        fontSize: "1rem",
        boxSizing: "border-box"
    };

    const textareaStyle = {
        ...inputStyle,
        minHeight: "120px",
        resize: "vertical"
    };

    const buttonStyle = {
        width: "100%",
        padding: "0.75rem",
        backgroundColor: "#4f46e5",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s"
    };

    return (
        <div style={sectionStyle} id="contact">
            <div style={containerStyle}>
                <h2 style={headingStyle}>Contact Us</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" style={labelStyle}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" style={labelStyle}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            style={textareaStyle}
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        style={buttonStyle}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#4338ca"}
                        onMouseOut={(e) => e.target.style.backgroundColor = "#4f46e5"}
                    >
                        Submit
                    </button>
                </form>
            </div>
          
        </div>
    );
};

export default Contact;