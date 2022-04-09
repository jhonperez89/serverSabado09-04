/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package aerolinea;
import java.util.Scanner;
/**
 *
 * @author 209
 */
public class Aerolinea {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner lea= new Scanner (System.in);
        String nvuelo,fecha;
        int n,i,np, total;
        char destino;
        
        System.out.println("     Aeroliena Vieje Turtuoso");
        System.out.println("Digite cantidad de registros:");
        n=lea.nextInt(); 
        for (i=1;i<=n;i++){
            System.out.println("Número de vuelo");
            nvuelo=lea.next();
            System.out.println("Fecha del vuelo (dd/mm/yyyy):");
            fecha=lea.next();
            System.out.print("Cantidad de pasajeros:");
            np=lea.nextInt();
            
            System.out.println("Destino (1-Bogotá,2-Cali,3-Barranquilla):");
            destino=lea.next().charAt(0);
            switch (destino){
                case '1' :total=np*600000;
                             System.out.println("FEl vuelo "+nvuelo+" reacaudo $"+total);
                             break;
                case '2' :total=np*750000;
                             System.out.println("FEl vuelo "+nvuelo+" reacaudo $"+total);
                             break;
                case '3' :total=np*980000;
                             System.out.println("FEl vuelo "+nvuelo+" reacaudo $"+total);
                             break;
                
                default: System.out.println("Destino Inválido..");
            }
            
        }
        
    }
    
}
