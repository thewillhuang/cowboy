FROM lambci/lambda:build

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

COPY ./package.json .

RUN $HOME/.yarn/bin/yarn install
