export default {
    wrapper: {
        position: 'fixed',
        top: 10,
        right: 10,
        width: 40,
        height: 40,
    },
    '@keyframes spin': {
        from: { transform: 'rotateZ(0deg)' },
        to: { transform: 'rotateZ(360deg)' },
    },
    spinner: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transformOrigin: '50% 50%',
        transform: 'translate(50px, 50px)',
        animation: 'spin 1s linear infinite',
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
