import { Input } from "../common/Input";
import { Container } from "./styles";

export default function Header() {
	return (
		<Container>
			<nav>
				<h1>work
					<span>
					Blog
					</span>
				</h1>

				<Input type="text" placeholder="Search a job" />
			</nav>
		</Container>
	);
}