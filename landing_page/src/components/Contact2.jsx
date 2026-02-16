import React from 'react';
import { useState } from 'react';
const Contact2 = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [formd,setFormd] = useState([]);
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully!");
        setFormd(prev => [...prev, { ...formData, id: Date.now() }]);
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
                <div className="mt-8 text-center text-gray-600">
                    {formd.length > 0 && (
                        <div>
                            <h3>Submitted Contacts:</h3>
                            {formd.map((data) => (
                                <div key={data.id} style={{marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem'}}>
                                    <p><strong>Name:</strong> {data.name}</p>
                                    <p><strong>Id:</strong> {data.id}</p>
                                    <p><strong>Email:</strong> {data.email}</p>
                                    <p><strong>Message:</strong> {data.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
          
        </div>
    );
};

export default Contact2;