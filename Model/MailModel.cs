using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ZayaDesign.Model
{
    public class MailModel
    {
        public string Name { get; set; }
        public string Mail { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public string ErrorMessage { get; set; }
        public string RequestDetail { get; set; }
        public string ErrorGuid { get; set; }
        public string ErrorDate { get; set; }
    }
}