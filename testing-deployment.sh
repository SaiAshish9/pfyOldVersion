#!/bin/bash
npm install
npm run build
tar czf testing-pracify-user-ui.tar.gz package.json package-lock.json public build
scp -i /home/roopam/.ssh/pracify_keys testing-pracify-user-ui.tar.gz ubuntu@35.154.0.19:/var/www/
rm testing-pracify-user-ui.tar.gz

ssh -i /home/roopam/.ssh/pracify_keys ubuntu@35.154.0.19 << 'ENDSSH'
sudo rm -rf /var/www/testing-pracify-user-ui
sudo mkdir /var/www/testing-pracify-user-ui
cd /var/www/
sudo tar xf testing-pracify-user-ui.tar.gz -C testing-pracify-user-ui
sudo rm testing-pracify-user-ui.tar.gz
cd testing-pracify-user-ui
ls
ENDSSH