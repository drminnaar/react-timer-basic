import React from 'react';
import PropTypes from 'prop-types';
import Time from '../../lib/Time';

const Display = (props) => {

    const time = new Time();

    const onChange = (e) => {
        props.onSecondsChanged(e.target.value);
    };

    const runningDisplayStyle = {
        position: 'absolute',
        top: 100,
        color: props.time <= 10000 ? '#FE5C5C' : ''
    };

    return (
        <div className="display" style={{ position: 'relative' }}>
            {
                props.status === 'started'
                && <div className="display-time align-self-center" style={runningDisplayStyle}>
                    {time.getTime(props.time)}
                </div>
            }
            {
                props.status !== 'started' &&
                <div className="d-flex flex-column">
                    <div className="text-info h6 align-self-center" style={{ position: 'absolute', top: 60 }}>
                        {time.getTime(props.time)}
                    </div>
                    <input className="display-time align-self-center" style={{ position: 'absolute', top: 100 }}
                        maxLength="6" value={props.seconds}
                        onChange={onChange} />
                </div>
            }
            <div style={{ position: 'absolute', bottom: 0, left: '-10px' }}>
                {props.children}
            </div>
        </div>
    );
};

Display.defaultProps = {
    seconds: 0,
    status: null,
    time: 0,
    onSecondsChanged: (e) => console.log(e.target.value)
};

Display.propTypes = {
    children: PropTypes.element,
    seconds: PropTypes.number.isRequired,
    status: PropTypes.string,
    time: PropTypes.number,
    onSecondsChanged: PropTypes.func
};

export default Display;