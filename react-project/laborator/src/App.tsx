import { App } from 'antd';
import React, { useState } from 'react';

interface Student {
  name: string;
  age: number;
  studentId: string;
  major: string;
  courses: string[];
}

interface AdvancedStudent extends Student {
  graduationDate: Date;
  honors: boolean;
}

const student: Student = {
  name: 'Rodnitchi Anghelina',
  age: 21,
  studentId: '12345',
  major: 'FCIM',
  courses: ['Java Fundamentals', 'TSI', 'C++']
};

function Lab4() {
  return (
    <div className="container">
      <h1 className="title">Date Personale</h1>
      <div className="card">
        <p>
          <span className="label">Nume:</span>
          <span className="value">{student.name}</span>
        </p>
        <p>
          <span className="label">Varsta:</span>
          <span className="value">{student.age}</span>
        </p>
        <p>
          <span className="label">StudentId:</span>
          <span className="value">{student.studentId}</span>
        </p>
        <p>
          <span className="label">Facultatea:</span>
          <span className="value">{student.major}</span>
        </p>
        <p>
          <span className="label">Cursuri:</span>
          <span className="value">{student.courses.join(', ')}</span>
        </p>
      </div>
    </div>
  );
}

export default Lab4;
