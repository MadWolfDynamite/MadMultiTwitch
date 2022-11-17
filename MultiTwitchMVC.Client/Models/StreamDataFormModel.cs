using Microsoft.AspNetCore.Mvc;
using System.ComponentModel;

namespace MultiTwitchMVC.Client.Models
{
    public class StreamDataFormModel
    {
        [HiddenInput]
        [DisplayName("Channel")]
        public string Channels { get; set; }

        [DisplayName("Stream Chat")]
        public bool ShowChat { get; set; }

        [DisplayName("Dark Mode")]
        public bool IsDarkMode { get; set; }

        public StreamDataFormModel() : this(string.Empty, false, true) { }

        public StreamDataFormModel(string channels, bool showChat, bool darkMode)
        {
            Channels = channels;

            ShowChat = showChat;
            IsDarkMode = darkMode;
        }
    }
}
