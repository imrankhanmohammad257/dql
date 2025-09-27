// dql/src/components/BashScripts.tsx
"use client";

export default function BashScripts() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-bold text-pink-700 text-center">
        🐚 Bash Scripting Interview Snippets
      </h2>

      {/* 1. Check if a directory exists */}
      <div>
        <h3 className="text-lg font-semibold mb-2">📂 1. How do you check if a directory exists in Bash?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
DIR="/path/to/directory"
if [ -d "$DIR" ]; then
  echo "Directory exists"
else
  echo "Directory does not exist"
fi`}
          </code>
        </pre>
      </div>

      {/* 2. Create multiple files */}
      <div>
        <h3 className="text-lg font-semibold mb-2">📝 2. How do you create multiple files in a loop?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
for i in {1..5}
do
  touch "file$i.txt"
done
echo "✅ 5 files created successfully."`}
          </code>
        </pre>
      </div>

      {/* 3. Backup a directory */}
      <div>
        <h3 className="text-lg font-semibold mb-2">💾 3. How do you take a backup of a directory?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
SRC="/path/to/source"
DEST="/path/to/backup"
tar -czvf backup_$(date +%F).tar.gz $SRC
echo "Backup completed"`}
          </code>
        </pre>
      </div>

      {/* 4. Install nginx */}
      <div>
        <h3 className="text-lg font-semibold mb-2">🌐 4. How do you install and start Nginx using Bash?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx`}
          </code>
        </pre>
      </div>

      {/* 5. Install Apache Tomcat */}
      <div>
        <h3 className="text-lg font-semibold mb-2">☕ 5. How do you install Apache Tomcat via script?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
sudo apt update
sudo apt install default-jdk wget -y
cd /opt
sudo wget https://downloads.apache.org/tomcat/tomcat-9/v9.0.80/bin/apache-tomcat-9.0.80.tar.gz
sudo tar -xvzf apache-tomcat-9.0.80.tar.gz
sudo mv apache-tomcat-9.0.80 tomcat9
sudo sh /opt/tomcat9/bin/startup.sh`}
          </code>
        </pre>
      </div>

      {/* 6. Check nginx status */}
      <div>
        <h3 className="text-lg font-semibold mb-2">🔍 6. How do you check if Nginx service is running?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
if systemctl is-active --quiet nginx; then
  echo "Nginx is running"
else
  echo "Nginx not running... starting"
  sudo systemctl start nginx
fi`}
          </code>
        </pre>
      </div>

      {/* 7. Check & create directory */}
      <div>
        <h3 className="text-lg font-semibold mb-2">📁 7. How do you create a directory if it doesn’t exist?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
DIR="/path/to/directory"
if [ ! -d "$DIR" ]; then
  mkdir -p "$DIR"
  echo "Directory created"
else
  echo "Directory already exists"
fi`}
          </code>
        </pre>
      </div>

      {/* 8. Delete last 3 lines */}
      <div>
        <h3 className="text-lg font-semibold mb-2">✂️ 8. How do you delete the last 3 lines from a file?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
sed -i '$d' filename
sed -i '$d' filename
sed -i '$d' filename`}
          </code>
        </pre>
      </div>

      {/* 9. Monitor CPU usage */}
      <div>
        <h3 className="text-lg font-semibold mb-2">⚡ 9. How do you monitor CPU usage & alert if >80%?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4}')
if (( $(echo "$CPU > 80" | bc -l) )); then
  echo "CPU usage above 80%" | mail -s "CPU Alert" user@example.com
fi`}
          </code>
        </pre>
      </div>

      {/* 10. Monitor Disk usage */}
      <div>
        <h3 className="text-lg font-semibold mb-2">💽 10. How do you monitor Disk usage & alert if >80%?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
USAGE=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ $USAGE -gt 80 ]; then
  echo "Disk usage above 80%" | mail -s "Disk Alert" user@example.com
fi`}
          </code>
        </pre>
      </div>

      {/* 11. Monitor Memory usage */}
      <div>
        <h3 className="text-lg font-semibold mb-2">🧠 11. How do you monitor Memory usage & alert if >80%?</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
          <code className="language-bash">
{`#!/bin/bash
MEM=$(free | awk '/Mem:/ {print $3/$2 * 100.0}')
if (( $(echo "$MEM > 80" | bc -l) )); then
  echo "Memory usage above 80%" | mail -s "Memory Alert" user@example.com
fi`}
          </code>
        </pre>
      </div>
    </div>
  );
}
