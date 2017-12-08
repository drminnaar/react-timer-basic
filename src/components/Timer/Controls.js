import React from 'react';
import PropTypes from 'prop-types';

const Controls = (props) => (
    <div className="">
        <div className="d-flex flex-row">
            <div className="">
                <div className="controls btn-group">
                    {
                        props.status !== 'started' &&
                        <button className="btn btn-lg btn-success"
                            disabled={!props.canStart}
                            onClick={props.startTimer}>
                            <div className="text-right">
                                <i className="fa fa-play fa-2x mr-2 mb-3" />
                            </div>
                        </button>
                    }

                    {
                        props.status === 'started' &&
                        <button className="btn btn-lg btn-dark"
                            onClick={props.stopTimer}>
                            <div className="text-right">
                                <i className="fa fa-stop fa-2x mr-2 mb-3" />
                            </div>
                        </button>
                    }

                    <button className="btn btn-lg btn-primary"
                        onClick={props.resetTimer}>
                        <div className="text-left">
                            <i className="fa fa-refresh fa-2x ml-2 mb-3" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

Controls.defaultProps = {
    startTimer: () => alert('startTimer'),
    stopTimer: () => alert('stopTimer'),
    resetTimer: () => alert('resetTimer'),
    status: null,
    canStart: false,
};

Controls.propTypes = {
    startTimer: PropTypes.func,
    stopTimer: PropTypes.func,
    resetTimer: PropTypes.func,
    status: PropTypes.string,
    canStart: PropTypes.bool
};

export default Controls;