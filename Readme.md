[![LambCI Master](https://lambci-public-buildresults-tqta6okzmswu.s3.amazonaws.com/gh/thewillhuang/rancher-in-apex/branches/master/2dbce416aa7f030824e89ac22faf7930.svg)]

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
$ apex invoke requester-apex < event.json
```
