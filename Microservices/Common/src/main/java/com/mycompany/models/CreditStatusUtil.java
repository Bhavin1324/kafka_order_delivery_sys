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
public class CreditStatusUtil {
    public static String creditStatusToJson(CreditStatus status) {
        Jsonb jsonB = JsonbBuilder.create();
        return jsonB.toJson(status);
    }

    public static CreditStatus jsonToCreditStatus(String status) {
        Jsonb jsonb =JsonbBuilder.create();
        return jsonb.fromJson(status, CreditStatus.class);
    } 
}
