import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Four columns in the grid */
    gap: 20px;
    margin: 0 auto;
    padding: 20px;
    max-width: 1200px;
    background: linear-gradient(to bottom, #f2f2f2, #ffffff); /* Gradient effect from gray to white */
`;

const MainContent = styled.div`
    grid-column: span 4; /* Spans four columns */
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
    transition: opacity 0.3s; /* Smooth transition for the form */

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
            border-color: #007bff; /* Highlight on focus */
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Shadow around the focused input */
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
    transition: opacity 0.3s; /* Smooth transition for the table */
    background-color: #fff; /* Background color for the table */

    th, td {
        padding: 10px;
        border-bottom: 1px solid #ccc;
        text-align: left;
        transition: background-color 0.3s; /* Smooth transition for the cells */
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

const Footer = styled.footer`
    grid-column: span 4; /* Spans four columns */
    text-align: center;
    background: linear-gradient(to bottom, #f2f2f2, #ffffff); /* Gradient effect from gray to white */
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
`;

const AdditionalSection = styled.div`
    grid-column: span 4; /* Spans four columns */
    background-color: #ccc; /* Gray background color for the additional section */
    color: white; /* Text color */
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    & > div {
        width: 48%; /* Width of the sections */
        padding: 20px;
        border-radius: 5px;
        text-align: center;
        transition: background-color 0.3s, color 0.3s;

        &:hover {
            background-color: white;
            color: black;
        }
    }
`;

const SectionLeft = styled.div`
    background-color: black;
    border: 1px solid white;
`;

const SectionRight = styled.div`
    background-color: black;
    border: 1px solid white;
`;

export default function Classes() {
    const [classes, setClasses] = useState([]);
    const [newClass, setNewClass] = useState({ theme: '', type: '', activities: '' });
    const [editingClass, setEditingClass] = useState(null);

    const fetchClasses = () => {
        axios.get('http://localhost:3500/api/classes')
            .then(response => {
                setClasses(response.data);
            })
            .catch(error => {
                console.error('Error fetching classes:', error);
            });
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewClass({ ...newClass, [name]: value });
    };

    const handleCreateClass = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3500/api/classes', newClass)
            .then(() => {
                setNewClass({ theme: '', type: '', activities: '' });
                fetchClasses();
            })
            .catch(error => {
                console.error('Error creating class:', error);
            });
    };

    const handleDeleteClass = (id) => {
        axios.delete(`http://localhost:3500/api/classes/${id}`)
            .then(() => {
                fetchClasses();
            })
            .catch(error => {
                console.error('Error deleting class:', error);
            });
    };

    const handleEditClass = (classItem) => {
        setEditingClass(classItem);
        setNewClass(classItem);
    };

    const handleUpdateClass = () => {
        axios.put(`http://localhost:3500/api/classes/${editingClass._id}`, newClass)
            .then(() => {
                setEditingClass(null);
                setNewClass({ theme: '', type: '', activities: '' });
                fetchClasses();
            })
            .catch(error => {
                console.error('Error updating class:', error);
            });
    };

    return (
        <Container>
            <MainContent>
                <Title>Classes</Title>
                <Form onSubmit={editingClass ? handleUpdateClass : handleCreateClass}>
                    <input type="text" name="theme" placeholder="Theme" value={newClass.theme} onChange={handleInputChange} />
                    <input type="text" name="type" placeholder="Type" value={newClass.type} onChange={handleInputChange} />
                    <input type="text" name="activities" placeholder="Activities" value={newClass.activities} onChange={handleInputChange} />
                    <button type="submit">{editingClass ? 'Update Class' : 'Add Class'}</button>
                </Form>
                <Table>
                    <thead>
                        <tr>
                            <th>Theme</th>
                            <th>Type</th>
                            <th>Activities</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map(classItem => (
                            <tr key={classItem._id}>
                                <td>{editingClass && editingClass._id === classItem._id ? <EditableCell type="text" name="theme" value={newClass.theme} onChange={handleInputChange} /> : classItem.theme}</td>
                                <td>{editingClass && editingClass._id === classItem._id ? <EditableCell type="text" name="type" value={newClass.type} onChange={handleInputChange} /> : classItem.type}</td>
                                <td>{editingClass && editingClass._id === classItem._id ? <EditableCell type="text" name="activities" value={newClass.activities} onChange={handleInputChange} /> : classItem.activities}</td>
                                <td>
                                    {editingClass && editingClass._id === classItem._id ? (
                                        <>
                                            <button onClick={handleUpdateClass}>Save</button>
                                            <button onClick={() => setEditingClass(null)}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEditClass(classItem)}>Edit</button>
                                            <button onClick={() => handleDeleteClass(classItem._id)}>Delete</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </MainContent>
            <AdditionalSection>
                <SectionLeft>
                    <h3>School Subjects</h3>
                    <p>Mathematics</p>
                    <p>Science</p>
                    <p>Portuguese</p>
                    <p>History</p>
                    <p>Geography</p>
                </SectionLeft>
                <SectionRight>
                    <h3>Book Recommendations</h3>
                    <p>The Lord of the Rings - J.R.R. Tolkien</p>
                    <p>Harry Potter - J.K. Rowling</p>
                    <p>One Hundred Years of Solitude - Gabriel García Márquez</p>
                    <p>1984 - George Orwell</p>
                    <p>Animal Farm - George Orwell</p>
                </SectionRight>
            </AdditionalSection>
            <Footer>This is the footer.</Footer>
        </Container>
    );
}

