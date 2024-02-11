"use client"
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import edit from '../assets/edit.png'
import trash from '../assets/camera_card_comp/trash.png'
import Image from 'next/image';

const MyTable = ({data}) => {

    const handleEdit = (index) => {
        // Handle edit action here
        let newData = { ...data };

        // Modify the data for the row at the given index
        // For example, let's change the Role to 'Modified'
        newData.Role[index] = 'Modified';

        // Update the state with the new data
        setData(newData);
    };

    const handleDelete = (index) => {
        // Handle delete action here
        let newData = { ...data };

        // Remove the row at the given index from each column
        Object.keys(newData).forEach((key) => {
            newData[key].splice(index, 1);
        });

        // Update the state with the new data
        setData(newData);
    };

    return (
        <TableContainer component={Paper} sx={{ width: '1035px' }}>
            <Table sx={{ minWidth: 650, border: 'none' }} aria-label="simple table">
                <TableHead >
                    <TableRow sx={{ backgroundColor: '#F3F3F3' }}>
                        {Object.keys(data).map((key) => (
                            <TableCell style={key === 'Action' ? { paddingLeft:'4rem' } : {}}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.Name.map((_, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ fontSize: '13px', fontWeight: '500', color: '#242424' }}><div>{data.Name[index]}</div></TableCell>
                            <TableCell sx={{ fontSize: '13px', fontWeight: '500', color: '#242424' }}>{data.Email[index]}</TableCell>
                            <TableCell sx={{ fontSize: '13px', fontWeight: '500', color: '#242424' }}>{data.Role[index]}</TableCell>
                            <TableCell>
                                {data.Locations[index].map((location, i) => (
                                    <div style={{ fontSize: i === 1 ? '11px' : '13px' }}>{location}</div>
                                ))}
                            </TableCell>
                            <TableCell sx={{ fontSize: '13px', fontWeight: '500', color: '#242424' }}>{data['Last Active'][index]}</TableCell>
                            <TableCell sx={{ fontSize: '13px', fontWeight: '500', color: '#242424' }}>{data.Permissions[index]}</TableCell>
                            <TableCell sx={{ fontSize: '13px', fontWeight: '500', color: '#242424' }}>
                                <div style={{
                                    width: '52px',
                                    height: '22px',
                                    backgroundColor: data.Status[index] === 'Active' ? '#4CAF50' : 'red',
                                    padding: '0px 14px 0px 14px',
                                    fontSize: '10px',
                                    color: 'white',
                                    fontWeight: '500',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius:'4px'
                                }}>
                                    {data.Status[index]}
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => handleEdit(index)}>
                                    <Image src={edit} height={24} width={24} />
                                </Button>
                                <Button onClick={() => handleDelete(index)}>
                                    <Image src={trash} height={24} width={24} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MyTable;
