import React, { useState } from "react";

function EmployeeCard({ employee, isEditing, onEdit, onSave }) {
  const [editedData, setEditedData] = useState({
    name: employee.name,
    email: employee.email,
    body: employee.body,
  });

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(employee.id, editedData);
  };

  return (
    <div className="employee-card">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={editedData.email}
            onChange={handleChange}
          />
          <textarea
            name="body"
            value={editedData.body}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h3>{employee.name}</h3>
          <p>{employee.email}</p>
          <p>{employee.body}</p>
          <button onClick={onEdit}>Edit</button>
        </>
      )}
    </div>
  );
}

export default EmployeeCard;
