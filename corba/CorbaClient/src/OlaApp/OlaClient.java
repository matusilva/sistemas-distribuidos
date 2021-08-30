package OlaApp;

import org.omg.CORBA.ORB;
import org.omg.CosNaming.NamingContextExtHelper;

public class OlaClient {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			ORB orb = ORB.init(args, null);
			
			org.omg.CORBA.Object objRef = orb.resolve_initial_references("NameService");
			org.omg.CosNaming.NamingContextExt ncRef = NamingContextExtHelper.narrow(objRef);
			
			OlaApp.Ola olaobjeto = (OlaApp.Ola) OlaApp.OlaHelper.narrow(ncRef.resolve_str("ABC"));
			
			System.out.println("Bem vindo ao Sistema...");
			
			String s = olaobjeto.msg();
			System.out.println("A mensagem é: " + s);
			System.out.println("-------------------");	
		
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}

}
