import { Box, Button, Container, Divider, HStack, Link, Spacer, Text } from "@chakra-ui/react"
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";
import AccountPreview from "../account-preview";
import AuthButtons from "../auth-buttons";

const Navbar = () => {
    const { keycloak, initialized } = useKeycloak();

    return (
        <>
            <Container maxW={'6xl'} mt={2} mb={2}>
                <HStack>
                    <Text fontSize={'lg'}>KeycloakTest</Text>
                    <Spacer />
                    <Link href="/">Home</Link>
                    <Spacer />
                    <Link href="/secured" w='full'>Secured page</Link>
                    <Box w='full' textAlign={'end'}>
                        { !keycloak.authenticated && (<AuthButtons />) }

                        {!!keycloak.authenticated && (<AccountPreview />)}
                    </Box>
                </HStack>
            </Container>
            <Divider mb={5} />
        </>
    )
}

export default Navbar;
