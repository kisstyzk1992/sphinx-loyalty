const style = (theme) => ({
    modal: {
        top: '10%',
        left: '40%',
        transform: 'translate(-50%, - 50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
        outline: 'none'
    },
    textField: {
        width: '100%'
    },
    header: {
        backgroundColor: theme.color.primary,
        color: theme.color.textcolor,
        padding: theme.spacing(2)
    },
    title: {
        color: theme.color.textColor,
        fontWeight: 700,
        textTransform: 'capitalize'
    },
    content: {
        padding: theme.spacing(2)
    }
})

export default style