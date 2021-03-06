## Project structure
Project is based on layered architecture pattern. 
* Controller - API endpoints
* Dao - Data access layer. Could be wrapped in to Repository layerin the future.
* Service - Bussines logic layer.
* Domain - DATA layer.


## Spring-boot
To start the app on default 8080 port
```mvn spring-boot:run```
### Swagger
```http://localhost:8080/swagger-ui/```
### H2
```http://localhost:8080/h2-console```

## Embedded Tomcat
To run app from war file
```mvn org.codehaus.cargo:cargo-maven2-plugin:1.7.7:run -Dcargo.maven.containerId=tomcat9x -Dcargo.servlet.port=8080 -Dcargo.maven.containerUrl=https://repo1.maven.org/maven2/org/apache/tomcat/tomcat/9.0.40/tomcat-9.0.40.zip```
### Swagger
```http://localhost:8080/kindergarten/swagger-ui/```
### H2
```http://localhost:8080/kindergarten/h2-console```

## Using different application property files
For development 
```mvn spring-boot:run -Dspring-boot.run.arguments=--spring.config.location=classpath:/application-local.properties```

## Building front end together with back end
```sh ./build.sh```