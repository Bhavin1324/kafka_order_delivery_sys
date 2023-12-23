1. Clone the repository using the following command:
git clone https://github.com/Bhavin1324/kafka_order_delivery_sys.git

2. Switch to branch 'kiyan'.

3. Open netbeans IDE and open the 'Microservices' POM project.

4. Open 'OrderingService', 'CustomerService' and 'PaymentService' from the project.

5. Build these files individually and check if the artifact folder has appeared inside each project folder.

6. Execute the following commands to run the services:

java -jar payara-micro-5.2022.5.jar --deploy Microservices\OrderingService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\OrderingService\artifact\OrderingService.war --noCluster --port 8085 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

java -jar payara-micro-5.2022.5.jar --deploy Microservices\PaymentService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\PaymentService\artifact\PaymentService.war --noCluster --port 8086 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

java -jar payara-micro-5.2022.5.jar --deploy Microservices\CustomerService\target\dependency\kafka-rar-0.1.0.rar --deploy Microservices\CustomerService\artifact\CustomerService.war --noCluster --port 8083 --domainconfig domain.xml --addlibs mysql-connector-java-8.0.28.jar

7. Open postman and make a POST request on the URL: http://localhost:8085/OrderingService/rest/ordering/addOrder

8. Add a JSON object according to the contents in your database like shown in this example:

{
    "items":[
        {
            "id":"",
            "quantity":2,
            "orderId":{},
            "itemId":{
                "id":"uio",
                "name":"Margherita",
                "category_id":"qwe",
                "description":"Cheese and tomato",
                "taxSlabId":{
                    "id":"rti",
                    "percentage":12
                },
                "price":400,
                "item_image":"",
                "is_veg":1
            }

        }
    ],
    "paymentMethod":"CREDIT",
    "userId":"abc",
    "outletId":"asd"
}

9. Check the payara micro consoles of the services to see messages of transmission and check the 'order_master' table. If there is a new order with status 'CANCELLED' or 'PREPARING' the app is working.

