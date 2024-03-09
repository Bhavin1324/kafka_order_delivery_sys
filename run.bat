start java -jar payara-micro-5.2022.5.jar --deploy Microservices\CustomerService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\CustomerService\artifact\CustomerService.war --noCluster --port 8083 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

start java -jar payara-micro-5.2022.5.jar --deploy Microservices\ManagementService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\ManagementService\artifact\ManagementService.war --noCluster --port 8084 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

start java -jar payara-micro-5.2022.5.jar --deploy Microservices\OrderingService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\OrderingService\artifact\OrderingService.war --noCluster --port 8085 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

start java -jar payara-micro-5.2022.5.jar --deploy Microservices\PaymentService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\PaymentService\artifact\PaymentService.war --noCluster --port 8086 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

start java -jar payara-micro-5.2022.5.jar --deploy Microservices\PreparationService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\PreparationService\artifact\PreparationService.war --noCluster --port 8087 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

start java -jar payara-micro-5.2022.5.jar --deploy Microservices\DeliveryService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\DeliveryService\artifact\DeliveryService.war --noCluster --port 8088 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar
