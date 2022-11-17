namespace MultiTwitchMVC.Client.Models
{
    public class StreamChatViewModel
    {
        public IList<string> Channels { get; set; }

        public bool IsDarkMode { get; set; }

        public StreamChatViewModel() : this(new List<string>(), true) { }

        public StreamChatViewModel(IList<string> channels, bool isDarkMode)
        {
            Channels = channels;
            IsDarkMode = isDarkMode;
        }
    }
}
