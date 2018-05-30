export default {
    wrapper: {
        position: 'fixed',
        top: 60,
        right: 10,
        width: 40,
        height: 40,
    },
    spinner: {
        position: 'relative',
        width: '100%',
        height: '100%',
        '&>div': {
            position: 'absolute',
            width: '50%',
            height: '50%',
            border: '10px solid #1c4595',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            top: 0,
            left: 0,
        },
    },
};
