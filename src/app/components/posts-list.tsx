import PostCard from './post-card'

interface Props {
  posts: any
}

export function PostLists ({ posts }: Props) {
  return (
    <>
    {
        posts?.map((post: any) => {
          const {
            id,
            user,
            content
          } = post

          const {
            user_name: userName,
            name: userFullName,
            avatar_url: avatarUrl
          } = user

          return (
            <PostCard
              avatarUrl={avatarUrl}
              content={content}
              key={id}
              userFullName={userFullName}
              userName={userName}
            />
          )
        })
      }
    </>
  )
}
