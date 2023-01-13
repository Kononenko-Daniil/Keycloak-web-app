import { ChakraProvider, Container } from "@chakra-ui/react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "./pages/HomePage";
import SecuredPage from "./pages/SecuredPage";
import keycloak from "./keycloak";
import PrivateRoute from "./helpers/PrivateRoute";
import MyAccount from "./pages/MyAccount";

function App() {
	return (
		<ChakraProvider>
			<ReactKeycloakProvider authClient={keycloak} initOptions={{
          		checkLoginIframe: false,
            }}>
				<Navbar />
				<Container maxW={'5xl'}>
					<BrowserRouter>
						<Routes>
							<Route exact path="/" element={<HomePage />} />
							<Route 
								path="/secured" 
								element={
									<PrivateRoute>
										<SecuredPage />
									</PrivateRoute>
								} />
							<Route 
								path="/me" 
								element={
									<PrivateRoute>
										<MyAccount />
									</PrivateRoute>
								} />
						</Routes>
					</BrowserRouter>
				</Container>
			</ReactKeycloakProvider>
		</ChakraProvider>
	);
}

export default App;
