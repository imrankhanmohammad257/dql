// dql/src/components/TerraformScripts.tsx
"use client";

export default function TerraformScripts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-purple-700">📂 Terraform Scripts</h2>

      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0886832e6b5c3b9e2"
  instance_type = "t2.micro"
}

output "public_ip" {
  value = aws_instance.web.public_ip
}`}
        </code>
      </pre>

      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`resource "aws_security_group" "allow_http" {
  name        = "allow_http"
  description = "Allow HTTP traffic"
  vpc_id      = "default"

  ingress {
    description = "HTTP"
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
    </div>
  );
}
