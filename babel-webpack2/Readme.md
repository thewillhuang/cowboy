
To run the example first setup your [AWS Credentials](http://apex.run/#aws-credentials), and ensure "role" in ./project.json is set to your Lambda function ARN.

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
$ echo '{   "urls": [
    "https://segment.com",
    "https://yahoo.com",
    "http://apex.run"
  ]}' | apex invoke requester-apex
```
