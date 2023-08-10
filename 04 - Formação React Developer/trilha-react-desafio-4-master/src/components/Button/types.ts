export interface IButtonProps {
    title: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IButtonPropsStyled {
    disabled?: boolean;
}