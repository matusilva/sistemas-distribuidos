package OlaApp;
import org.omg.CORBA.ORB;
import OlaApp.OlaPOA;

public class OlaServo extends OlaPOA {
	
	private String msg = "\n Ol� Matu\n";
	private ORB orb;
	
	public void setORB(ORB orb_val) {
		orb = orb_val;
	}
	
	@Override
	public String msg() {
		// TODO Auto-generated method stub
		return msg;
	}

	@Override
	public void msg(String newMsg) {
		// TODO Auto-generated method stub
		msg = newMsg;
		
	}

}
