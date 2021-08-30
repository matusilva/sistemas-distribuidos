import sys
from omniORB import CORBA, PortableServer
import Example, Example__POA

# classe de implementacao
class Echo_i(Example__POA.Echo):
    def echoString(self, mesg):
        print "Recebi a Mensagem: ", mesg
        return mesg

# incializacao do orb
orb = CORBA.ORB_init(sys.argv, CORBA.ORB_ID)

# POA raiz, para disponibilizar objeto servidor ao client
poa = orb.resolve_initial_references("RootPOA")

# crio a instancia do servo Echo
ei = Echo_i()
# retornando a referencia do objeto com o metodo this()
eo = ei._this()

# mostrar os objeto IOR
print orb.object_to_string(eo)

# pego a referencia do POA e ativo
poaManager = poa._get_the_POAManager()
poaManager.activate()
orb.run()