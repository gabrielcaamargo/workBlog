import { createContext, useState } from "react";

interface PostContextProps {
	children: React.ReactNode
}

interface PostContext {
	postsList: {id: number; name: string; description: string}[],
	setPostsList: (setState: {id: number; name: string; description: string}[]) => void
}

const PostDefaultValues = {
	postsList: [
		{id: 1, name: "Post 1", description: "Lorem ipsum dolor sit amet"}
	],
	setPostsList: () => {}
};

export const PostContext = createContext<PostContext>(PostDefaultValues);

export default function PostContextProvider({children}: PostContextProps) {
	const [postsList, setPostsList] = useState([
		{id: 1, name: "Post 1", description: "lorem ipsum dolor sit amet"}
	]);

	return (
		<PostContext.Provider value={{postsList, setPostsList}}>
			{children}
		</PostContext.Provider>
	);
}