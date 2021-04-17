import React from 'react';

import { toType } from './../helpers/util';

//clibboard icon
import { CustomIcon } from './icons';

//theme
import Theme from './../themes/getStyle';

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        
        const { clickCallback, src, namespace } = this.props;


        clickCallback({
            src: src,
            namespace: namespace,
            name: namespace[namespace.length - 1]
        });
    };

    getClippyIcon = () => {
        const { theme} = this.props;

        return <CustomIcon class="copy-icon" {...this.props} {...Theme(theme, 'copy-icon')} />;
    };

    render() {
        const { src, theme, hidden, rowHovered, title } = this.props;
        let style = Theme(theme, 'copy-to-clipboard').style;
        let display = 'inline';

        if (hidden) {
            display = 'none';
        }

        return (
            <span
                className="copy-to-clipboard-container"
                title={title ? title : ""}
                style={{
                    verticalAlign: 'top',
                    display: 'inline-block'
                }}
            >
                <span
                    style={{
                        ...style,
                        display: display
                    }}
                    onClick={this.handleClick}
                >
                    {this.getClippyIcon()}
                </span>
            </span>
        );
    }
}
