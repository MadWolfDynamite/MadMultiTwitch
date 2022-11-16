using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

namespace MultiTwitchMVC.Client.Models
{
    public class StreamDataFormModel
    {
        [HiddenInput]
        [DisplayName("Channel")]
        public string StreamList { get; set; }

        [DisplayName("Stream Chat")]
        public bool ShowChat { get; set; }

        [DisplayName("Dark Mode")]
        public bool DarkMode { get; set; }

        public StreamDataFormModel() : this(string.Empty, false, true) { }

        public StreamDataFormModel(string streamList, bool showChat, bool darkMode)
        {
            StreamList = streamList;

            ShowChat = showChat;
            DarkMode = darkMode;
        }
    }
}
