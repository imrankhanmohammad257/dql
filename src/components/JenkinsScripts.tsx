// dql/src/components/JenkinsScripts.tsx
"use client";

export default function JenkinsScripts() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-yellow-700">📂 Jenkins Pipelines</h2>

      {/* Declarative Pipeline */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-groovy">
{`// Declarative Jenkins Pipeline
pipeline {
    agent any

    environment {
        SONARQUBE = 'SonarQubeServer'
        NEXUS = 'NexusServer'
        SLACK_CHANNEL = '#ci-notifications'
    }

    stages {
        stage('Git Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/username/repo.git'
            }
        }

        stage('Maven Build') {
            steps {
                sh 'mvn clean install'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh 'mvn sonar:sonar'
                }
            }
        }

        stage('Nexus Upload') {
            steps {
                sh 'mvn deploy'
            }
        }
    }

    post {
        success {
            slackSend(channel: "#ci-notifications", message: "Build Successful :white_check_mark:")
        }
        failure {
            slackSend(channel: "#ci-notifications", message: "Build Failed :x:")
        }
    }
}`}
        </code>
      </pre>

      {/* Scripted Pipeline */}
      <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
        <code className="language-groovy">
{`// Scripted Jenkins Pipeline
node {
    def SLACK_CHANNEL = '#ci-notifications'

    try {
        stage('Git Clone') {
            git branch: 'main', url: 'https://github.com/username/repo.git'
        }

        stage('Maven Build') {
            sh 'mvn clean install'
        }

        stage('SonarQube Analysis') {
            withSonarQubeEnv('SonarQubeServer') {
                sh 'mvn sonar:sonar'
            }
        }

        stage('Nexus Upload') {
            sh 'mvn deploy'
        }

        slackSend(channel: "#ci-notifications", message: "Build Successful :white_check_mark:")
    } catch (err) {
        slackSend(channel: "#ci-notifications", message: "Build Failed :x:")
        error("Pipeline failed: \\${err}")
    }
}`}
        </code>
      </pre>
    </div>
  );
}
