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
    major: 'Computer Science',
    courses: ['Programming Fundamentals', 'Data Structures', 'Algorithms']
  };

function Lab4() {
    return (
        <div className="container">
            <h1 className="title">Date Personale</h1>
            <div className="card">
                <p>
                    <span className="label">Name:</span>
                    <span className="value">{student.name}</span>
                </p>
                <p>
                    <span className="label">Age:</span>
                    <span className="value">{student.age}</span>
                </p>
                <p>
                    <span className="label">StudentId:</span>
                    <span className="value">{student.studentId}</span>
                </p>
                <p>
                    <span className="label">Major:</span>
                    <span className="value">{student.major}</span>
                </p>
                <p>
                    <span className="label">Courses:</span>
                    <span className="value">{student.courses}</span>
                </p>
               
            </div>
        </div>
    );
}