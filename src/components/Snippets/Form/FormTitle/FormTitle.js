import React from 'react';

export default function FormTitle({ title, subtitle }) {
    return (
        <div className="form-title">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
}
