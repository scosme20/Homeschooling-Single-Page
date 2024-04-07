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

            &:last-child {
                background-color: #dc3545;
                color: #fff;
            }
        }
    }
`;

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [newTeacherName, setNewTeacherName] = useState('');
    const [newTeacherEmail, setNewTeacherEmail] = useState('');
    const [newTeacherType, setNewTeacherType] = useState('');
    const [newTeacherDiscipline, setNewTeacherDiscipline] = useState('');
    const [editingTeacherId, setEditingTeacherId] = useState(null);
    const [editingTeacherName, setEditingTeacherName] = useState('');
    const [editingTeacherEmail, setEditingTeacherEmail] = useState('');
    const [editingTeacherType, setEditingTeacherType] = useState('');
    const [editingTeacherDiscipline, setEditingTeacherDiscipline] = useState('');

    const fetchTeachers = () => {
        axios.get('http://localhost:3500/api/teachers')
            .then(response => {
                setTeachers(response.data);
            })
            .catch(error => {
                console.error('Error fetching teachers:', error);
            });
    };

    useEffect(() => {
        fetchTeachers();
    }, []);

    const handleCreateTeacher = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3500/api/teachers', { 
            name: newTeacherName, 
            email: newTeacherEmail, 
            type: newTeacherType, 
            discipline: newTeacherDiscipline 
        })
            .then(() => {
                setNewTeacherName('');
                setNewTeacherEmail('');
                setNewTeacherType('');
                setNewTeacherDiscipline('');
                fetchTeachers();
            })
            .catch(error => {
                console.error('Error creating teacher:', error);
            });
    };

    const handleDeleteTeacher = (id) => {
        axios.delete(`http://localhost:3500/api/teachers/${id}`)
            .then(() => {
                fetchTeachers();
            })
            .catch(error => {
                console.error('Error deleting teacher:', error);
            });
    };

    const handleUpdateTeacher = (id) => {
        axios.put(`http://localhost:3500/api/teachers/${id}`, { 
            name: editingTeacherName, 
            email: editingTeacherEmail, 
            type: editingTeacherType, 
            discipline: editingTeacherDiscipline 
        })
            .then(() => {
                setEditingTeacherId(null);
                fetchTeachers();
            })
            .catch(error => {
                console.error('Error updating teacher:', error);
            });
    };

    return (
        <Container>
            <Title>Teachers</Title>
            <Form onSubmit={handleCreateTeacher}>
                <input type="text" id="name" name="name" placeholder="Name" value={newTeacherName} onChange={(e) => setNewTeacherName(e.target.value)} />
                <input type="text" id="email" name="email" placeholder="Email" value={newTeacherEmail} onChange={(e) => setNewTeacherEmail(e.target.value)} />
                <input type="text" id="type" name="type" placeholder="Type" value={newTeacherType} onChange={(e) => setNewTeacherType(e.target.value)} />
                <input type="text" id="discipline" name="discipline" placeholder="Discipline" value={newTeacherDiscipline} onChange={(e) => setNewTeacherDiscipline(e.target.value)} />
                <button type="submit">Add Teacher</button>
            </Form>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                        <th>Discipline</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr key={teacher._id}>
                            <td>
                                {editingTeacherId === teacher._id ? (
                                    <input type="text" value={editingTeacherName} onChange={(e) => setEditingTeacherName(e.target.value)} />
                                ) : (
                                    teacher.name
                                )}
                            </td>
                            <td>
                                {editingTeacherId === teacher._id ? (
                                    <input type="text" value={editingTeacherEmail} onChange={(e) => setEditingTeacherEmail(e.target.value)} />
                                ) : (
                                    teacher.email
                                )}
                            </td>
                            <td>
                                {editingTeacherId === teacher._id ? (
                                    <input type="text" value={editingTeacherType} onChange={(e) => setEditingTeacherType(e.target.value)} />
                                ) : (
                                    teacher.type
                                )}
                            </td>
                            <td>
                                {editingTeacherId === teacher._id ? (
                                    <input type="text" value={editingTeacherDiscipline} onChange={(e) => setEditingTeacherDiscipline(e.target.value)} />
                                ) : (
                                    teacher.discipline
                                )}
                            </td>
                            <td>
                                {editingTeacherId === teacher._id ? (
                                    <>
                                        <button onClick={() => handleUpdateTeacher(teacher._id)}>Save</button>
                                        <button onClick={() => setEditingTeacherId(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => { setEditingTeacherId(teacher._id); setEditingTeacherName(teacher.name); setEditingTeacherEmail(teacher.email); setEditingTeacherType(teacher.type); setEditingTeacherDiscipline(teacher.discipline); }}>Edit</button>
                                        <button onClick={() => handleDeleteTeacher(teacher._id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Teachers;
