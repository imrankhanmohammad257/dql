// dql/src/components/K8sScripts.tsx
"use client";

export default function K8sScripts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-green-700">📂 Kubernetes Scripts</h2>

      {/* 1. Pod */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: nginx-container
      image: nginx:latest
      ports:
        - containerPort: 80`}
        </code>
      </pre>

      {/* 2. Deployment */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80`}
        </code>
      </pre>

      {/* 3. Service */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: NodePort`}
        </code>
      </pre>

      {/* 4. ConfigMap */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: production
  LOG_LEVEL: info`}
        </code>
      </pre>

      {/* 5. PersistentVolume + PersistentVolumeClaim */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-demo
spec:
  capacity:
    storage: 5Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: /mnt/data

---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-demo
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi`}
        </code>
      </pre>
    </div>
  );
}
