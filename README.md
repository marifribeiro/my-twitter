# My Twitter

This is a personal project to study backend with Node, Express and React and keep me occupied :)

The idea is to build a copy of twitter from scratch, and keep adding features as long as I have time available.

## V1

The first version's goal is to:
- Allow for people to post tweets
- Allow for people to read other people tweets

For a MVP, I think this will do. The idea is launch it as it will not have a lot of users from the beginning. So, for now, there's no concept of followers or login.

Figma: https://www.figma.com/file/v2UjQKuzeI8PZh6fBGiFLj/My-twitter?type=design

Models: https://drive.google.com/file/d/10wWSLsvE1rnQywYDpTSv9bkXkq0rS1_j/view?usp=sharing

Contract:

We will need a single endpoint that returns all tweets ever made and that will be everybody's timeline.

GET /timeline

returns:

```
{
	result: [
		{
			content: "Content of that tweet",
			createdAt: timestamp,
			userHandle: "@marifrib",
			userName: "Mariana"
		},
		{
			content: "Content of that other tweet",
			createdAt: timestamp,
			userHandle: "@banana",
			userName: "The Banana"
		}
	]
}

```

You can access a user's account and see all their tweets:

GET /account/:user_handle

```
{
	result: [
		{
			content: "Content of that tweet",
			createdAt: timestamp,
			userHandle: "@marifrib",
			userName: "Mariana"
		},
		{
			content: "Content of that other tweet",
			createdAt: timestamp,
			userHandle: "@marifrib",
			userName: "Mariana"
		}
	]
}
```
