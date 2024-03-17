## Simple CI/CD Pipeline with full control by AWS Services

#### Services In Used
- AWS CodePipeline: Acting as a transfer station, CodePipeline will trigger code build when there are changes on the Source Provider (ex: Github). After the build process is successful, CodePipeline will trigger Code Deploy through ECS.
- AWS CodeBuild: Build source code to container image, after that push this image to AWS ECR.
- AWS Container Registry: container storage place.
- VPC Endpoint: Because our Application is place inside a private subnet, that means the connection from the Application cannot go to AWS Services, VPC Endpoint work as a transmission for data between the Application and AWS Services.
- Application Load Balancer: Place in public subnet, get traffic from internet and pass it to Application
- S3, CloudWatch: Storage, and Logs

#### Diagram
<img src="https://github.com/vanntrong/demo-cicd-pipeline-aws/blob/main/diagram.png"/>
