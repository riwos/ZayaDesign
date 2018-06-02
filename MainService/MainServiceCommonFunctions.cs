﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Net.Mime;
using System.Text;
using System.Threading.Tasks;
using HtmlAgilityPack;

namespace ZayaDesign.MainService
{
    public class MainServiceCommonFunctions
    {
        public async Task SendMail(List<string> paramsConfig, Model.MailModel mMail)
        {
            string errorMsg = String.Empty;
            using (var message = new System.Net.Mail.MailMessage())
            using (var smtp = new System.Net.Mail.SmtpClient())
            {
                try
                {
                    CreateSmtpObject(smtp, paramsConfig);
                    CreateMessageObject(message, paramsConfig, mMail);

                    if (message.IsBodyHtml)
                    {
                        InjectBodyOfMessageToHtml(paramsConfig, mMail);
                        CreateEmbededLogo(message, paramsConfig, mMail);
                    }

                    await smtp.SendMailAsync(message);
                }
                catch (System.Net.Mail.SmtpFailedRecipientsException faliedRecipientsException)
                {
                    errorMsg = faliedRecipientsException.Message;
                    throw;
                }
                catch (System.Net.Mail.SmtpFailedRecipientException failedRecipientException)
                {
                    errorMsg = failedRecipientException.Message;
                    throw;
                }
                catch (Exception ehttp)
                {
                    errorMsg = ehttp.Message;
                    throw;
                }
                finally
                {
                    smtp.Dispose();
                }

            }
        }

        private System.Net.Mail.SmtpClient CreateSmtpObject(System.Net.Mail.SmtpClient smtpClient, List<string> paramsConfig)
        {
            smtpClient.Host = paramsConfig.ElementAt(0);
            smtpClient.Port = Int32.Parse(paramsConfig.ElementAt(1));
            smtpClient.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
            smtpClient.EnableSsl = Boolean.Parse(paramsConfig.ElementAt(4));
            smtpClient.Timeout = Int32.Parse(paramsConfig.ElementAt(8));
            string smtpUser = paramsConfig.ElementAt(2);
            if (smtpUser != null && smtpUser != String.Empty)
            {
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new System.Net.NetworkCredential(smtpUser, paramsConfig.ElementAt(3));
            }
            else
                smtpClient.UseDefaultCredentials = true;

            return smtpClient;
        }

        private System.Net.Mail.MailMessage CreateMessageObject(System.Net.Mail.MailMessage message, List<string> paramsConfig, Model.MailModel mMail)
        {
            message.From = new System.Net.Mail.MailAddress(paramsConfig.ElementAt(5));
            message.To.Add(mMail.Mail);

            if (!string.IsNullOrEmpty(paramsConfig.ElementAt(9)))
                message.CC.Add(paramsConfig.ElementAt(9));

            if (!string.IsNullOrEmpty(paramsConfig.ElementAt(10)))
                message.Bcc.Add(paramsConfig.ElementAt(10));

            message.Subject = mMail.Title;
            message.IsBodyHtml = Boolean.Parse(paramsConfig.ElementAt(6));

            return message;
        }

        private System.Net.Mail.MailMessage CreateEmbededLogo(System.Net.Mail.MailMessage message, List<string> paramsConfig, Model.MailModel mMail)
        {
            string rawHtml = InjectBodyOfMessageToHtml(paramsConfig, mMail);
            AlternateView alternateViewHtml = AlternateView.CreateAlternateViewFromString(rawHtml, Encoding.UTF8, MediaTypeNames.Text.Html);
            Stream streamForLogo = CreateImageStream(paramsConfig.ElementAt(11));
            LinkedResource mainLogo = new LinkedResource(streamForLogo, "image/png");
            mainLogo.ContentId = "logo";
            alternateViewHtml.LinkedResources.Add(mainLogo);
            message.AlternateViews.Add(alternateViewHtml);

            return message;
        }

        private Stream CreateImageStream(string base64)
        {
            var bytes = Convert.FromBase64String(base64);
            var contents = new MemoryStream(bytes);
            return contents;
        }

        private string InjectBodyOfMessageToHtml(List<string> paramsConfig, Model.MailModel mMail)
        {
            string loadedHtml = System.Text.Encoding.UTF8.GetString(System.Convert.FromBase64String(paramsConfig.ElementAt(7)));
            HtmlDocument docHtml = new HtmlDocument();
            docHtml.LoadHtml(loadedHtml);
            HtmlNode el = docHtml.GetElementbyId("fsbody");
            el.InnerHtml = mMail.Body;
            el = docHtml.GetElementbyId("fsname");
            el.InnerHtml = mMail.Name;

            return docHtml.DocumentNode.InnerHtml;
        }
    }
}