import React from 'react';

const DEFAULT_WIDTH = 24;
const DEFAULT_HEIGHT = 24;
const DEFAULT_COLOR = '#000000';

export class CircleMinus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7,13H17V11H7" />
                </svg>
            </span>
        );
    }
}

export class CirclePlus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
                </svg>
            </span>
        );
    }
}

export class SquareMinus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;
        const svgStyle = getIconStyle(style).style;

        return (
            <span {...rest}>
                <svg
                    fill={svgStyle.color}
                    width={svgStyle.height}
                    height={svgStyle.width}
                    style={svgStyle}
                    viewBox="0 0 1792 1792"
                >
                    <path d="M1344 800v64q0 14-9 23t-23 9h-832q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h832q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" />
                </svg>
            </span>
        );
    }
}

export class SquarePlus extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;
        const svgStyle = getIconStyle(style).style;

        return (
            <span {...rest}>
                <svg
                    fill={svgStyle.color}
                    width={svgStyle.height}
                    height={svgStyle.width}
                    style={svgStyle}
                    viewBox="0 0 1792 1792"
                >
                    <path d="M1344 800v64q0 14-9 23t-23 9h-352v352q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-352h-352q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-352q0-14 9-23t23-9h64q14 0 23 9t9 23v352h352q14 0 23 9t9 23zm128 448v-832q0-66-47-113t-113-47h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113zm128-832v832q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q119 0 203.5 84.5t84.5 203.5z" />
                </svg>
            </span>
        );
    }
}

export class ArrowRight extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    style={{
                        ...getIconStyle(style).style,
                        paddingLeft: '2px',
                        verticalAlign: 'top'
                    }}
                    viewBox="0 0 15 15"
                    fill="currentColor"
                >
                    <path d="M0 14l6-6-6-6z"></path>
                </svg>
            </span>
        );
    }
}

export class ArrowDown extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    style={{
                        ...getIconStyle(style).style,
                        paddingLeft: '2px',
                        verticalAlign: 'top'
                    }}
                    viewBox="0 0 15 15"
                    fill="currentColor"
                >
                    <path d="M0 5l6 6 6-6z"></path>
                </svg>
            </span>
        );
    }
}

export class Clippy extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m30 35h-25v-22.5h25v7.5h2.5v-12.5c0-1.4-1.1-2.5-2.5-2.5h-7.5c0-2.8-2.2-5-5-5s-5 2.2-5 5h-7.5c-1.4 0-2.5 1.1-2.5 2.5v27.5c0 1.4 1.1 2.5 2.5 2.5h25c1.4 0 2.5-1.1 2.5-2.5v-5h-2.5v5z m-20-27.5h2.5s2.5-1.1 2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5 1.3 2.5 2.5 2.5h2.5s2.5 1.1 2.5 2.5h-20c0-1.5 1.1-2.5 2.5-2.5z m-2.5 20h5v-2.5h-5v2.5z m17.5-5v-5l-10 7.5 10 7.5v-5h12.5v-5h-12.5z m-17.5 10h7.5v-2.5h-7.5v2.5z m12.5-17.5h-12.5v2.5h12.5v-2.5z m-7.5 5h-5v2.5h5v-2.5z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class RemoveCircle extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m28.6 25q0-0.5-0.4-1l-4-4 4-4q0.4-0.5 0.4-1 0-0.6-0.4-1.1l-2-2q-0.4-0.4-1-0.4-0.6 0-1 0.4l-4.1 4.1-4-4.1q-0.4-0.4-1-0.4-0.6 0-1 0.4l-2 2q-0.5 0.5-0.5 1.1 0 0.5 0.5 1l4 4-4 4q-0.5 0.5-0.5 1 0 0.7 0.5 1.1l2 2q0.4 0.4 1 0.4 0.6 0 1-0.4l4-4.1 4.1 4.1q0.4 0.4 1 0.4 0.6 0 1-0.4l2-2q0.4-0.4 0.4-1z m8.7-5q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class AddCircle extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m30.1 21.4v-2.8q0-0.6-0.4-1t-1-0.5h-5.7v-5.7q0-0.6-0.4-1t-1-0.4h-2.9q-0.6 0-1 0.4t-0.4 1v5.7h-5.7q-0.6 0-1 0.5t-0.5 1v2.8q0 0.6 0.5 1t1 0.5h5.7v5.7q0 0.5 0.4 1t1 0.4h2.9q0.6 0 1-0.4t0.4-1v-5.7h5.7q0.6 0 1-0.5t0.4-1z m7.2-1.4q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class Add extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m31.6 21.6h-10v10h-3.2v-10h-10v-3.2h10v-10h3.2v10h10v3.2z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class Edit extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m19.8 26.4l2.6-2.6-3.4-3.4-2.6 2.6v1.3h2.2v2.1h1.2z m9.8-16q-0.3-0.4-0.7 0l-7.8 7.8q-0.4 0.4 0 0.7t0.7 0l7.8-7.8q0.4-0.4 0-0.7z m1.8 13.2v4.3q0 2.6-1.9 4.5t-4.5 1.9h-18.6q-2.6 0-4.5-1.9t-1.9-4.5v-18.6q0-2.7 1.9-4.6t4.5-1.8h18.6q1.4 0 2.6 0.5 0.3 0.2 0.4 0.5 0.1 0.4-0.2 0.7l-1.1 1.1q-0.3 0.3-0.7 0.1-0.5-0.1-1-0.1h-18.6q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-2.9q0-0.2 0.2-0.4l1.4-1.5q0.3-0.3 0.8-0.1t0.4 0.6z m-2.1-16.5l6.4 6.5-15 15h-6.4v-6.5z m9.9 3l-2.1 2-6.4-6.4 2.1-2q0.6-0.7 1.5-0.7t1.5 0.7l3.4 3.4q0.6 0.6 0.6 1.5t-0.6 1.5z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class CheckCircle extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 40 40"
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="m31.7 16.4q0-0.6-0.4-1l-2.1-2.1q-0.4-0.4-1-0.4t-1 0.4l-9.1 9.1-5-5q-0.5-0.4-1-0.4t-1 0.4l-2.1 2q-0.4 0.4-0.4 1 0 0.6 0.4 1l8.1 8.1q0.4 0.4 1 0.4 0.6 0 1-0.4l12.2-12.1q0.4-0.4 0.4-1z m5.6 3.6q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2-2.3-8.6 2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z" />
                    </g>
                </svg>
            </span>
        );
    }
}

