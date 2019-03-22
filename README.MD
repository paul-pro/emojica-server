# Server for [Emojica](https://github.com/paul-pro/emojica)

This is the example of server for Emojica component.

Codesandbox [project](https://codesandbox.io/s/github/paul-pro/emojica-server)

Online demo [endpoint](https://k5k38xnq85.sse.codesandbox.io/)

------

### Emojica

Emojica is a modern lightweight component to provide emoji reactions in your apps.
You start an endpoint and just add emojica component wherever you want: blog posts, images, comments!

### Installing

- Clone this repository,
- Run `yarn` to install dependencies,
- Run `yarn start` to spin up your server,
- Ensure that `http:/localhost:8080` is up.

### Testing

Try following command in terminal:

```bash
curl 'https://k5k38xnq85.sse.codesandbox.io/api/em18' \
-H 'Origin: curl' \
-H 'Content-Type: application/json' \
--data '{ "emoji": "🚀"}'
```

### License

MIT



