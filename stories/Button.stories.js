export default {
    title: 'Components/Button',
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        variant: {
            control: 'select',
            options: ['primary', 'secondary'],
        },
    },
    render: ({ label, variant }) => {
        const styles = {
            primary: 'background-color: #7C3AED; color: white; border: none;',
            secondary: 'background-color: white; color: #7C3AED; border: 2px solid #7C3AED;',
        }
        return `
            <button style="
                ${styles[variant]};
                padding: 12px 24px;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
            ">
                ${label}
            </button>
        `
    },
}

export const Primary = {
    args: {
        label: 'Ver projetos',
        variant: 'primary',
    },
}

export const Secondary = {
    args: {
        label: 'Saiba mais',
        variant: 'secondary',
    },
}