To run the example first setup your [AWS Credentials](http://apex.run/#aws-credentials), and ensure "role" in ./project.json is set to your Lambda function ARN.

```
docker build -t lambda .; docker run lambda; docker cp $(docker ps -alq):/var/task/node_modules ./node_modules;
```
Install NPM dependencies:

```
$ npm install
```

Deploy the functions:

```
$ apex deploy
```

Try it out:

```
$ echo '{ "value": "Hello" }' | apex invoke uppercase
```

```
$ apex invoke requester-apex < event.json
```
