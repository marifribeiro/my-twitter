Figma: https://www.figma.com/file/v2UjQKuzeI8PZh6fBGiFLj/My-twitter?type=design

Models: https://drive.google.com/file/d/10wWSLsvE1rnQywYDpTSv9bkXkq0rS1_j/view?usp=sharing

Contract:

On the app's first version, there will be no concept of followers. So we will need a single endpoint that returns all tweets ever made and that will be everybody's timeline.

GET /timeline

returns:

```
{
  result: {
    content: "Content of that tweet",
    createdAt: timestamp,
    userHandle: "@marifrib",
    userName: "Mariana"
  }
}
```
