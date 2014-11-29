FROM base/archlinux
RUN pacman -Sy --noconfirm nodejs
ADD local-search.tar.gz /
WORKDIR /local-search
ENTRYPOINT node app.js
