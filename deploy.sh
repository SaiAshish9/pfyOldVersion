#!/bin/bash
npm install
npm run build
tar czf pracify-user-ui.tar.gz package.json package-lock.json public build
scp -i /home/roopam/.ssh/pracify_keys pracify-user-ui.tar.gz ubuntu@35.154.129.241:/var/www/
rm pracify-user-ui.tar.gz

ssh -i /home/roopam/.ssh/pracify_keys ubuntu@35.154.129.241 << 'ENDSSH'
rm -rf /var/www/pracify-user-ui
mkdir /var/www/pracify-user-ui
cd /var/www/
tar xf pracify-user-ui.tar.gz -C pracify-user-ui
rm pracify-user-ui.tar.gz
cd pracify-user-ui
ls
ENDSSH