# # on lambci
# $HOME/.yarn/bin/yarn install;
# yarn;
# ../../node_modules/.bin/webpack --config ../../webpack.config.js;

# # on local
# docker build -t lambda .;
# docker run lambda;
# docker cp $(docker ps -alq):/var/task/node_modules ./node_modules;
