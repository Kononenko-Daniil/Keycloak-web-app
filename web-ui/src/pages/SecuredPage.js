import { Text } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web";

const SecuredPage = () => {
    const { keycloak, initialized } = useKeycloak();

    const getMe = () => {
        console.log(keycloak);
        fetch("https://localhost:7209/user/me", {
            headers: {
                'Authorization': `Bearer ${keycloak.token}`
            }
        }).then((result) => {
            return result;
        });
    }

    return (
        <>
            <Text>Congratulations you are on secured page! {getMe()}</Text>
        </>
    )
}

export default SecuredPage;
