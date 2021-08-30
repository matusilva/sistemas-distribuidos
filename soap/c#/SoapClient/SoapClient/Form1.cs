using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SoapClient
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Button1_Click_1(object sender, EventArgs e)
        {
            Matheus.MatheusSOAP ms = new Matheus.MatheusSOAP();
            label1.Text = ms.soma((int)numericUpDown1.Value, (int)numericUpDown2.Value).ToString();
        }
    }
}
