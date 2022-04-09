/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package múltiplo_siete;
import java.util.Scanner;
/**
 *
 * @author 209
 */
public class Múltiplo_Siete {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner lea= new Scanner (System.in);
        
        int i, f;
        
        System.out.print("Digite la cantidad de múltiplos de 7 a mostrar:");
        f=lea.nextInt();
        f=f*7;
        for (i=7; i<=f; i=i+7) {
            System.out.println(i);
        }
    }
    
}
