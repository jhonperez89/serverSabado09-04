package seriede20;

import java.util.Scanner;


public class Seriede20 {

   
    public static void main(String[] args) {
        Scanner lea=new Scanner(System.in);
        int i,n;
        System.out.print("Digite el numero entero para generar la serie de 20 términos: ");
        n=lea.nextInt();
        for (i=n;i<=(n*20);i=i+n){
            System.out.println(i);
        }
    }
    
}
