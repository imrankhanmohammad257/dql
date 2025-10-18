"use client";

export default function K8sScripts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-green-700">📂 Kubernetes Scripts</h2>

      {/* Pod Example */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: nginx
      image: nginx:latest
      ports:
        - containerPort: 80`}
        </code>
      </pre>
    </div>
  );
}
