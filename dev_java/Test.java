import java.util.*;

public class Test{
    public static void main(String []args){
        new Thread(()->{
            while(true){
                try{
                System.out.println(new Date());
                Thread.sleep(30000);
                }catch(Exception e){
                    
                }
            }
        }).start();

    }
}