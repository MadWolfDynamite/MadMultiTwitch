using System.ComponentModel;

namespace MultiTwitchMVC.Client.Models
{
    public class StreamViewModel
    {
        public IList<string> Channels { get; set; }

        [DisplayName("Stream Chat")]
        public bool ShowChat { get; set; }

        [DisplayName("Dark Mode")]
        public bool IsDarkMode { get; set; }

        public StreamViewModel() : this(new List<string>(), false, true) { }

        public StreamViewModel(IList<string> channels, bool showChat, bool darkMode) 
        { 
            Channels = channels;

            ShowChat = showChat;
            IsDarkMode = darkMode;
        }
    }
}
