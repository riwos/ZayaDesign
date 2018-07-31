using System;
using System.Collections.Generic;
using System.IO;

namespace ZayaDesign.MainCommon
{
    public static class FileWriter
    {

        public enum FILEMODE
        {

            CREATE = 1,
            CREATENEW,
            OPEN,
            OPENORCREATE,
            APPEND,
            TRUNCATE
        }

        public enum FILEACCESS
        {
            READ = 1,
            WRITE,
            READANDWRITE
        }

        public static bool CreateFile(String fileContent, String fullPathWithNameFile)
        {
            bool result = false;
            try
            {
                if (!string.IsNullOrEmpty(fullPathWithNameFile) && !string.IsNullOrEmpty(fileContent))
                {
                    using (FileStream fs = new FileStream(fullPathWithNameFile, GetFileMode(FILEMODE.CREATE), GetFileAccess(FILEACCESS.WRITE)))
                    {

                        byte[] bytes = GetByteFromString(fileContent);
                        fs.Write(bytes, 0, bytes.Length);
                        fs.Flush();
                        fs.Position = 0;
                        fs.Close();
                    }
                    result = true;
                }
            }
            catch (ArgumentNullException e)
            {
            }
            catch (ArgumentException e)
            {
            }
            catch (IOException e)
            {
            }
            catch (NotSupportedException e)
            {
            }

            return result;
        }

        public static FileMode GetFileMode(FILEMODE mode)
        {
            FileMode m = FileMode.Create;
            switch (mode)
            {
                case FILEMODE.CREATE: m = FileMode.Create;
                    break;
                case FILEMODE.CREATENEW: m = FileMode.CreateNew;
                    break;
                case FILEMODE.OPEN: m = FileMode.Open;
                    break;
                case FILEMODE.OPENORCREATE: m = FileMode.OpenOrCreate;
                    break;
                case FILEMODE.APPEND: m = FileMode.Append;
                    break;
                case FILEMODE.TRUNCATE: m = FileMode.Truncate;
                    break;
            }

            return m;
        }

        public static FileAccess GetFileAccess(FILEACCESS access)
        {
            FileAccess m = FileAccess.ReadWrite;
            switch (access)
            {
                case FILEACCESS.READ:
                    m = FileAccess.Read;
                    break;
                case FILEACCESS.WRITE:
                    m = FileAccess.Write;
                    break;
                case FILEACCESS.READANDWRITE:
                    m = FileAccess.ReadWrite;
                    break;
            }

            return m;
        }

        public static byte[] GetByteFromString(String str) => !String.IsNullOrEmpty(str) ? System.Text.Encoding.UTF8.GetBytes(str) : new byte[0];
    }

}