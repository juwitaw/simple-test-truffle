FROM juwitaw/truffle-base-image:0.0.3
MAINTAINER Juwita Winadwiastuti <juwita.winadwiastuti@dattabot.io>
RUN mkdir /simpletets && apk --update add python py-pip git make g++
WORKDIR /simpletests
ADD . /simpletests/
RUN npm install