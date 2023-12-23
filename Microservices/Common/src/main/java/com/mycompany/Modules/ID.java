/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.Modules;

import java.util.UUID;

/**
 *
 * @author krdmo
 */
public class ID {
    public static String getUUID() {
        return UUID.randomUUID().toString().replaceAll("-", "").substring(0, 20);
    }
}
