import * as React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';

const MyMenu = ({ onMenuClick, logout }: { onMenuClick: any, logout: any }) => {
    const isXSmall = useMediaQuery((theme: any) => theme.breakpoints.down('xs'));
    const open = useSelector((state: any) => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <div>
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
            {isXSmall && logout}
        </div>
    );
};

export default MyMenu;