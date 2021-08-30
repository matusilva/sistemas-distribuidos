import sys
from omniORB import CORBA
import Example

# pego o ir passado no terminal
orb = CORBA.ORB_init(sys.argv, CORBA.ORB_ID)
ior = sys.argv[1]

# converter em string para objeto
obj = orb.string_to_object(ior)

# converter  a referencia Corba.Object em uma referencia Example.Echo
eo = obj._narrow(Example.Echo)

# se o ior nao for do tipo Example.Echo retorna none
if eo is None:
    print "A referencia do Objeto nao e uma Example::Echo"
    sys.exit(1)


message = "Ola, Matu"
result = eo.echoString(message)

print "Eu enviei '%s'. \nO objeto pegou '%s'. " % (message, result)