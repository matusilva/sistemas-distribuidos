package OlaApp;

import org.omg.CORBA.ORB;
import org.omg.CosNaming.NamingContextExtHelper;
import org.omg.PortableServer.POA;
import org.omg.PortableServer.POAHelper;

public class OlaServer {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			ORB orb = ORB.init(args, null);
			
			POA rootpoa = POAHelper.narrow(orb.resolve_initial_references("RootPOA"));
			rootpoa.the_POAManager().activate();
			
			OlaServo olaobjeto = new OlaServo();
			olaobjeto.setORB(orb);
			
			org.omg.CORBA.Object ref = rootpoa.servant_to_reference(olaobjeto);
			
			OlaApp.Ola href = OlaHelper.narrow(ref);
			
			org.omg.CORBA.Object objRef = orb.resolve_initial_references("NameService");
			org.omg.CosNaming.NamingContextExt ncRef = NamingContextExtHelper.narrow(objRef);
			org.omg.CosNaming.NameComponent path[] = ncRef.to_name("ABC");
			
			ncRef.rebind(path, href);
			System.out.println("Servidor pronto e esperando...");
			
			for(;;) orb.run();
			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

}
