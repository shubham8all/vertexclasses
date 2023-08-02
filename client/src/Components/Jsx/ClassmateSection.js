// ClassmateSection.js

import React, { useEffect, useState } from 'react';

const ClassmateSection = () => {
  const [classmates, setClassmates] = useState([]);

  useEffect(() => {
    // Make an API call to retrieve the list of classmates
    fetch('/api/classmates')
      .then((response) => response.json())
      .then((data) => setClassmates(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Classmates</h2>
      <ul>
        {classmates.map((classmate) => (
          <li key={classmate._id}>{classmate.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassmateSection;
