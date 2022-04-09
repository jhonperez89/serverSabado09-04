
package tienda;

import java.util.Scanner;

public class Tienda {

    
    public static void main(String[] args) {
      Scanner lea=new Scanner(System.in);
      int i,k,cav;
      float vtotal,vtotald,desc,pxu;
      String noma;
      
      ///
      System.out.print("Digite el número de registros a procesar: ");
      k=lea.nextInt();
      for (i=1;i<=k;i++){
          System.out.println("Nombre del Artículo: ");
          noma=lea.next();
          System.out.println("Cantidad de articulos vendidos");
          cav=lea.nextInt();
          System.out.println("Precio por unidad: ");
          pxu=lea.nextFloat();
          
          vtotal=pxu*cav;
          if (vtotal>50000){
              desc=vtotal*10/100;
              vtotald=vtotal-desc;
              System.out.println("El articulo mas" +noma+ "tiene un descuento del 10% correspondiente $ "+desc+ "por tanto debe pagar $"+vtotald);
          }else{
              System.out.println("Su articulo no tiene descuento por perro, por tanto paga $"+vtotal);
          }
      }
      
    }
    
}
