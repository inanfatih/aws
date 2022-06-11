#!/bin/bash
curl --silent --location https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
sudo yum install -y git
cd home/ec2-user
git clone https://github.com/inanfatih/aws.git hbfl
cd hbfl
npm i
npm run start
