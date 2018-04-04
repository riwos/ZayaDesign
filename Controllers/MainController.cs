using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using ZayaDesign.MainCommon;
using ZayaDesign.MainService;
using ZayaDesign.Model;

namespace ZayaDesign.Controllers
{
    [Route("api/[controller]")]
    public class MainController : Controller
    {
        private string GetDomainPath
        {
            get
            {
                return AppDomain.CurrentDomain.BaseDirectory;
            }
        }

        private string ConfigPath
        {
            get { return GetDomainPath + "App_Data\\" + "config.json"; }
        }

        [HttpPost("SendMail")]
        public IActionResult SendMail([FromBody] MailModel mailModel)
        {
            if (mailModel == null)
            {
                BadRequest();
            }

            try
            {
                MainServiceCommonFunctions.SendMail(NewtonJsonExtension.GetValuesBySectionName("mail", ConfigPath), mailModel, GetDomainPath);
            }
            catch (Exception ex)
            {
                mailModel.RequestDetail = NewtonJsonExtension.SerializeObject(Request.Headers.Keys.Select(key => new KeyValuePair<string, string>(key, Request.Headers[key])));
                mailModel.ErrorMessage = "ERROR MESSAGE:" + ex.Message + " $$$$$$$ STACK TRACE: " + ex.StackTrace.ToString();
                mailModel.ErrorGuid = Guid.NewGuid().ToString();
                mailModel.ErrorDate = DateTime.Now.ToString();
                FileWriter.CreateFile(NewtonJsonExtension.SerializeObject(mailModel),
                   GetDomainPath + "App_Data\\" + "mailError" + DateTime.Now.Ticks.ToString() + ".json");
                
                return StatusCode(500);
            }

            return Ok();
        }
    }
}