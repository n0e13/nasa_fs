import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const handleEdit = (e) => {
  console.log('edit', e.target.key);
}

const handleDelete = (e) => {
  console.log('delete', e.target.name);
}

const LandingCard = ({ landing }) => {
  const { name, recclass } = landing;
  return (
    <>
      <Item elevation={3} >
        Name: {name}
        Class: {recclass}
        <IconButton aria-label="edit" size="small" onClick={handleEdit}>
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Item>
    </>
  );
};

export default LandingCard;


