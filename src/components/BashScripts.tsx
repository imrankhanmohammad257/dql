// dql/src/components/BashScripts.tsx
"use client";

export default function BashScripts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-pink-700">📂 Bash Scripts</h2>

      {/* 1. Check if a directory exists */}
      <h3 className="text-lg font-semibold mb-2">📁 1. How do you check if a directory exists?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 1: Check if directory exists
DIR="/path/to/directory"
if [ -d "$DIR" ]; then
  echo "Directory exists"
else
  echo "Directory does not exist"
fi`}
        </code>
      </pre>

      {/* 2. Create multiple files */}
      <h3 className="text-lg font-semibold mb-2">📝 2. How do you create multiple files in a loop?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 2: Create multiple files
for i in {1..5}
do
  touch "file$i.txt"
done
echo "✅ 5 files created successfully."`}
        </code>
      </pre>

      {/* 3. Backup a directory */}
      <h3 className="text-lg font-semibold mb-2">💾 3. How do you backup a directory?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 3: Backup directory
SRC="/path/to/source"
DEST="/path/to/backup"
tar -czvf backup_$(date +%F).tar.gz $SRC
echo "Backup completed"`}
        </code>
      </pre>

      {/* 4. Install nginx */}
      <h3 className="text-lg font-semibold mb-2">🌐 4. How do you install and start nginx?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 4: Install nginx
sudo apt update
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx`}
        </code>
      </pre>

      {/* 5. Install Apache Tomcat */}
      <h3 className="text-lg font-semibold mb-2">🔥 5. How do you install Apache Tomcat?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 5: Install Apache Tomcat
sudo apt update
sudo apt install default-jdk wget -y
cd /opt
sudo wget https://downloads.apache.org/tomcat/tomcat-9/v9.0.80/bin/apache-tomcat-9.0.80.tar.gz
sudo tar -xvzf apache-tomcat-9.0.80.tar.gz
sudo mv apache-tomcat-9.0.80 tomcat9
sudo sh /opt/tomcat9/bin/startup.sh`}
        </code>
      </pre>

      {/* 6. Check if nginx service is running */}
      <h3 className="text-lg font-semibold mb-2">⚡ 6. How do you check if nginx is running and start if not?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 6: Check nginx status
if systemctl is-active --quiet nginx; then
  echo "Nginx is running"
else
  echo "Nginx not running... starting"
  sudo systemctl start nginx
fi`}
        </code>
      </pre>

      {/* 7. Check and create directory if not exists */}
      <h3 className="text-lg font-semibold mb-2">📂 7. How do you check and create a directory if it does not exist?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 7: Check and create directory
DIR="/path/to/directory"
if [ ! -d "$DIR" ]; then
  mkdir -p "$DIR"
  echo "Directory created"
else
  echo "Directory already exists"
fi`}
        </code>
      </pre>

      {/* 8. Delete last 3 lines from a file */}
      <h3 className="text-lg font-semibold mb-2">🗑️ 8. How do you delete last 3 lines from a file?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 8: Delete last 3 lines
sed -i '$d' filename
sed -i '$d' filename
sed -i '$d' filename`}
        </code>
      </pre>

      {/* 9. Monitor CPU usage */}
      <h3 className="text-lg font-semibold mb-2">⚡ 9. How do you monitor CPU usage &amp; alert if &gt;80%?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 9: Monitor CPU usage
CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4}')
if (( $(echo "$CPU > 80" | bc -l) )); then
  echo "CPU usage above 80%" | mail -s "CPU Alert" user@example.com
fi`}
        </code>
      </pre>

      {/* 10. Monitor Disk usage */}
      <h3 className="text-lg font-semibold mb-2">💽 10. How do you monitor Disk usage &amp; alert if &gt;80%?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 10: Monitor Disk usage
USAGE=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ $USAGE -gt 80 ]; then
  echo "Disk usage above 80%" | mail -s "Disk Alert" user@example.com
fi`}
        </code>
      </pre>

      {/* 11. Monitor Memory usage */}
      <h3 className="text-lg font-semibold mb-2">🧠 11. How do you monitor Memory usage &amp; alert if &gt;80%?</h3>
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-bash">
{`#!/bin/bash
# Script 11: Monitor Memory usage
MEM=$(free | awk '/Mem:/ {print $3/$2 * 100.0}')
if (( $(echo "$MEM > 80" | bc -l) )); then
  echo "Memory usage above 80%" | mail -s "Memory Alert" user@example.com
fi`}
        </code>
      </pre>
    </div>
  );
}
