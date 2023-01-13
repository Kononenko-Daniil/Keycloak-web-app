import { Button } from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";

const AuthButtons = () => {
    const { keycloak, initialized } = useKeycloak();

    return (
        <>
            <Button variant={'ghost'} onClick={() => keycloak.login()}>
                Sign in
            </Button>
            <Button variant={'ghost'} onClick={() => keycloak.register()}>
                Sign up
            </Button>
        </>
    )
}

export default AuthButtons;
