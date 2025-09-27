// dql/src/components/TerraformScripts.tsx
"use client";

export default function TerraformScripts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-purple-700">📂 Terraform Interview Scripts</h2>

      {/* 1. Launch EC2 with Nginx */}
      <p className="text-gray-700">🚀 Launch a t2.micro EC2 instance with Nginx installed using user_data.</p>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "nginx" {
  ami           = "ami-0886832e6b5c3b9e2"
  instance_type = "t2.micro"
  key_name      = "your-key-name"

  tags = { Name = "TestInstance" }

  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              amazon-linux-extras install -y nginx1
              systemctl enable nginx
              systemctl start nginx
              EOF
}`}
        </code>
      </pre>

      {/* 2. EC2 with Security Group */}
      <p className="text-gray-700">🔐 Create a security group that allows SSH (22) and HTTP (80) access.</p>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`resource "aws_security_group" "web_sg" {
  name   = "web-sg"
  vpc_id = data.aws_vpc.default.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`}
        </code>
      </pre>

      {/* 3. Multiple EC2 with count */}
      <p className="text-gray-700">⚡ Launch 3 EC2 instances using <code>count</code> with unique tags.</p>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`resource "aws_instance" "web" {
  count         = 3
  ami           = "ami-0886832e6b5c3b9e2"
  instance_type = "t2.micro"
  key_name      = "your-key-name"

  tags = {
    Name = "web-\${count.index + 1}"
  }
}`}
        </code>
      </pre>

      {/* 4. Custom VPC + Internet access */}
      <p className="text-gray-700">🌐 Create a custom VPC with public subnet, Internet Gateway, and route table.</p>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`resource "aws_vpc" "custom" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
}

resource "aws_subnet" "public" {
  vpc_id                  = aws_vpc.custom.id
  cidr_block              = "10.0.1.0/24"
  map_public_ip_on_launch = true
  availability_zone       = "us-east-1a"
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.custom.id
}

resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.custom.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }
}

resource "aws_route_table_association" "public_assoc" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public_rt.id
}`}
        </code>
      </pre>

      {/* 5. S3 bucket with versioning */}
      <p className="text-gray-700">📦 Create an S3 bucket with private ACL, tags, and versioning enabled.</p>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`resource "aws_s3_bucket" "dev_bucket" {
  bucket = "my-dev-bucket-unique-12345"
  acl    = "private"

  versioning { enabled = true }

  tags = { Environment = "dev" }
}`}
        </code>
      </pre>

      {/* 6. Remote State with S3 + DynamoDB */}
      <p className="text-gray-700">🗂️ Store Terraform remote state in S3 with DynamoDB table for state locking.</p>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`terraform {
  backend "s3" {
    bucket         = "my-terraform-state-bucket-unique-12345"
    key            = "envs/dev/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }
}`}
        </code>
      </pre>
    </div>
  );
}
