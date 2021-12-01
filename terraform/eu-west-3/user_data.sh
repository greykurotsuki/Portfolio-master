#!/bin/bash 
sudo apt-get update -y
sudo apt-get install ruby -y
sudo apt-get install wget -y
cd ~
wget https://aws-codedeploy-eu-west-3.s3.eu-west-3.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install pm2 -g