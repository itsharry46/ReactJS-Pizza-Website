import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
    SocialLogoLink
} from './FooterElements';

function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>Pizza | <SocialLogoLink href='http://itsharry46.me/'>Hariharan Achary</SocialLogoLink></SocialLogo>
                            <SocialIcons>
                                <SocialIconLink href="/" target='_blank' aria-label="Facebook" rel="noopener noreferrer">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target='_blank' aria-label="Instagram" rel="noopener noreferrer">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target='_blank' aria-label="Youtube" rel="noopener noreferrer">
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>   
        </>
    )
}

export default Footer
