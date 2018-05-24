import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {
    render() {
        var isActive = this.context.router.route.location.pathname === this.props.to;
        var className = isActive ? 'listItemActive' : 'listItemInactive';
        className += ' listItem listItemSocialMedia';

        return(
            <li className={className}>
                <a className="rightNavLink navLink" {...this.props}>
                        {this.props.children}
                </a>
            </li>
        );
    }
}

NavItem.contextTypes = {
    router: PropTypes.object
};

export default NavItem;