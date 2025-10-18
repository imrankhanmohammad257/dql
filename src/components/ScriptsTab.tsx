// dql/src/components/ScriptsTab.tsx
"use client";

export default function ScriptsTab() {
  return (
    <div className="space-y-6">
      {/* Ansible Playbooks */}
      <h2 className="text-xl font-semibold text-green-700">📂 Ansible Playbooks</h2>

      {/* Create a user */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Create a user
  hosts: all
  become: yes
  tasks:
    - name: Add user 'john'
      user:
        name: john
        state: present
        groups: sudo
        shell: /bin/bash`}
        </code>
      </pre>

      {/* Copy a file */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Copy configuration file
  hosts: all
  become: yes
  tasks:
    - name: Copy nginx.conf
      copy:
        src: files/nginx.conf
        dest: /etc/nginx/nginx.conf
        owner: root
        group: root
        mode: '0644'`}
        </code>
      </pre>

      {/* Install multiple packages */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Install multiple packages
  hosts: all
  become: yes
  tasks:
    - name: Install git, curl, and wget
      apt:
        name:
          - git
          - curl
          - wget
        state: present`}
        </code>
      </pre>

      {/* Restart a service */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Ensure nginx is running
  hosts: web
  become: yes
  tasks:
    - name: Start nginx
      service:
        name: nginx
        state: started
        enabled: yes`}
        </code>
      </pre>

      {/* Deploy a simple web app */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Deploy a simple web app
  hosts: web
  become: yes
  tasks:
    - name: Copy app files
      copy:
        src: /home/ansible/app/
        dest: /var/www/html/
        owner: www-data
        group: www-data
        mode: '0755'
    - name: Restart nginx
      service:
        name: nginx
        state: restarted`}
        </code>
      </pre>

      {/* Update and upgrade system */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Update and upgrade system
  hosts: all
  become: yes
  tasks:
    - name: Update apt cache
      apt:
        update_cache: yes
    - name: Upgrade all packages
      apt:
        upgrade: dist`}
        </code>
      </pre>

      {/* Fetch remote file */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Download file from remote URL
  hosts: all
  become: yes
  tasks:
    - name: Fetch remote file
      get_url:
        url: https://example.com/file.txt
        dest: /tmp/file.txt`}
        </code>
      </pre>

      {/* Execute a shell command */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Run shell command
  hosts: all
  become: yes
  tasks:
    - name: Check disk usage
      shell: df -h
      register: disk_usage
    - debug:
        var: disk_usage.stdout_lines`}
        </code>
      </pre>

      {/* Install Docker */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Install Docker
  hosts: all
  become: yes
  tasks:
    - name: Install prerequisites
      apt:
        name: [apt-transport-https, ca-certificates, curl, gnupg, lsb-release]
        state: present
    - name: Add Docker GPG key
      apt_key:
        url: https://download.docker.com/linux/ubuntu/gpg
        state: present
    - name: Add Docker repo
      apt_repository:
        repo: deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable
    - name: Install Docker
      apt:
        name: docker-ce
        state: present
        update_cache: yes`}
        </code>
      </pre>

      {/* Deploy Nginx on multiple servers */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
- name: Deploy Nginx on multiple servers
  hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
    - name: Ensure nginx is running
      service:
        name: nginx
        state: started
        enabled: yes`}
        </code>
      </pre>

      {/* Terraform Scripts */}
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
