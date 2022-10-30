import { Input } from "../common/Input";
import { Container } from "./styles";

export default function Header() {
	return (
		<Container>
			<nav>
				<h1>
					post
					<span>
					Blog
					</span>
				</h1>

				<Input type="text" placeholder="Search a post" />
			</nav>
		</Container>
	);
}