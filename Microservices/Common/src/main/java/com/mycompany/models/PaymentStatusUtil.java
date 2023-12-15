/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.models;

import javax.json.bind.Jsonb;
import javax.json.bind.JsonbBuilder;

/**
 *
 * @author krdmo
 */
public class PaymentStatusUtil {
    public static String paymentStatusToJson(PaymentStatus status) {
        Jsonb jsonB = JsonbBuilder.create();
        return jsonB.toJson(status);
    }

    public static PaymentStatus jsonToPaymentStatus(String status) {
        Jsonb jsonb =JsonbBuilder.create();
        return jsonb.fromJson(status, PaymentStatus.class);
    } 
}