export class Eth extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 48 48"
                    fill="#808080"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                        <path d="M 37.67,26.59 C 37.45,26.35 37.09,26.30 36.81,26.46 L 24.05,33.99 11.30,26.46 c -0.27,-0.16 -0.63,-0.11 -0.86,0.12 -0.22,0.24 -0.24,0.60 -0.05,0.86 l 13.10,18.45 c 0.01,0.01 0.02,0.01 0.03,0.03 0.02,0.03 0.05,0.06 0.08,0.08 0.01,0.01 0.02,0.03 0.04,0.04 0.01,0.00 0.02,0.00 0.04,0.01 0.02,0.01 0.04,0.03 0.06,0.04 0.08,0.04 0.18,0.06 0.28,0.06 4.44e-4,0 4.44e-4,0 0.00,0 0,0 0,0 8.89e-4,0 v 0 0 c 8.88e-4,0 8.88e-4,0 8.88e-4,0 4.45e-4,0 4.45e-4,0 0.00,0 0.10,0 0.20,-0.02 0.28,-0.06 0.02,-0.01 0.04,-0.03 0.06,-0.04 0.01,-0.00 0.02,-0.00 0.04,-0.01 0.01,-0.01 0.02,-0.02 0.04,-0.04 0.03,-0.02 0.05,-0.05 0.08,-0.08 0.01,-0.01 0.02,-0.01 0.03,-0.03 L 37.72,27.46 c 0.18,-0.26 0.16,-0.62 -0.05,-0.86 z m -14.30,8.60 v 8.15 L 13.39,29.30 Z m 1.38,8.15 v -8.15 l 9.97,-5.89 z M 10.15,24.23 c 0.00,0.08 0.02,0.17 0.05,0.25 0.01,0.02 0.02,0.05 0.03,0.07 0.05,0.09 0.12,0.17 0.22,0.23 0.00,8.88e-4 0.00,8.88e-4 0.00,0.00 0.00,8.89e-4 0.00,0.00 0.00,0.00 l 13.21,7.74 c 0.01,0.00 0.02,0.00 0.03,0.00 0.09,0.04 0.19,0.08 0.31,0.08 0.11,0 0.22,-0.03 0.31,-0.08 0.01,-0.00 0.02,-0.00 0.03,-0.00 l 12.98,-7.74 c 0.10,-0.06 0.17,-0.14 0.23,-0.24 0.01,-0.02 0.02,-0.05 0.03,-0.07 0.03,-0.08 0.05,-0.16 0.05,-0.25 0,-0.01 0.01,-0.03 0.01,-0.05 0,-0.00 -0.00,-0.01 -0.00,-0.02 -0.00,-0.10 -0.03,-0.20 -0.08,-0.29 L 24.64,2.12 c -0.00,-0.00 -0.01,-0.01 -0.01,-0.02 -0.01,-0.02 -0.03,-0.04 -0.05,-0.06 -0.02,-0.02 -0.04,-0.05 -0.07,-0.07 -0.02,-0.01 -0.04,-0.03 -0.06,-0.05 -0.00,-0.00 -0.01,-0.01 -0.02,-0.02 -0.01,-0.00 -0.03,-0.00 -0.04,-0.01 -0.03,-0.01 -0.06,-0.02 -0.09,-0.03 -0.02,-0.00 -0.05,-0.01 -0.08,-0.02 -0.02,-0.00 -0.05,-0.00 -0.08,-0.00 -0.01,-0.00 -0.03,-0.00 -0.04,-0.00 -0.01,0 -0.02,0.00 -0.04,0.00 -0.02,0.00 -0.05,0.00 -0.08,0.00 -0.03,0.00 -0.06,0.01 -0.09,0.02 -0.03,0.01 -0.06,0.02 -0.09,0.03 -0.01,0.00 -0.02,0.00 -0.04,0.01 -0.00,0.00 -0.01,0.01 -0.02,0.01 -0.02,0.01 -0.04,0.03 -0.06,0.05 -0.02,0.02 -0.05,0.04 -0.07,0.07 -0.01,0.02 -0.03,0.04 -0.05,0.06 -0.00,0.00 -0.01,0.01 -0.02,0.02 L 10.24,23.85 c -0.05,0.09 -0.08,0.19 -0.09,0.29 -8.88e-4,0.00 -0.00,0.01 -0.00,0.02 -4.44e-4,0.01 0.01,0.03 0.01,0.05 z M 24.74,4.98 35.30,22.65 24.74,17.81 Z M 23.36,17.81 12.58,22.66 23.36,4.94 Z m 0,1.51 V 30.75 L 12.34,24.29 Z m 1.38,11.41 V 19.33 l 10.80,4.95 z" stroke="#808080" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </span>
        );
    }
}

