import React from 'react';

export default class JSSpinner extends React.Component {
    state = {
        rotation: 0,
        speed: 5,
    }

    componentDidMount() {
        this.rotate();
    }

    rotate = () => {
        this.setState({ rotation: this.state.rotation + this.state.speed });
        requestAnimationFrame(this.rotate);
    }

    render() {
        const { classes } = this.props;
        const { rotation } = this.state;
        return (
            <div className={classes.wrapper}>
                <div
                    style={{ transform: `rotateZ(${rotation}deg)` }}
                    className={classes.spinner}
                >
                    <div />
                </div>
            </div>
        );
    }
}
