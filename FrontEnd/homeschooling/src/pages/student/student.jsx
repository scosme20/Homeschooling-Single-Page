import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 auto;
    padding: 20px;
    max-width: 800px;
`;

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    input {
        padding: 10px;
        margin-right: 10px;
        flex-grow: 1;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        padding: 10px 20px;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    th, td {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
    }

    td {
        button {
            margin-right: 5px;
            padding: 5px 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;

            &:first-child {
                background-color: #28a745;
                color: #fff;
            }

            &:nth-child(2) {
                background-color: #ffc107;
                color: #fff;
            }

            &:last-child {
                background-color: #dc3545;
                color: #fff;
            }
        }
    }
`;

export default function Students() {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({ name: '', email: '' });
    const [editingStudent, setEditingStudent] = useState(null);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = () => {
        axios.get('http://localhost:3500/api/student')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleCreateStudent = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3500/api/student', newStudent)
            .then(() => {
                setNewStudent({ name: '', email: '' });
                fetchStudents();
            })
            .catch(error => {
                console.error('Error creating student:', error);
            });
    };

    const handleDeleteStudent = (id) => {
        axios.delete(`http://localhost:3500/api/student/${id}`)
            .then(() => {
                fetchStudents();
            })
            .catch(error => {
                console.error('Error deleting student:', error);
            });
    };

    const handleEditStudent = (student) => {
        setEditingStudent(student);
        setNewStudent({ name: student.name, email: student.email });
    };

    const handleUpdateStudent = () => {
        axios.put(`http://localhost:3500/api/student/${editingStudent._id}`, newStudent)
            .then(() => {
                setEditingStudent(null);
                setNewStudent({ name: '', email: '' });
                fetchStudents();
            })
            .catch(error => {
                console.error('Error updating student:', error);
            });
    };

    return (
        <Container>
            <Title>Students</Title>
            <Form onSubmit={editingStudent ? handleUpdateStudent : handleCreateStudent}>
                <input type="text" name="name" placeholder="Name" value={newStudent.name} onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" value={newStudent.email} onChange={handleInputChange} />
                <button type="submit">{editingStudent ? 'Update Student' : 'Add Student'}</button>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student._id}>
                            <td>{editingStudent && editingStudent._id === student._id ? <input type="text" name="name" value={newStudent.name} onChange={handleInputChange} /> : student.name}</td>
                            <td>{editingStudent && editingStudent._id === student._id ? <input type="email" name="email" value={newStudent.email} onChange={handleInputChange} /> : student.email}</td>
                            <td>
                                {editingStudent && editingStudent._id === student._id ? (
                                    <>
                                        <button onClick={handleUpdateStudent}>Save</button>
                                        <button onClick={() => setEditingStudent(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEditStudent(student)}>Edit</button>
                                        <button onClick={() => handleDeleteStudent(student._id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}
