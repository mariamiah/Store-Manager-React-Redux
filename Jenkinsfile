pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {      
    stage('Checkout the git repository') {
      steps {
        git branch: 'develop',  url: 'https://github.com/mariamiah/Store-Manager-React.git'
      }
    }       
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }    
    stage('Test') {
      steps {
         sh 'npm test -- -u --coverage'
      }
    }      
  }
}