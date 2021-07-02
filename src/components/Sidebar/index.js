import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, handleOpen}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={handleOpen}>
                <Icon onClick={handleOpen}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={handleOpen}>
                            About
                        </SidebarLink>
                        <SidebarLink to='discover' onClick={handleOpen}>
                            Discover
                        </SidebarLink>
                        <SidebarLink to='services' onClick={handleOpen}>
                            Services
                        </SidebarLink>
                        <SidebarLink to='signup' onClick={handleOpen}>
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
