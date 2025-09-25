// dql/src/components/ScriptsTab.tsx
"use client";

export default function ScriptsTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-green-700">📂 Bash Scripts</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Check if nginx is running, else start it
if systemctl is-active --quiet nginx; then
  echo "Nginx is running"
else
  echo "Nginx not running... starting"
  sudo systemctl start nginx
fi`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-green-700">📂 Ansible Playbooks</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Install Nginx
  hosts: web
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present`}
        </code>
      </pre>

      <h2 className="text-xl font-semibold text-green-700">📂 Terraform Scripts</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-hcl">
{`provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0886832e6b5c3b9e2"
  instance_type = "t2.micro"
}`}
        </code>
      </pre>
    </div>
  );
}
