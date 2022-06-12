#!/bin/bash
sudo apt-get update
sudo apt-get -y install git
rm -rf /home/bitnami/hbfl
git clone https://github.com/inanfatih/aws.git /home/bitnami/hbfl
chown -R bitnami: /home/bitnami/hbfl
cd /home/bitnami/hbfl
sudo npm ci
sudo npm run start

# The above commands base64 encoded for entering into UserData
# IyEvYmluL2Jhc2gKc3VkbyBhcHQtZ2V0IHVwZGF0ZQpzdWRvIGFwdC1nZXQgLXkgaW5zdGFsbCBnaXQKcm0gLXJmIC9ob21lL2JpdG5hbWkvaGJmbApnaXQgY2xvbmUgaHR0cHM6Ly9naXRodWIuY29tL2luYW5mYXRpaC9hd3MuZ2l0IC9ob21lL2JpdG5hbWkvaGJmbApjaG93biAtUiBiaXRuYW1pOiAvaG9tZS9iaXRuYW1pL2hiZmwKY2QgL2hvbWUvYml0bmFtaS9oYmZsCnN1ZG8gbnBtIGNpCnN1ZG8gbnBtIHJ1biBzdGFydA==