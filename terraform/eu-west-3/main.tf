terraform {
  backend "s3" {
    bucket         = "temp-tfstate-lock"
    key            = "eu-west-3/terraform.tfstate"
    dynamodb_table = "aws-terraform-states-lock"
    encrypt        = true
    region         = "eu-west-3"
  }
  
  required_providers {
      aws = {
          version  = "~> 3.0"
      }
  }
  required_version = ">= 0.13"
}

provider "aws" {
  region                  = "eu-west-3"
}

#############################################
#                Instance
#############################################
resource "aws_instance" "web-server" {
  ami                     = "ami-06ad2ef8cd7012912"  # Ubuntu 18.04
  instance_type           = "t2.micro"
  vpc_security_group_ids  = [aws_security_group.webserver.id]
  iam_instance_profile    = "CodeDeployInstanceRole"
  tags                    = { Name = "CodeDeploy_Server" }
  user_data               = file("user_data.sh")
} 

#############################################
#             Security Group
#############################################
resource "aws_security_group" "webserver" {
  name               = "webserver1"

  ingress {
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

 ingress {
    from_port        = 3000  # We will run our application on this port
    to_port          = 3000
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
  }
}
