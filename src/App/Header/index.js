import React from "react"
import { StyledHeader, Text, Logo } from "./styled"


const Header = () => (
  <StyledHeader>
    <Text>
      Kantor wymiany walut
    </Text>
    <Logo
      alt="logo"
      src="https://cdn.onlinewebfonts.com/svg/img_353628.png"
    />
  </StyledHeader>
)

export default Header