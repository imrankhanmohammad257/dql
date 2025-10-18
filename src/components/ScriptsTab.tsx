// dql/src/components/K8sScripts.tsx
"use client";

export default function K8sScripts() {
  const scripts = [
    {
      title: "Pod",
      yaml: `---
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: nginx-container
      image: nginx:latest
      ports:
        - containerPort: 80`
    },
    {
      title: "Deployment",
      yaml: `---
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
            - containerPort: 80`
    },
    {
      title: "Service",
      yaml: `---
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
  type: NodePort`
    },
    {
      title: "ConfigMap",
      yaml: `---
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: production
  LOG_LEVEL: info`
    },
    {
      title: "Secret",
      yaml: `---
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: bXl1c2Vy
  password: cGFzc3dvcmQ=`
    },
    {
      title: "PersistentVolume + PersistentVolumeClaim",
      yaml: `---
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
      storage: 5Gi`
    },
    {
      title: "Horizontal Pod Autoscaler",
      yaml: `---
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
          averageUtilization: 50`
    },
    {
      title: "DaemonSet",
      yaml: `---
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
          image: fluent/fluentd:latest`
    },
    {
      title: "Ingress",
      yaml: `---
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
                  number: 80`
    },
    {
      title: "ServiceAccount + RBAC",
      yaml: `---
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
  apiGroup: rbac.authorization.k8s.io`
    },
    {
      title: "Job",
      yaml: `---
apiVersion: batch/v1
kind: Job
metadata:
  name: sample-job
spec:
  template:
    spec:
      containers:
        - name: hello
          image: busybox
          command: ["echo", "Hello Kubernetes"]
      restartPolicy: Never`
    },
    {
      title: "CronJob",
      yaml: `---
apiVersion: batch/v1
kind: CronJob
metadata:
  name: sample-cron
spec:
  schedule: "*/5 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: hello
              image: busybox
              command: ["echo", "Hello Cron"]
          restartPolicy: Never`
    },
    {
      title: "NetworkPolicy",
      yaml: `---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress`
    },
    {
      title: "Init Container",
      yaml: `---
apiVersion: v1
kind: Pod
metadata:
  name: init-demo
spec:
  initContainers:
    - name: init-myservice
      image: busybox
      command: ["sh", "-c", "echo Init completed"]
  containers:
    - name: myapp
      image: nginx`
    },
    {
      title: "Resource Limits",
      yaml: `---
apiVersion: v1
kind: Pod
metadata:
  name: limits-demo
spec:
  containers:
    - name: nginx
      image: nginx
      resources:
        limits:
          memory: "128Mi"
          cpu: "500m"
        requests:
          memory: "64Mi"
          cpu: "250m"`
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-green-700">📂 Kubernetes Scripts</h2>
      {scripts.map((s, idx) => (
        <div key={idx}>
          <h3 className="font-semibold text-lg">{`${idx + 1}. ${s.title}`}</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code className="language-yaml">{s.yaml}</code>
          </pre>
        </div>
      ))}
    </div>
  );
}
