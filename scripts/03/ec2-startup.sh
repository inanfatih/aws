#!/bin/bash
curl --silent --location https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
sudo yum install -y git
cd home/ec2-user
git clone https://github.com/inanfatih/aws.git
cd hbfl
npm i
npm run start

# The above commands base64 encoded for entering into UserData
# IyEvYmluL2Jhc2gKY3VybCAtLXNpbGVudCAtLWxvY2F0aW9uIGh0dHBzOi8vcnBtLm5vZGVzb3VyY2UuY29tL3NldHVwXzE2LnggfCBzdWRvIGJhc2ggLQpzdWRvIHl1bSBpbnN0YWxsIC15IG5vZGVqcwpzdWRvIHl1bSBpbnN0YWxsIC15IGdpdApjZCBob21lL2VjMi11c2VyCmdpdCBjbG9uZSBodHRwczovL2dpdGh1Yi5jb20vaW5hbmZhdGloL2F3cy5naXQKY2QgaGJmbApucG0gaQpucG0gcnVuIHN0YXJ0