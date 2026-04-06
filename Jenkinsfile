pipeline {
    agent any

    environment {
        APP_DIR = "/var/www/my-app"
    }

    stages {

        stage('Git Clone') {
            steps {
                echo "Code already checked out by Jenkins"
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                rm -rf $APP_DIR/*
                cp -r * $APP_DIR/

                cd $APP_DIR
                npm install

                pm2 delete myapp || true
                pm2 start app.js --name myapp
                pm2 save
                '''
            }
        }
    }
}
