import { Container } from "./styles";

interface PostProps {
	name: string;
	description: string
}

export default function Post({name, description}: PostProps) {
	return (
		<Container>
			<h1>{name}</h1>
			<p>{description}</p>
		</Container>
	);
}