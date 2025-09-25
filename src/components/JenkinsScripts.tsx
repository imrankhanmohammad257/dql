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
            echo "Build Successful :white_check_mark:"
        }
        failure {
            echo "Build Failed :x:"
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

        echo "Build Successful :white_check_mark:"
    } catch (err) {
        echo "Build Failed :x:"
        error("Pipeline failed: \${err}")
    }
}`}
        </code>
      </pre>
    </div>
  );
}
