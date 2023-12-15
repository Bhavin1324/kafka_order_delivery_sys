/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Listeners;

import javax.enterprise.context.ApplicationScoped;
import javax.resource.ConnectionFactoryDefinition;

/**
 *
 * @author krdmo
 */
@ApplicationScoped
@ConnectionFactoryDefinition (
name = "java:app/kafka/factory",
interfaceName = "fish.payara.cloud.connectors.kafka.KafkaConnectionFactory",
resourceAdapter= "kafka-rar-0.1.0"
)
public class Config {
    
}
