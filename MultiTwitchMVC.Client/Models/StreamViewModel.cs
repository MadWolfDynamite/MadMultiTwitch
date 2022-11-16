namespace MultiTwitchMVC.Client.Models
{
    public class StreamViewModel
    {
        public IList<string> Streams { get; set; }

        public bool ShowChat { get; set; }

        public bool DarkMode { get; set; }

        public StreamViewModel() : this(new List<string>(), false, true) { }

        public StreamViewModel(IList<string> streams, bool showChat, bool darkMode) 
        { 
            Streams = streams;

            ShowChat = showChat;
            DarkMode = darkMode;
        }
    }
}
