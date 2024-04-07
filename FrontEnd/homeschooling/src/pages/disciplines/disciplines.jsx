import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
    background: linear-gradient(to bottom, #f2f2f2, #ffffff);
`;

const MainContent = styled.div`
    grid-column: span 4;
    margin-bottom: 20px;
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
        transition: border-color 0.3s;

        &:hover {
            border-color: #007bff;
        }

        &:focus {
            outline: none;
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
        }
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
    transition: opacity 0.3s;
    background-color: #fff;

    th, td {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        transition: background-color 0.3s;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:hover {
        background-color: #f2f2f2;
    }

    button {
        margin-right: 5px;
        padding: 5px 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:first-child {
            background-color: #28a745;
            color: #fff;
        }

        &:last-child {
            background-color: #dc3545;
            color: #fff;
        }

        &:hover {
            background-color: #0056b3;
        }
    }
`;

const EditableCell = styled.input`
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export default function Disciplines() {
    const [disciplines, setDisciplines] = useState([]);
    const [newDiscipline, setNewDiscipline] = useState({ name: '', content: '', description: '' });
    const [editingDiscipline, setEditingDiscipline] = useState(null);

    const fetchDisciplines = () => {
        axios.get('http://localhost:3500/api/disciplines')
            .then(response => {
                setDisciplines(response.data);
            })
            .catch(error => {
                console.error('Error fetching disciplines:', error);
            });
    };

    useEffect(() => {
        fetchDisciplines();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewDiscipline({ ...newDiscipline, [name]: value });
    };

    const handleCreateDiscipline = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3500/api/disciplines', newDiscipline)
            .then(() => {
                setNewDiscipline({ name: '', content: '', description: '' });
                fetchDisciplines();
            })
            .catch(error => {
                console.error('Error creating discipline:', error);
            });
    };

    const handleDeleteDiscipline = (id) => {
        axios.delete(`http://localhost:3500/api/disciplines/${id}`)
            .then(() => {
                fetchDisciplines();
            })
            .catch(error => {
                console.error('Error deleting discipline:', error);
            });
    };

    const handleEditDiscipline = (discipline) => {
        setEditingDiscipline(discipline);
        setNewDiscipline(discipline);
    };

    const handleUpdateDiscipline = () => {
        axios.put(`http://localhost:3500/api/disciplines/${editingDiscipline._id}`, newDiscipline)
            .then(() => {
                setEditingDiscipline(null);
                setNewDiscipline({ name: '', content: '', description: '' });
                fetchDisciplines();
            })
            .catch(error => {
                console.error('Error updating discipline:', error);
            });
    };

    return (
        <Container>
            <MainContent>
                <Title>Disciplines</Title>
                <Form onSubmit={editingDiscipline ? handleUpdateDiscipline : handleCreateDiscipline}>
                    <input type="text" name="name" placeholder="Name" value={newDiscipline.name} onChange={handleInputChange} />
                    <input type="text" name="content" placeholder="Content" value={newDiscipline.content} onChange={handleInputChange} />
                    <input type="text" name="description" placeholder="Description" value={newDiscipline.description} onChange={handleInputChange} />
                    <button type="submit">{editingDiscipline ? 'Update Discipline' : 'Add Discipline'}</button>
                </Form>
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Content</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disciplines.map(discipline => (
                            <tr key={discipline._id}>
                                <td>{editingDiscipline && editingDiscipline._id === discipline._id ? <EditableCell type="text" name="name" value={newDiscipline.name} onChange={handleInputChange} /> : discipline.name}</td>
                                <td>{editingDiscipline && editingDiscipline._id === discipline._id ? <EditableCell type="text" name="content" value={newDiscipline.content} onChange={handleInputChange} /> : discipline.content}</td>
                                <td>{editingDiscipline && editingDiscipline._id === discipline._id ? <EditableCell type="text" name="description" value={newDiscipline.description} onChange={handleInputChange} /> : discipline.description}</td>
                                <td>
                                    {editingDiscipline && editingDiscipline._id === discipline._id ? (
                                        <>
                                            <button onClick={handleUpdateDiscipline}>Save</button>
                                            <button onClick={() => setEditingDiscipline(null)}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEditDiscipline(discipline)}>Edit</button>
                                            <button onClick={() => handleDeleteDiscipline(discipline._id)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </MainContent>
        </Container>
    );
}
