import React from "react";

const GoogleMapEmbed = () => {
    return (
        <div style={{ width: "100%", height: "450px" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3684.1609191741286!2d88.43014000000001!3d22.573084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02758d51291d21%3A0x16eed2e28598bf6c!2sERLENDIS%20SOLUTIONS%20INDIA%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1753685484321!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Erlendis Solutions India Pvt Ltd Location"
            ></iframe>
        </div>
    );
};

export default GoogleMapEmbed;