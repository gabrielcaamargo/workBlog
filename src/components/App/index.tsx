import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/GlobalStyles";
import Router from "../../routes";

import appTheme from "../../assets/styles/themes/appTheme";

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={appTheme}>
				<GlobalStyles />
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
}