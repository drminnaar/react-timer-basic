import React, { Component } from 'react';
import Display from './Display';
import Controls from './Controls';

class Timer extends Component {

    constructor() {
        super();

        this.state = {
            seconds: 0,
            time: 0,
            status: null
        };

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.onSecondsChanged = this.onSecondsChanged.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onSecondsChanged(seconds) {
        seconds = parseInt(seconds);

        if (seconds && typeof seconds === 'number') {
            if (seconds <= 359999) {
                this.setState(() => ({ seconds: seconds, time: seconds * 1000 }));
            }
        } else {
            this.setState(() => ({ seconds: 0, time: 0 }));
        }
    }

    startTimer() {
        if (this.state.status !== 'started') {
            this.interval = setInterval(() => {
                if (this.state.time !== 0) {
                    this.setState(prevState => ({ time: prevState.time - 10 }));
                } else {
                    this.setState(() => ({ seconds: 0, status: null, time: 0 }));

                    clearInterval(this.interval);
                }
            }, 10);

            this.setState(() => ({ status: 'started' }));
        }
    }

    stopTimer() {
        if (this.state.status && this.state.status === 'started') {

            clearInterval(this.interval);

            this.setState((prevState) => {
                return ({
                    status: 'stopped',
                    seconds: Math.floor(prevState.time / 1000)
                });
            });
        }
    }

    resetTimer() {
        clearInterval(this.interval);

        this.setState(() => ({ seconds: 0, status: null, time: 0 }));
    }

    render() {
        return (
            <div>
                <Display seconds={this.state.seconds}
                    status={this.state.status}
                    time={this.state.time}
                    onSecondsChanged={this.onSecondsChanged}>
                    <div>
                        <Controls startTimer={this.startTimer}
                            stopTimer={this.stopTimer}
                            resetTimer={this.resetTimer}
                            status={this.state.status}
                            canStart={this.state.seconds > 0} />
                    </div>
                </Display>
            </div>
        );
    }
}

export default Timer;