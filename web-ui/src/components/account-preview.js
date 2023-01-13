import { Avatar, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

const AccountPreview = () => {
    const { keycloak, initialized } = useKeycloak();

    const GoToMyAccount = () => {
        window.location.pathname = '/me';
    }

    return (
        <>
            <Menu>
                <MenuButton as={Avatar} src='https://bit.ly/broken-link' size='md' />
                <MenuList>
                    <MenuItem onClick={GoToMyAccount}>My Account</MenuItem>
                    <MenuItem onClick={() => keycloak.logout()}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </>
    )
}

export default AccountPreview;
