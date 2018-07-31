using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace ZayaDesign.MainCommon
{
    public static class NewtonJsonExtension
    {
        public static string SerializeObject(object ob)
        {
            return ob != null ? JsonConvert.SerializeObject(ob) : String.Empty;
        }

        public static JObject LoadJsonByFullPath(string fullPathFile)
        {
            JObject jObj = null;
            if (!string.IsNullOrEmpty(fullPathFile) && File.Exists(fullPathFile))
            {
                using (StreamReader file = File.OpenText(fullPathFile))
                using (JsonTextReader reader = new JsonTextReader(file))
                {
                    jObj = (JObject)JToken.ReadFrom(reader);
                }
            }
            
            return jObj != null ? jObj : new JObject();
        }

        public static List<string> GetValuesBySectionName(string sectionName, string fullPathJsonFile)
        {
            JObject tempObj = LoadJsonByFullPath(fullPathJsonFile);

            return !string.IsNullOrEmpty(sectionName) ? tempObj.GetValue(sectionName).Children().Select(t => t.First.ToString()).ToList() : new List<string>();
        }
    }
}
