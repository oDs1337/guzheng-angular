export interface Post{
  id?: any
	author: string,
	title: string,
	content: string,
	creationDate: string,
	imageUrlLarge: string
	imageUrlSmall?: string
	youtubeUrl: string
	upVotes: number
	downVotes: number
}
