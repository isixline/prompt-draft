pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-16'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                          branches: [[name: 'main']],
                          userRemoteConfigs: [[url: 'git@github.com:isixline/prompt-draft.git']]])
            }
        }
        
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
           input {
                    message "Continue deploy?"
                    ok "Yes"
            }
            steps {
                script {
                    withCredentials([sshUserPrivateKey(credentialsId: 'SERVER_SSH_PRIVATE_KEY', keyFileVariable: 'identity')]) {
                        sh "ssh ${env.REMOTE_SERVER_USER}@${env.REMOTE_SERVER_HOST} 'whoami'"
                        sh "scp -r build/ ${env.REMOTE_SERVER_USER}@${env.REMOTE_SERVER_HOST}:${env.REMOTE_SERVER_TARGET}"
                    }
                }
            }
        }

    }

}
    

