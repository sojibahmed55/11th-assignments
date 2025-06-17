
import React from 'react';

const MyAttemptsCard = ({ dt, index }) => {
  const { note, status, createdAt } = dt;

  return (
    <tr>
      <td>{index + 1}</td>

      <td>{note || "—"}</td>
      <td>
        <span className={`badge ${status === 'pending' ? 'badge-warning' : 'badge-success'}`}>
          {status}
        </span>
      </td>
      <td>{new Date(createdAt).toLocaleString()}</td>
    </tr>
  );
};

export default MyAttemptsCard;
