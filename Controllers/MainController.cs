using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        private class ContactResponse
        {
            public string  reason { get; set;}
            public bool isOk { get; set;}
        }

        [HttpPost("SendMail")]
        public async Task<IActionResult> SendMail([FromBody] MailModel mailModel)
        {
            if (mailModel == null)
            {
                BadRequest();
            }

            ContactResponse contactResp = new ContactResponse();

            try
            {
                MainServiceCommonFunctions mainCommOnFunc = new MainServiceCommonFunctions();
                await mainCommOnFunc.SendMail(NewtonJsonExtension.GetValuesBySectionName("mail", ConfigPath), mailModel, GetDomainPath);
                contactResp.isOk = true;
                contactResp.reason = "Wiadomość została wysłana pomyślnie";
            }
            catch (Exception ex)
            {
                mailModel.RequestDetail = NewtonJsonExtension.SerializeObject(Request.Headers.Keys.Select(key => new KeyValuePair<string, string>(key, Request.Headers[key])));
                mailModel.ErrorMessage = "ERROR MESSAGE:" + ex.Message + " $$$$$$$ STACK TRACE: " + ex.StackTrace.ToString();
                mailModel.ErrorGuid = Guid.NewGuid().ToString();
                mailModel.ErrorDate = DateTime.Now.ToString();
                FileWriter.CreateFile(NewtonJsonExtension.SerializeObject(mailModel),
                   GetDomainPath + "App_Data\\" + "mailError" + DateTime.Now.Ticks.ToString() + ".json");
                
                contactResp.isOk = false;
                contactResp.reason = "Nie udało się wysłać wiadomości";

                return StatusCode(500, contactResp);
            }

            return Ok(contactResp);
        }
    }
}