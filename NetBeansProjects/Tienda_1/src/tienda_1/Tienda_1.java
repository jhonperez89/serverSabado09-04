/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package tienda_1;
import java.util.Scanner;
/**
 *
 * @author 209
 */
public class Tienda_1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner lea= new Scanner (System.in);
        String noma;
        int n,i,cav;
        float pxu, total,desc,totald;
        
        System.out.print("Cantidad de registros:");
        n=lea.nextInt();
        for(i=1;i<=n;i++){
            System.out.print("Nombre del artículo:");
            noma=lea.next();
            System.out.print("Precio por unidad:");
            pxu=lea.nextFloat();
            System.out.print("Cantidad vendida:");
            cav=lea.nextInt();
            total=pxu*cav;
            if(total > 50000){
                desc=total*10/100;
                totald=total-desc;
                System.out.println("Nombre artículo:"+noma);
                System.out.println("Descuento del 10%:"+desc);
                System.out.println("Valor total con descuento $"+totald);
            }else{
                System.out.println("Valor sin descuento $"+total);
            }
        }
    }
    
}
