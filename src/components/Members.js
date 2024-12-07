// src/components/Members.js

import React, { useState } from "react";
import "../App.css";

function Members() {
    const hardcodedMembers = [
        {
            id: 1,
            username: "User123",
            contactNumber: "9898989898",
            email: "user123@gmail.com",
        },
        {
            id: 2,
            username: "User2",
            contactNumber: "234-567-8901",
            email: "user2@example.com",
        },
        {
            id: 3,
            username: "User3",
            contactNumber: "345-678-9012",
            email: "user3@example.com",
        },
        {
            id: 4,
            username: "User4",
            contactNumber: "456-789-0123",
            email: "user4@example.com",
        },
        {
            id: 5,
            username: "User5",
            contactNumber: "567-890-1234",
            email: "user5@example.com",
        },
        {
            id: 6,
            username: "User6",
            contactNumber: "678-901-2345",
            email: "user6@example.com",
        },
        {
            id: 7,
            username: "User7",
            contactNumber: "789-012-3456",
            email: "user7@example.com",
        },
        {
            id: 8,
            username: "User8",
            contactNumber: "890-123-4567",
            email: "user8@example.com",
        },
        {
            id: 9,
            username: "User9",
            contactNumber: "901-234-5678",
            email: "user9@example.com",
        },
        {
            id: 10,
            username: "User10",
            contactNumber: "012-345-6789",
            email: "user10@example.com",
        },
    ];

    const [members, setMembers] = useState(hardcodedMembers);

    return (
        <div className="members-container">
            <h2>Members</h2>
            <ul className="members-list">
                {members.map((member) => (
                    <li key={member.id} className="members-item">
                        <strong>{member.username}</strong> - {member.contactNumber} -{" "}
                        {member.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Members;