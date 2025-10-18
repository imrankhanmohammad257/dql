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

      {/* 5. Secret */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: bXl1c2Vy
  password: cGFzc3dvcmQ=`}
        </code>
      </pre>

      {/* 6. PV + PVC */}
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

      {/* 7. Horizontal Pod Autoscaler */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: nginx-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: nginx-deployment
  minReplicas: 2
  maxReplicas: 5
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 50`}
        </code>
      </pre>

      {/* 8. DaemonSet */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd-daemon
spec:
  selector:
    matchLabels:
      app: fluentd
  template:
    metadata:
      labels:
        app: fluentd
    spec:
      containers:
        - name: fluentd
          image: fluent/fluentd:latest`}
        </code>
      </pre>

      {/* 9. Ingress */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-ingress
spec:
  rules:
    - host: example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: nginx-service
                port:
                  number: 80`}
        </code>
      </pre>

      {/* 10. ServiceAccount + RBAC */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-yaml">
{`---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: dev-sa

---
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: dev-role
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "create", "delete"]

---
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: dev-rolebinding
subjects:
  - kind: ServiceAccount
    name: dev-sa
roleRef:
  kind: Role
  name: dev-role
  apiGroup: rbac.authorization.k8s.io`}
        </code>
      </pre>
    </div>
  );
}
