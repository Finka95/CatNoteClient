import React from 'react';
import Button from "@mui/material/Button";
import Link from "next/link";

type Props = {
    route: string
}

const NavButton = (props : Props) => {
    return (
        <Link href={`/${props.route}`}>
            <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                {props.route}
            </Button>
        </Link>
    );
};

export default NavButton;