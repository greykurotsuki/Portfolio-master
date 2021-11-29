terraform {
  backend "s3" {
    bucket         = "temp-tfstate-lock"
    key            = "backend/terraform.tfstate"
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
  shared_credentials_file = "~/.aws/credentials"
  profile                 = "kurtsuki"
  region                  = "eu-west-3"
}

resource "aws_instance" "web-server" {
  ami                     = "ami-0df7d9cc2767d161cd"  # Ubuntu 18.04
  instance_type           = "t2.micro"
  vpc_security_group_ids  = [aws_security_group.webserver.id]
  iam_instance_profile    = "CodeDeployInstanceRole"
  tags                    = { Name = "CodeDeploy_Server" }
  user_data               = file("user_data.sh")
} 

# Create a s3 bucket to keep .tfstate file
resource "aws_s3_bucket" "s3-tfstate" {
  bucket = "temp-tfstate-lock"
  acl    = "private"
  
  object_lock_configuration{
    object_lock_enabled = "Enabled"
  }

  versioning {
    enabled = true
  }

  tags = {
    Name        = "temp-tfstate"
    Environment = "Dev"
  }
}

# Create a DynamoDB table to lock tfstate file at S3 bucket
resource "aws_dynamodb_table" "aws-terraform-states-lock" {
  name = "aws-terraform-states-lock"
  hash_key = "LockID"
  read_capacity = 20
  write_capacity = 20
 
  attribute {
    name = "LockID"
    type = "S"
  }
}

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

  ingress {
    from_port        = 443
    to_port          = 443
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