export class Eth2 extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, ...rest } = props;

        return (
            <span {...rest}>
                <svg
                    {...getIconStyle(style)}
                    viewBox="0 0 48 48"
                    fill="#808080"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                    <path
                    id="path2697"
                    d="m 24.53,44.07 c -0.11,-0.29 -0.16,-2.47 -0.10,-4.84 l 0.10,-4.30 5.33,-3.18 c 2.93,-1.75 5.59,-3.13 5.90,-3.07 0.40,0.08 -0.87,2.14 -4.54,7.33 -5.77,8.15 -6.37,8.88 -6.68,8.07 z m -7.13,-7.50 c -2.92,-4.15 -5.32,-7.66 -5.32,-7.80 0,-0.54 1.59,0.21 6.49,3.08 3.45,2.02 5.13,3.21 5.26,3.73 0.10,0.42 0.14,2.47 0.08,4.55 -0.08,3.02 -0.21,3.80 -0.64,3.88 -0.34,0.05 -2.48,-2.66 -5.86,-7.45 z m -0.26,-7.54 c -3.25,-1.92 -5.97,-3.69 -6.05,-3.93 -0.07,-0.24 1.08,-1.06 2.68,-1.87 3.14,-1.60 3.40,-1.97 0.42,-0.57 -2.31,1.07 -2.92,1.12 -2.76,0.23 0.06,-0.36 2.63,-4.83 5.71,-9.92 3.71,-6.14 5.77,-9.22 6.13,-9.16 0.82,0.13 0.99,13.44 0.18,14.33 -0.30,0.33 -1.93,1.23 -3.62,1.98 -1.68,0.75 -3.01,1.42 -2.94,1.49 0.07,0.07 1.45,-0.46 3.06,-1.18 4.09,-1.84 4.04,-1.91 4.04,5.47 0,4.36 -0.11,5.96 -0.46,6.25 -0.35,0.29 -1.92,-0.47 -6.38,-3.11 z m 7.21,-3.15 c 0,-6.05 0.03,-6.34 0.74,-6.60 l 0.74,-0.27 -0.74,-0.67 c -0.70,-0.63 -0.74,-1.06 -0.74,-7.65 0,-5.90 0.08,-6.98 0.53,-6.98 0.56,0 11.74,18.45 11.74,19.39 0,0.40 -0.24,0.48 -0.99,0.30 -0.95,-0.22 -0.94,-0.20 0.20,0.51 0.65,0.41 1.13,0.94 1.06,1.18 -0.18,0.61 -11.04,7.12 -11.87,7.12 -0.63,0 -0.67,-0.38 -0.67,-6.33 z m 8.30,-3.77 c -1.09,-0.57 -2.14,-1.04 -2.34,-1.04 -0.19,0 0.53,0.47 1.62,1.04 1.09,0.57 2.14,1.04 2.34,1.04 0.19,0 -0.53,-0.47 -1.62,-1.04 z m -4.33,-1.98 c -0.89,-0.47 -1.78,-0.87 -1.98,-0.87 -0.19,0 0.37,0.39 1.26,0.87 0.89,0.47 1.78,0.87 1.98,0.87 0.19,0 -0.37,-0.39 -1.26,-0.87 z"
                     />
                    </g>
                </svg>
            </span>
        );
    }
}

export class CustomIcon extends React.PureComponent {
    render() {
        const { props } = this;
        const { style, path, viewBox, fill} = props;

        return (
            <span>
                <svg
                    {...getIconStyle(style)}
                    viewBox={viewBox ? viewBox : "0 0 24 24"}
                    fill={fill || "currentColor"}
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g>
                    {path}
                    </g>
                </svg>
            </span>
        );
    }
}

function getIconStyle(style) {
    if (!style) {
        style = {};
    }
    return {
        style: {
            verticalAlign: 'middle',
            ...style,
            color: style.color ? style.color : DEFAULT_COLOR,
            height: '1em',
            width: '1em'
        }
    };
}
