import React from 'react';

import { toType } from './../helpers/util';

//clibboard icon
import * as icons from './icons';
import { CustomIcon } from './icons';

//theme
import Theme from './../themes/getStyle';

export default class extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    handleClick = () => {

        const { clickCallback, src, namespace } = this.props;
        const obj = {...src};
        delete obj.jsonConfig;

        clickCallback({
            src: obj,
            namespace: namespace,
            name: namespace[namespace.length - 1]
        });
    };

    getClippyIcon = () => {
        const { theme, icon} = this.props;
        const Elem = icons[icon] ? icons[icon] : CustomIcon;
        return <Elem class="copy-icon" {...this.props} {...Theme(theme, 'copy-icon')} />;
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
