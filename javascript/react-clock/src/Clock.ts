import React = require('react');
import TypedReact = require("typed-react");

module Clock {
    'use strict';

    class ClockState {
        hour:number;
        minute:number;
        second:number;

        constructor(hour:number, minute:number, second:number) {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }
    }

    class ClockProps {
        name:string;

        constructor(name:string) {
            this.name = name;
        }
    }

    class ClockTick extends TypedReact.Component<ClockProps, ClockState> {

        public getInitialState():ClockState {
            return this.getNextState();
        }

        public render() {
            return React.createElement("b", null,
                this.props.name, ":  ", this.state.hour, ":", this.state.minute, ":", this.state.second
            );
        }

        public componentDidMount() {
            setInterval(this.doRefreshState.bind(this), 1000);
        }

        private doRefreshState() {
            this.setState(this.getNextState());
        }

        private getNextState():ClockState {
            var date = new Date(),
                hour = date.getHours(),
                minute = date.getMinutes(),
                second = date.getSeconds();

            return new ClockState(hour, minute, second);
        }
    }

    export function render() {
        var clockTickElement = React.createElement<ClockProps>(
            TypedReact.createClass(ClockTick),
            new ClockProps("Clock")
        );

        React.render(clockTickElement, document.body);
    }
}

Clock.render();