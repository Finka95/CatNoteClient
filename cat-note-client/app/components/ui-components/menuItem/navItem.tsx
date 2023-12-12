import React from 'react';
import Typography from "@mui/material/Typography";
import Link from "next/link";
import MenuItem from '@mui/material/MenuItem';

type Props = {
    route: string
}

const NavItem = (props : Props) => {
    return (
        <Link href={`/${props.route}`}>
            <MenuItem>
                <Typography textAlign="center">{props.route}</Typography>
            </MenuItem>
        </Link>
    );
};

export default NavItem;