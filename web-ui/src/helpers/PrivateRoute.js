import { Text } from "@chakra-ui/react";
import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return (
        isLoggedIn ? 
            children : 
            <>
                <Text>You are not authenticated</Text>
            </>
    );
};

export default PrivateRoute;