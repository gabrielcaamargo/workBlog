import { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Post from "../Post";
import { Container } from "./styles";

export default function PostsList() {

	const {postsList} = useContext(PostContext);

	return (
		<Container>
			{postsList.map(post => (
				<Post
					key={post.id}
					name={post.name}
					description={post.description}
				/>
			))}
		</Container>
	);
}